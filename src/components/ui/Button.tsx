import { ButtonProps } from '@/types/props';

export default function Button(props: ButtonProps) {
    return (
        <button
            className = 'px-4 py-1'
            style = { props.style }
            onClick = { props.handleClick }
        >
            { props.children }
        </button>
    );
}