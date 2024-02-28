import {lazy} from "react";

export const UserLazy = lazy( () => import('./User'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.