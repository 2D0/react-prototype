/// <reference types="react-scripts" />

//윈도우
declare global {
  export default interface window {
    backPress: any;
  }
}

//환경변수
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PUBLIC_URL: string;
    REACT_APP_URL: string;
    REACT_APP_URL_TOKEN: string;
    REACT_APP_API_URL: string;
    REACT_APP_LOCAL_PORT: number;
    REACT_APP_API_PORT: number;
    REACT_APP_API_PORT2: number;
    REACT_APP_REST_API_KEY: string;
    REACT_APP_REDIRECT_URI: string;
    REACT_APP_SUPABASE_PROJECT_URL: string;
    REACT_APP_SUPABASE_ANON_KEY: string;
  }
}

//폰트
declare module '*.ttf';
declare module '*.otf';
declare module '*.woff';
declare module '*.woff2';

//이미지
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
