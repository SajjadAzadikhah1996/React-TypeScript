import Login from '@/components/Login';
import React from 'react';
import { ProfileProps } from '@/components/Profile';

type DashboardProps = {
    isLoggedIn: boolean
    component: React.ComponentType<ProfileProps>
}
export default function Dashboard({ isLoggedIn, component: Component }: DashboardProps) {
    if ( isLoggedIn )
        return <Component name = 'JohnDoe'/>;
    return <Login/>;
}