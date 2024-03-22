import {lazy} from "react";

export const UsersLazy = lazy( () => import('./Users'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.