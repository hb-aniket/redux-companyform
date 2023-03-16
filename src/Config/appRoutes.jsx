import {createBrowserRouter} from 'react-router-dom'
import { routeList} from './routeList'
import React from 'react';
import Layout from '../Components/Parts/Layout';
import AddCompany from '../Components/Pages/AddCompany';



export const router = createBrowserRouter([

    {
    path:routeList.DEFAULT,
    element:<Layout/>,
    children:[
        {
            path:routeList.ADD_COMPANY,
            element:<AddCompany/>
        },
    ]
},





]);


export default router;
