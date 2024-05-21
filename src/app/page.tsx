import Dashboard from '@/components/Dashboard';
import Profile from '@/components/Profile';


export default function Home() {
    return (
        <main>
            <Dashboard isLoggedIn = { true } component = { Profile }/>
        </main>
    );
}
