import {lazy} from "react";

export const ShortsLazy = lazy( () => import('./Shorts'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.