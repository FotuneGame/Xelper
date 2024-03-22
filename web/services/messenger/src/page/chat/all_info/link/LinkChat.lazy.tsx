import {lazy} from "react";

export const LinkChatLazy = lazy( () => import('./LinkChat'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.