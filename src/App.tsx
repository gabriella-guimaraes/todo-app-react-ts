import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import styles from "./App.module.css";

import { ITask } from "./interfaces/Task";
import Modal from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null); // realiza o gerenciamento da tarefa que queremos atualizar

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  }; // retorna a lista de arrays menos o item que vamos remover

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  //atualização das tarefas na lista
  const updateTask = (id: number, title: string, difficulty: number) => {
    // criando um novo objeto com base na interface ITask
    const updatedTask: ITask = {id, title, difficulty}; // item que será atualizado
    const updatedItems =  taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    }) // verifica cada tarefa na lista e atualiza a tarefa de acordo com id. Caso contrário, a tarefa permanece igual

    setTaskList(updatedItems); // exibe as tasks da lista antiga + a task atualizada

    hideOrShowModal(false);

  };

  return (
    <div className="App">
      <Modal
        children={
          <TaskForm
            btnText="Edit Task"
            taskList={taskList}
            task={taskToUpdate}
            handleUpdate={updateTask}
          />
        }
      />
      <Header />
      <main className={styles.contentWrapper}>
        <div className="form">
          <h2>What are you going to do?</h2>
          <TaskForm
            btnText="Create task"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div className="list">
          <h2>Your tasks:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
