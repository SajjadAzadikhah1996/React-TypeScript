'use client';

import { useState } from 'react';

type AuthUser = {
    name: string,
    email: string
}

export default function User() {
    const [ user, setUser ] = useState<AuthUser | null>(null);

    return (
        <div>
            {
                user ? <div>
                    username: { user.name } <br/>
                    email: { user.email }
                </div> : <h1>User is unauthenticated.</h1>
            }

            <button className = 'px-4 py-1 bg-blue-500 text-white mx-4'
                    onClick = { () => setUser(null) }>SignOut
            </button>
            <button className = 'px-4 py-1 bg-blue-500 text-white'
                    onClick = { () => setUser({ name: 'JohnDoe', email: 'JohnDoe@gmail.com' }) }
            >SignIn
            </button>
        </div>

    );
}