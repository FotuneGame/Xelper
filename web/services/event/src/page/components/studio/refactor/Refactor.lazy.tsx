import {lazy} from "react";

export const RefactorLazy = lazy( () => import('./Refactor'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.