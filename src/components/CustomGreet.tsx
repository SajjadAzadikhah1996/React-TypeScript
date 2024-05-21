import React from 'react';
import Greet from '@/components/Greet';

export default function CustomGreet(props: React.ComponentProps<typeof Greet>) {
    return (
        <div>
            {
                props.isLoggedIn ? <h1>CustomGreetComponent : { props.name }</h1> : <div>Login Component</div>
            }
        </div>
    );
}