function some(array, predicate) {
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return true;
        }
    }
    return false;
}
function filter(array, predicate) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}
function reduce(array, predicate, initialValue) {
    if (array.length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    let accumulator = initialValue !== undefined ? initialValue : array[0];
    const startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = predicate(accumulator, array[i], i, array);
    }

    return accumulator;
}
const arr = [1, 2, 3];

alert(some(arr, el => el > 1));
alert(filter(arr, el => el > 1));
alert(reduce(arr, (sum, el) => sum + el, 0));
