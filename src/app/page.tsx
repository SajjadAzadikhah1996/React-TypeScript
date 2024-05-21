import Typography from '@/components/Typography';

export default function Home() {
    return (
        <main>
            <Typography>span tag</Typography><br/>
            <Typography as = 'label' htmlFor = 'username'>label tag</Typography>
            <Typography as = 'h1'>h1 tag</Typography>
            <Typography as = 'a' >a tag</Typography>
        </main>
    );
}
