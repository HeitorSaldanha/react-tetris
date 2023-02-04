import React from 'react';
import { createRoot } from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import bgImage from '@images/bg.jpg';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: url(${bgImage}) #000;
    background-size: cover;
    background-position: center;
  }
`;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);
