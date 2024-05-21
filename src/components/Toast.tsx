type VerticalPosition = 'left' | 'center' | 'right';
type HorizontalPosition = 'top' | 'center' | 'bottom';

type ToastProps =
    {
        position?: Exclude<`${ VerticalPosition }-${ HorizontalPosition }`, 'center-center'> | 'center';
    }

export default function Toast({ position }: ToastProps) {
    return (
        <div>
            Toast Component
        </div>
    );
}