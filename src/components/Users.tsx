import React from 'react';
import User, { GreetProps } from '@/components/User';

export default function Users(props: { statusText: 'loading' | 'error' | 'fulfilled', users: GreetProps[] }) {
    let component;
    if ( props.statusText === 'loading' )
        component = <div>Loading...</div>;
    else if ( props.statusText === 'error' )
        component = <div>
            Fetch data failed.
            <button className = 'px-4 py-1 bg-blue-500 text-white'>try again</button>
        </div>;
    else if ( props.statusText === 'fulfilled' )
        component = props.users.map(user => (
            <User key = { user.name } name = { user.name } isLoggedIn = { user.isLoggedIn }
                  messages = { user.messages }/>
        ));

    return component;
}