import React from 'react';

type ButtonProps = {
    children: React.ReactNode,
    style?: React.CSSProperties | undefined,
    handleClick?: (eve: React.MouseEvent<HTMLButtonElement>) => void | undefined
}

type InputProps = {
    handleChange: (eve: React.ChangeEvent<HTMLInputElement>) => void
}