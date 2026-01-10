//Ex1.
const sumArray = (arr) => arr.reduce((sum, curr) => sum += curr)
console.log(sumArray([9, 2, 3, 4]));

//Ex2.
const countOccurrences = (arr, value) => {
    let count = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element == value) {
            count++;
        }
    }
    return count;
}

const countOccurrencesShort = (arr, val) => {
    if (!Array.isArray(arr)) return 0
    return arr.filter(x => x == val).length
}
// Ex3
const removeDuplicate = (arr) => {
    let uniqueArr = []
    arr.forEach(element => {
        if (uniqueArr.includes(element)) return;
        uniqueArr.push(element);
    });
    return uniqueArr;
};

const removeDuplicateUsingSet = (arr) => {
    const set = new Set();
    arr.forEach(element => {
        set.add(element);
    });
    const result = Array.from(set);
    return result
}

//Ex4:
const flattenArray = (arr) => {
    let result = [];
    arr.forEach(element => {
        result.push(...element);
    });
    console.log("🚀 ~ flattenArray ~ result:", result)
    return result;
}

flattenArray([[1, 2], [3, 4], [4, 5, 6, 7]])


console.log(((arr) => arr.flat())([[1, 2], [3, 4], [4, 5, 6, 7]]))

// Ex5
const isSymmetric = (array) => {
    for (let index = 0; index < array.length; index++) {
        if (array[index] !== array[array.length - 1 - index]) {
            return false;
        }
    }
    return true;
}

const findSecondLargest = (arr) => {

    let max = 0;
    //Find max of array
    arr.forEach(item => {
        if (item > max) {
            max = item;
            return item;
        }
    })
    //Remove max value out of array

    let secondList = arr.filter(item => item !== max);
    //Find  max off array again
    max = 0;
    secondList.forEach(item => {
        if (item > max) {
            max = item;
        }
    })
    return max
}

