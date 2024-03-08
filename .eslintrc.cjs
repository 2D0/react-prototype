module.exports = {
  root: true,
  // eslint에 어떠한 parser를 사용할지 알려주는 옵션
  // eslint가 typescript 문법을 이해할 수 있게 해준다.
  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },

  env: {
    browser: true,
    node: true,
  },

  // typescript-eslint에서 제공하는 규칙들을 사용할 수 있게 해준다.
  plugins: ['import', 'react', 'react-hooks', '@typescript-eslint', 'prettier'],

  // 어떠한 규칙들과 설정으로 eslint를 사용할지 명시한다.
  // 아래와 같이 작성하면 default 값으로 적용이 된다.
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],

  rules: {
    // jsx 파일 확장자 .jx, .jsx, .ts, .tsx 허용
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    // [error] Delete `␍` prettier/prettier
    'prettier/prettier': ['error', { endOfLine: 'auto' }],

    // var 금지
    'no-var': 'warn',

    // 불필요한 세미콜론 사용 시 에러 표시
    'no-extra-semi': 'error',

    // 사용하지 않는 변수가 있을 때 발생하는 경고 비활성화
    'no-unused-vars': ['off'],

    // 콘솔 사용 시 발생하는 경고 비활성화
    'no-console': ['off'],

    // export문이 하나일 때 default export 사용 권장 경고 비활성화
    'import/prefer-default-export': ['off'],

    // react hooks의 의존성배열이 충분하지 않을 때 경고 표시
    'react-hooks/exhaustive-deps': ['warn'],

    // 컴포넌트 이름은 PascalCase로
    'react/jsx-pascal-case': 'warn',

    // 반복문으로 생성하는 요소에 key 강제
    'react/jsx-key': 'error',

    // 디버그 허용
    'no-debugger': 'off',

    // 화살표 함수의 파라미터가 하나일때 괄호 생략
    'arrow-parens': ['warn', 'as-needed'],
  },

  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: './tsconfig.json',
    },
  },
};
