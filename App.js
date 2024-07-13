// U92725213

import React from 'react';
import FancyText from './FancyText';
import TaskGenerator from './TaskGenerator';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header>
        <FancyText title text="Task Management and Motivation App" />
      </header>
      <main>
        <TaskGenerator />
      </main>
      <footer>
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
