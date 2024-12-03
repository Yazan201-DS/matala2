console.log(2 + " " + 3);
const x = 237;

for (let i = 4; i < x; i++) {
    let isPrime = true;
    for (let k = 2; k <= Math.sqrt(i); k++) { 
        if (i % k === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(i); 
    }
}

