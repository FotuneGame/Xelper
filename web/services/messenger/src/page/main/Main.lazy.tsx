import {lazy} from "react";

export const MainLazy = lazy( () => import('./Main'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.