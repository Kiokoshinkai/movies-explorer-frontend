import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './error.css'

function NotFound() {
  const navigate = useNavigate();
    return (
        <div className="error">
            <h1 className='error__title' >404</h1>
            <p className='error__subtitle' >Страница не найдена</p>
            <a href='/#' className='error__link' rel='noreferrer' onClick={(e) => {e.preventDefault(); navigate(-1)}}>Назад</a>

        </div>
    );
}

export default NotFound;
