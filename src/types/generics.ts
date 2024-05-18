/*
The following are the benefits of TypeScript generics:
    1.  Leverage type checks at the compile time.
    2. Eliminate type castings.
    3. Allow you to implement generic algorithms.
*/

const identity = <T>(arg: T): T => {
    return arg;
};

const output1 = identity<string>('JohnDoe');
const output2 = identity<boolean>(true);
const output3 = identity<string[]>([ 'item1', 'item2' ]);

console.log(output1.at(1));
console.log(output2);
console.log(output3.length);

// ==========================================================================

interface Interface<K, V> {
    key: K,
    value: V,

    // method
    add?(arg: string): string,
}

let month: Interface<string, number> = {
    key: 'jan',
    value: 1
};

console.log(month);

// index type

interface Options<T> {
    [ name: string ]: T; // key can be string type but value must be type of T
}

let inputOptions: Options<boolean> = {
    disabled: false,
    'visible': true,
};
