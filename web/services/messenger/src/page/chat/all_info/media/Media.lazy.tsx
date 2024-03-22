import {lazy} from "react";

export const MediaLazy = lazy( () => import('./Media'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.