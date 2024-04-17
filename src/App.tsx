import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import styles from './App.module.css';

import { ITask } from './interfaces/Task';

function App() {

  const [taskList, setTaskList] =useState<ITask[]>([]);

  return (
    <div className="App">
        <Header />
        <main className={styles.contentWrapper}>
          <div className='form'>
            <h2>What are you going to do?</h2>
            <TaskForm btnText="Create task" taskList={taskList} setTaskList={setTaskList}/>
          </div>
          <div className='list'>
            <h2>Your tasks:</h2>
            <TaskList taskList={taskList}/>
          </div>
        </main>
        <Footer />
    </div>
  );
}

export default App;
