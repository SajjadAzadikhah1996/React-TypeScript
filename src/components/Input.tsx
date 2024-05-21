import React from 'react';

type InputProps = {
    children: string
} & Omit<React.ComponentProps<'button'>, string>

export default function Input({ children, ...rest }: InputProps) {
    return (
        <input className = 'ml-8 border-2' { ...rest } value = { children }/>
    );
}