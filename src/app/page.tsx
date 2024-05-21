import Toast from '@/components/Toast';

export default function Home() {
    return (
        <main>
            <Toast position = 'left-bottom'/>
            <Toast position = 'center'/>
            <Toast position = 'right-top'/>
        </main>
    );
}
