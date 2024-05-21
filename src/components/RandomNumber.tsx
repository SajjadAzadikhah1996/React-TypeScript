type Number = {
    number: number
}

type Positive = Number & {
    isPositive: boolean
    isNegative?: never
    isZero?: never
}

type Negative = Number & {
    isNegative: boolean
    isPositive?: never
    isZero?: never
}

type Zero = Number & {
    isZero: boolean
    isNegative?: never
    isPositive?: never
}

type RandomNumberProps = Positive | Negative | Zero

export default function RandomNumber({ number, isPositive, isNegative, isZero }: RandomNumberProps) {
    return (
        <div className = 'm-4'>
            { number } is { isPositive && 'positive' } { isNegative && 'negative' } { isZero && 'zero' }
        </div>
    );
}