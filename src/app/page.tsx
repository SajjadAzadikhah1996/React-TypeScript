import RandomNumber from '@/components/RandomNumber';

export default function Home() {
    return (
        <main>
            <RandomNumber number = { 0 } isZero/>
            <RandomNumber number = { 10 } isPositive/>
            <RandomNumber number = { -10 } isNegative/>
        </main>
    );
}
