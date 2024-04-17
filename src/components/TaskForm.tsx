import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";

import styles from "./TaskForm.module.css";

import { ITask } from "../interfaces/Task";

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>; //alterado o state da lista
}

const TaskForm = ({ btnText, taskList, setTaskList }: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000); //criando um número de id aleatório

    const newTask: ITask = {id, title, difficulty}
    
    setTaskList!([...taskList, newTask]); //unindo em um array as tasks + a task criada
    // colocamos o '!' para sinalizar ao TS que mesmo que o argumento setTaskList seja opcional, sabemos que ele será passado para o componente
    setTitle("");
    setDifficulty(0);

    console.log(taskList);
  };  

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  return (
    <form className={styles.form} onSubmit={addTaskHandler}>
      <div className={styles.input_container}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          placeholder="title of the task"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="difficulty">Difficulty</label>
        <input
          type="text"
          name="difficulty"
          placeholder="Difficulty of the task"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
