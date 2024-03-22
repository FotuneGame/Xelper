import {lazy} from "react";

export const AccountLazy = lazy( () => import('./Account'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.