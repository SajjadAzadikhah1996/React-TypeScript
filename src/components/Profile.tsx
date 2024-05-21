export type ProfileProps = {
    name: string
}

export default function Profile({ name }: ProfileProps) {
    return (
        <div>profile component name is { name }</div>
    );
}