function solution(n, arr) {
  let answer = 0;
  let maxSum = 0;

  for (let i = 0; i < n; i++) {
    const sumOfEachNum = String(arr[i])
      .split('')
      .reduce((acc, curr) => +acc + +curr);
    if (maxSum === sumOfEachNum) {
      answer = answer < arr[i] ? arr[i] : answer;
    } else if (maxSum < sumOfEachNum) {
      maxSum = sumOfEachNum;
      answer = arr[i];
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));
console.log(solution(3, [1111, 4, 31]));
