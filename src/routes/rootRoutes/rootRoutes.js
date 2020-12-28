
import React from "react";
import { routeEndpoints } from "../routeEndpoints";
const UserForm = React.lazy(()=>import("../../pages/userForm/UserForm"));
const CongratsPage = React.lazy(()=>import("../../pages/congratulation/CongratsPage"));


export const rootRoutes = [
    {path: routeEndpoints.initial, component: UserForm},
    {path: routeEndpoints.congratulation, component: CongratsPage},
]