'use client';

import { useReducer } from 'react';

type CounterState = {
    counter: number
}

type UpdateAction = {
    type: 'DECREMENT' | 'INCREMENT',
    payload: number
}

type ResetAction = {
    type: 'RESET',
}

type CounterAction = UpdateAction | ResetAction;

const initialState: CounterState = {
    counter: 0
};

const reducer = (state: CounterState, action: CounterAction) => {
    switch ( action.type ) {
        case 'INCREMENT':
            return { counter: state.counter + action.payload };
        case 'DECREMENT':
            return { counter: state.counter - action.payload };
        case 'RESET':
            return { counter: initialState.counter };
        default:
            return state;
    }
};

export default function Counter() {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <div>
            <h1 className = 'text-2xl'>{ state.counter }</h1>
            <button className = 'px-4 py-1 bg-blue-500 text-white'
                    onClick = { () => dispatch({ type: 'INCREMENT', payload: 10 }) }>Increment
            </button>
            <button className = 'px-4 py-1 bg-blue-500 text-white'
                    onClick = { () => dispatch({ type: 'DECREMENT', payload: 10 }) }>Decrement
            </button>
            <button className = 'px-4 py-1 bg-blue-500 text-white'
                    onClick = { () => dispatch({ type: 'RESET' }) }>Reset
            </button>
        </div>
    );
}