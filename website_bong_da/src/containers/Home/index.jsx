import React from 'react';
import { useTranslation } from 'react-i18next';
import test from '@src/apis/test';
import logo from './logo.svg';
import StyledApp from './index.style';

const App = () => {
  const { t } = useTranslation();
  const testtt = test.test();
  return (
    <StyledApp>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learnReact')}
        </a>
        <div>{testtt}</div>
      </header>
    </StyledApp>
  );
};

export default App;
