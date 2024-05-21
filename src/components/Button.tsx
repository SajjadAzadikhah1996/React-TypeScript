import React from 'react';

type ButtonProps = {
    variant: 'primary' | 'secondary'
    children: React.ReactNode
} & React.ComponentProps<'button'>

export default function Button({ variant, children, ...rest }: ButtonProps) {
    return (
        <button className = { `${ variant }` } { ...rest }>
            { children }
        </button>
    );
}