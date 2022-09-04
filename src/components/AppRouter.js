import React, { useContext } from 'react';
import { Routes, Route /*, Navigate*/} from 'react-router-dom'
import { authRoutes ,publicRoutes} from '../routes';
/*import {SHOP_ROUTE} from '../utils/consts'*/
import {Context} from '../index'
import Shop from '../pages/Shop';


const AppRouter = () => {
    const {user} = useContext(Context)
    //console.log("User:",user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} exact />                
            )}
            <Route path="*" element={<Shop/>}/>             
        </Routes>
    );
}

export default AppRouter;
