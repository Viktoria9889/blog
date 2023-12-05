import React from "react"
import { Routes, Route, Navigate } from 'react-router-dom'
import { routes } from "../router/index"

const AppRouter = () => {
    //exact для того щоб реакт розумів що це різні маршрути бо напочатку і там і там слово posts
    return (
        <Routes>
            {routes.map(route =>
                <Route
                    component={route.component}
                    path={route.path}
                    element={route.element}
                    exact={route.exact}
                />
            )}
            <Route path="/*" element={<Navigate to="/posts" replace />} />
        </Routes>
    );
}

export default AppRouter
// {routes.map(route =>
//     <Route
//     component={route.component}
//     path={route.path}
//     exact={route.exact}
//     />
// )}