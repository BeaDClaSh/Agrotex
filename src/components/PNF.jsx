import React from 'react';
import {useNavigate} from 'react-router-dom';
import styles from '../css/PNF.module.scss';

const PageNotFound = () => {
    const navigate = useNavigate();

    const handleGoToLoginClick = (e) => {
        e.preventDefault(); // Предотвращаем стандартное поведение ссылки
        navigate('/Welcome'); // Перенаправляем на страницу логина
    };

    return (
        <div className={styles.container_PNF}>
            <h1 className={styles.h1PNF}>Error 404</h1>
            <a className={styles.redirectButton_PNF} onClick={handleGoToLoginClick}>
                <h2 className={styles.redirectButton_PNFtext}>Back to Login</h2>
            </a>
        </div>
    );
};

export default PageNotFound;
