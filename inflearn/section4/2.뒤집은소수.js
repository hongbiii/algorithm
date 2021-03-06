const isPrime = (num) => {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num > 2 && num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(arr) {
  const reversed = arr.map((num) =>
    Number(('' + num).split('').reverse().join(''))
  );
  console.log(reversed);
  const answer = reversed.filter((v) => isPrime(v));
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr)); // 23 2 73 2 3
