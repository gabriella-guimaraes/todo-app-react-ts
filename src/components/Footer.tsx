import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div>
        <footer className={styles.footer}>
        <p>
          <span>React + TS TODO</span> @ 2024
        </p>
      </footer>
    </div>
  )
}

export default Footer