import {lazy} from "react";

export const SearchLazy = lazy( () => import('./Search'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.