import {lazy} from "react";

export const CodeLazy = lazy( () => import('./Code'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.