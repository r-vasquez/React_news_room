import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';

// For Codesandbox to load icons:
const styleLink = document.createElement('link');
styleLink.rel = 'stylesheet';
styleLink.href = 'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css';
document.head.appendChild(styleLink);

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
    </div>
  );
}

export default App;
