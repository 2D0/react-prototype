/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useContext, useState, useEffect, createContext } from 'react';
import {
  Session,
  SignInWithPasswordCredentials,
  User,
  createClient,
} from '@supabase/supabase-js';

const supabase = createClient(
  process.env.REACT_APP_SUPABASE_PROJECT_URL as string,
  process.env.REACT_APP_SUPABASE_ANON_KEY as string,
);

interface AuthContextType {
  isLoading: boolean;
  signOut: () => any;
  signUp: (e: SignInWithPasswordCredentials) => any;
  signInWithPassword: (e: SignInWithPasswordCredentials) => any;
  user: User | null | undefined;
  session: Session | null | undefined;
}

const AuthContext = createContext<AuthContextType>({
  isLoading: true,
  signOut: () => {},
  signUp: (_: SignInWithPasswordCredentials) => {},
  signInWithPassword: (_: SignInWithPasswordCredentials) => {},
  user: null,
  session: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>();
  const [session, setSession] = useState<Session | null>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      try {
        setSession(session);
        supabase.auth.getUser().then(({ data }) => {
          if (_event === 'INITIAL_SESSION' || _event === 'SIGNED_IN') {
            setIsLoading(false);
          }
          setUser(data.user);
        });
      } catch (error) {
        // todo: sentry
        console.error('unexpected error');
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const value = {
    isLoading: isLoading,
    signUp: data => {
      supabase.auth.signUp(data);
    },
    signInWithPassword: data => {
      supabase.auth.signInWithPassword(data);
    },
    signOut: () => {
      supabase.auth.signOut();
    },
    user,
    session,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

type DeepRequired<T> = {
  [P in keyof T]-?: T[P] extends object ? DeepRequired<T[P]> : T[P];
};

export function useAuth<T extends 'required' | 'optional' = 'optional'>() {
  return useContext(AuthContext) as T extends 'required'
    ? AuthContextType & { user: DeepRequired<User> }
    : AuthContextType;
}
