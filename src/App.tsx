import React from 'react';
import { BrowserRouter } from 'react-router-dom';

//상태 관리
import { RecoilRoot } from 'recoil';
import { AuthProvider } from 'src/contexts/AuthContext';

//스타일
import GlobalStyle from 'src/styles/Global.style';

//컴포넌트
import { LayoutRoot } from 'src/components/Layouts';
import { ReactQueryProvider } from 'src/providers/reactquery-provider';

function App() {
  return (
    <BrowserRouter>
      <ReactQueryProvider>
        <RecoilRoot>
          <AuthProvider>
            <LayoutRoot />
          </AuthProvider>
          <GlobalStyle />
        </RecoilRoot>
      </ReactQueryProvider>
    </BrowserRouter>
  );
}

export default App;
