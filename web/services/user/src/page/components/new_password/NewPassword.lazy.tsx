import {lazy} from "react";

export const NewPasswordLazy = lazy( () => import('./NewPassword'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.