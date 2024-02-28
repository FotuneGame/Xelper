import {lazy} from "react";

export const EventLazy = lazy( () => import('./Event'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.