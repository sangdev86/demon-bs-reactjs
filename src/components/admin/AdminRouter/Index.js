import React from 'react';
import {Route } from "react-router-dom";
import AdminTemplate from "../AdminTemplate/Index";
const AdminRouter1 = (props) => {
    const { component: Component, ...rest } = props;
    return (
        <Route 
             {...rest}
            render={routerProps => {
                return (
                       <AdminTemplate>
                           <Component {...routerProps}/>
                       </AdminTemplate>
                )
            }} />
        
          
    )
}
export default AdminRouter1;