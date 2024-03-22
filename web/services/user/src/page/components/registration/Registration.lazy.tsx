import {lazy} from "react";

export const RegistrationLazy = lazy( () => import('./Registration'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.