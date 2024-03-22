import { Suspense } from 'react';
import {createRoot} from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";
import ErrorCard from "@packages/shared/UI_KIT/ErrorCard/ErrorCard";
import Loading from "@packages/shared/UI_KIT/Loading/Loading";
import 'bootstrap/dist/css/bootstrap.css';

const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)


container.render(
    <Suspense fallback={<Loading />}>
        <RouterProvider router={router} errorElement={<ErrorCard/>}  future={{ v7_startTransition: true }} fallback={<Loading />}/>
    </Suspense>
)