import React from 'react';
import "./ErrorCard.module.scss";

const ErrorCard = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Упс! Что-то пошло не так...</h1>
                            <p className="card-text">
                                К сожалению, возникла ошибка при загрузке страницы. Возможно, запрашиваемая страница не найдена или произошла другая техническая проблема. Попробуйте обновить страницу или вернуться на предыдущую страницу.
                            </p>
                            <img src="/images/error.svg" alt="Error Icon" className="card-img-bottom" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorCard;