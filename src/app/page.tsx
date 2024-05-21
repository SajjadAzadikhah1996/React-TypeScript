import Greet from '@/components/Greet';
import CustomGreet from '@/components/CustomGreet';

export default function Home() {
    return (
        <main>
            <Greet name = 'JohnDoe' isLoggedIn = { true }/>
            <CustomGreet name = 'JaneDoe' isLoggedIn = { true }/>
        </main>
    );
}
