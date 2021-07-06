import React from 'react';
import styles from '../styles/MUIButton.module.css'

export const MUIButton: React.FC<{ onClickButton: Function, title: string }> = ({ onClickButton, title }) => {

    const handOnClickButton = () => {
        onClickButton()
    }

    return (
        <div className="background-button">
            <button onClick={handOnClickButton} className={styles.MUIButton}>{title}</button>
        </div>
    )
}