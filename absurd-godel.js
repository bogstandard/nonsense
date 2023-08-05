/** 
 * 
 * Generates the absurd numbers described here: https://github.com/bogstandard/nonsense/blob/main/Absurd-Gödel.md
 * This program could greatly be improved (ITS REALLY BAD) but it works
 * 
 * To run this program: node absurd-godel.js >| absurd-godel.html
 * Then open absurd-godel.html in your browser
 * 
 * The program needs to output in HTML because of all the required nesting of sup and sub.
 * 
 * */

const pSymbol = 'A';
const oneSymbol = '?';
const n = 100;

const nums = generatePrimes(n);

console.log('<pre>');

// fill out the non-primes
[...nums].forEach((num, i) => {
    num = num || null;
    if (num == null) {
        nums[i] = solve(i);
    }
});

// truncate their zeroes
nums.forEach((num, i) => {
    let str = '';
    let isZeros = false;
    let zeroCount = 0;

    num.split('').forEach((char) => {

        if (char == '0' && !isZeros) {
            isZeros = true;
            str += '<sub>';
        }

        if (char == '0' && isZeros) {
            zeroCount++;
        }

        if (char != '0' && isZeros) {
            str += solve(zeroCount) + '</sub>';
            isZeros = false;
        }

        if (char != '0') {
            zeroCount = 0;
            str += char;
        }

    });

    nums[i] = str;

});

// formalise
nums.forEach((num, i) => {
    nums[i] = {
        decimal: i,
        absurd: num
    };
});


nums.forEach((num) => {
    console.log(
        num.decimal, 
        '\t' + 
        num.absurd
        );
});


function solve(i) {

    if (i == 1) {
        return oneSymbol;
    }

    const asFactors = primeFactorisation(i);
    let str = '';
    Object.entries(asFactors).forEach(([key, value]) => {

        const k = nums[key];
        const v = nums[value];

        if (v == oneSymbol)
            str += k;
        else
            str += k + '<sup>' + v + '</sup>';
    });

    return str;
}


// thanks https://stackoverflow.com/a/40200710
function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

// modified
// thanks https://www.tutorialspoint.com/javascript-function-to-take-a-number-n-and-generate-an-array-with-first-n-prime-numbers
function generatePrimes(num) {
    const arr = [' ', oneSymbol];
    let i = 2;
    while (arr.length <= num) {
        if (isPrime(i)) {

            arr[i] =
                //truncateZs( 
                '0'.repeat(arr.filter(x => x).length - 2) + pSymbol
                //)
                ;

        } else arr[i] = null;

        i = i === 2 ? i + 1 : i + 2;
    };
    return arr;
}

// thanks https://stackoverflow.com/a/64602819
function primeFactorisation(num) {

    if (num == 1) {
        return {
            0: 0
        };
    }

    // initial
    let result = {};
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            result[i] = (result[i] || 0) + 1;
            num /= i;
        }
    }
  
    return result
}
