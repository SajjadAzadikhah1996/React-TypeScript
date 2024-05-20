export type GreetProps = {
    name: string,
    isLoggedIn: boolean,
    messages?: number,
}

export default function User(props: GreetProps) {
    const { messages = 0 } = props;
    return (
        <div>
            {
                props.isLoggedIn ?
                    <h1>{ props.name }, { messages } messages</h1> :
                    <h1>Hello Guest</h1>
            }
        </div>
    );
}