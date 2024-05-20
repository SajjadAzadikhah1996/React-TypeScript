import React from 'react';

export type ButtonProps = {
    children: React.ReactNode,
    handleClick: (eve: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props: ButtonProps) {
    return (
        <button
            className = 'px-4 py-1 bg-blue-500 text-white'
            onClick = { props.handleClick }
        >
            { props.children }
        </button>
    );
}