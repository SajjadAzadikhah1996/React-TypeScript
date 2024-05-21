import React from 'react';

type TypographyOwnProps<E extends React.ElementType> = {
    children: React.ReactNode
    as?: E
}

type TypographyProps<E extends React.ElementType> =
    TypographyOwnProps<E>
    & Omit<React.ComponentProps<E>, keyof TypographyOwnProps<E>>

export default function Typography<E extends React.ElementType = 'span'>(
    { as, children, ...props }: TypographyProps<E>) {

    const Component = as || 'span';

    return (
        <Component { ...props }>
            { children }
        </Component>
    );
}