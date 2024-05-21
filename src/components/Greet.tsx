type GreetProps = {
    name: string
    isLoggedIn: boolean
}

export default function Greet(props: GreetProps) {
    return (
        <div>
            {
                props.isLoggedIn ? <h1>Hello, { props.name }</h1> : <h1>Hello, guest</h1>
            }
        </div>
    );
}