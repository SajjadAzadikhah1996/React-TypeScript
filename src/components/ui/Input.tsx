import { InputProps } from '@/types/props';

export default function Input(props: InputProps) {
    return (
        <input
            type = 'text'
            className = 'w-64 outline-none border-2 border-gray-300 px-2'
            onChange = { props.handleChange }
        />
    );
}