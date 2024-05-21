import Button from '@/components/Button';
import Input from '@/components/Input';

export default function Home() {
    return (
        <main>
            <Button variant = 'primary'>
                primary
            </Button>
            <Button variant = 'secondary'>
                secondary
            </Button>
            <Input>
                search for...
            </Input>
        </main>
    );
}
