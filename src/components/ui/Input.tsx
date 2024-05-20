import React from 'react';

export type InputProps = {
    handleChange: (eve: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {
    return (
        <input
            type = 'text'
            className = 'w-64 outline-none border-2 border-gray-300 px-2'
            onChange = { props.handleChange }
        />
    );
}