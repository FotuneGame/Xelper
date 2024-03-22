import {lazy} from "react";

export const CreateLazy = lazy( () => import('./Create'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.