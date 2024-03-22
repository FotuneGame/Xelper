import {lazy} from "react";

export const ForgetLazy = lazy( () => import('./Forget'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.