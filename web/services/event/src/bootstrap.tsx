import { Suspense } from 'react';
import {createRoot} from "react-dom/client";
import { RouterProvider} from "react-router-dom";
import {router} from "@/router/Router";
import Loading from "@packages/shared/UI_KIT/Loading/Loading";


const root = document.getElementById('root')

if(!root) {
    throw new Error('root not found')
}

const container = createRoot(root)


container.render(
    <Suspense fallback={<Loading />}>
        <RouterProvider router={router}/>
    </Suspense>
)