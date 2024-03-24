import React from 'react';
import "./ErrorCard.module.scss";

import ErrorSVG from "./images/error.svg";

const ErrorCard = () => {
    return (
        <div className="card container">
            <div className="d-lg-flex justify-content-center align-items-center p-4">
                <div className="card-body col-12 col-lg-9">
                    <h1 className="card-title">Упс! Что-то пошло не так...</h1>
                    <p className="card-text">
                        К сожалению, возникла ошибка при загрузке страницы. Возможно, запрашиваемая страница не найдена или произошла другая техническая проблема. Попробуйте обновить страницу или вернуться на предыдущую страницу. Перекати теранозавр...
                    </p>
                </div>
                <ErrorSVG className={"col-12 col-lg-3 "} width={"150px"} height={"150px"}/>
            </div>
        </div>
    );
};

export default ErrorCard;