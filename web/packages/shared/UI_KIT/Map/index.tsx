import React from "react";

//Тестовая карта
const Map = React.memo(() =>{
    return (
        <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A3eed6f6eb7f99e0ba0fea2c7deda8d11030fcdf8256ac87b829192365d10c30d&amp;source=constructor"
            width="500" height="400" frameBorder="0">
        </iframe>
    )
});

export default Map;