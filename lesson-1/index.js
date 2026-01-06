// Exe 1

const productInfo = (product, price) => {
    return `Sản phẩm: ${product}, Giá: ${price} VNĐ`;
}

const result = productInfo("Sách", 20000);
// console.log(result)

//Exe 2

//Định nghĩa hàm
const greet = (userName) => {
    return `Xin chào ${userName}`;
}
//Gọi hàm
console.log(greet("Sơn"));

// Ex3
// 5 => 1+2+3+4+5
const sumUpTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        // sum += i;
        sum = sum + i;
    }
    return sum;
}

const sumValue = sumUpTo(5);
console.log("🚀 ~ sumValue:", sumValue);

// Ex4
// Math.pow(n, 2);
const square = (n) => Math.pow(n,2);
console.log("🚀 ~ square ~ square:", square(3))

//Ex5

const isOdd = (n) => {
    //Trường hợp số chẵn
    if (n % 2 == 0) {
        return true;
    }
   return false;
}
const resultIsOdd = isOdd(6);
console.log("🚀 ~ resultIsOdd:", resultIsOdd)




