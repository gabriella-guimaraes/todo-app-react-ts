import React from "react";

import styles from "./Modal.module.css";

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  const closeModal = (e: React.MouseEvent): void => {
    // Capturando o modal pelo id
    const modal = document.querySelector("#modal");
    // Adicionando o atributo/classe "hide" no modal
    modal!.classList.add("hide"); // O "hide" vem do arquivo de estilos global do projeto
  };

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>Modal text goes here</h2>
        {children}
      </div>
    </div>
  );
};

export default Modal;
