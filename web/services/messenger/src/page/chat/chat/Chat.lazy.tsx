import {lazy} from "react";

export const ChatLazy = lazy( () => import('./Chat'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.