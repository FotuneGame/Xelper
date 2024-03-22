import {lazy} from "react";

export const AllLazy = lazy( () => import('./All'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.