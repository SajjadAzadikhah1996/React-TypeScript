'use client';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function User(props: GreetProps) {
    const { messages = 0 } = props;
    return (
        <div>
            {
                props.isLoggedIn ?
                    <div>{ props.name }, { messages } messages
                        <Button
                            handleClick = { (eve) => console.log(eve) }
                            style = { { background: '#135ebd', color: 'white' } }
                        >
                            Mark as read
                        </Button>
                    </div> :
                    <h1>Hello Guest <Input handleChange = { (eve) => console.log(eve.target.value) }/></h1>
            }
        </div>
    );
}