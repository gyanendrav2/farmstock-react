
import React from "react";
const UserForm = React.lazy(()=>import("../../pages/userForm/UserForm"));

export const rootRoutes = [
    {path:'/', component: UserForm},
]