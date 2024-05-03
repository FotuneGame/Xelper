import React from 'react';

interface IProps{
    auth:boolean,
    exit:()=>void,
    switchOffCanvas: ()=>void,
}

const SearchNavbar = ({auth,exit,switchOffCanvas}) => {
    return (
        <div>
            Настройки поиска
        </div>
    );
};

export default SearchNavbar;