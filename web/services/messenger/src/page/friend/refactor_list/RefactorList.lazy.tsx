import {lazy} from "react";

export const RefactorListLazy = lazy( () => import('./RefactorList'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.