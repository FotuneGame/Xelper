import {lazy} from "react";

export const MessengerLazy = lazy( () => import('./Messenger'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.