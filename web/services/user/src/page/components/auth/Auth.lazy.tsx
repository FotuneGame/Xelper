import {lazy} from "react";

export const AuthLazy = lazy( () => import('./Auth'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.