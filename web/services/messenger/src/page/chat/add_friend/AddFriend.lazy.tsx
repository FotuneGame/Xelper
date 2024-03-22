import {lazy} from "react";

export const AddFriendLazy = lazy( () => import('./AddFriend'));

//lazy позволяет отложить загрузку кода компонента до тех пор, пока он не будет отрисован в первый раз.