type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

export default function List<T>({ items, onClick }: ListProps<T>) {
    return (
        <ul className = 'm-4'>
            list of items:
            {
                items.map((item, index) => (
                    <li key = { `list-${ index }` } onClick = { () => onClick(item) }>{ JSON.stringify(item) }</li>
                ))
            }
        </ul>
    );
}