import React, { useContext } from 'react';
import { Routes, Route /*, Navigate*/} from 'react-router-dom'
import { authRoutes ,publicRoutes} from '../routes';
/*import {SHOP_ROUTE} from '../utils/consts'*/
import {Context} from '../index'


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                <Route key={path} path={path} element={<Component/>} exact />                
            )}
            {/*<Route element={<Navigate to={SHOP_ROUTE} replace={true} />}/> */}
            
            
            
        </Routes>
    );
}

export default AppRouter;
