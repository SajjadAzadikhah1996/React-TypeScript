import Users from '@/components/Users';

const users = [
    { name: 'Name1', isLoggedIn: true, messages: 12 },
    { name: 'Name2', isLoggedIn: false, messages: 8 },
    { name: 'Name3', isLoggedIn: true}
];

export default function Home() {
    return (
        <main>
            <Users statusText = 'fulfilled' users = { users }/>
        </main>
    );
}
