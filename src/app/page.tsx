'use client';

import List from '@/components/List';

export default function Home() {
    return (
        <main>
            <List items = { [ 1, 2, 3 ] } onClick = { (value) => console.log(value) }/>
            <List items = { [ 'one', 'tow', 'three' ] } onClick = { (value) => console.log(value) }/>
            <List items = { [ { name: 'JohnDoe' } ] } onClick = { (value) => console.log(value) }/>
        </main>
    );
}
