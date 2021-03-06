## 1. 올바른 괄호

(21.08.01)

- 쉬운 스택 문제
- 그런데 닫는 괄호가 더 많은 경우를 미처 생각 못 했음. 푸하하..

<br>

## 2. 괄호문자제거

(21.08.01)

- 이것도 쉬운 스택 문제
- `(`, `문자`일 때는 스택에 모두 넣고 `)`일 때는 열린 괄호가 나올 때까지 pop하는 방법도 있다.

<br>

## 3. 크레인 인형뽑기

(21.08.03)

- 개발 공부를 시작한 지 얼마 안 됐을 때 접했던 문제였다. 그 때 당시 며칠동안 붙잡고 겨우겨우 풀었던 기억 때문에 크레인 인형뽑기 게임은 나에게 엄청 어려운 문제라는 인식이 있었다.
- 코드스쿼드 과정 중에 (CS 과정 때였나?) 다시 풀어봤었는데 그 때도 어려웠다.
- 그런데 오늘은!! 30분만에 뚝딱 풀어냈다.
- 사실 한 번에 통과하진 못했다. 대체 로직이 틀린 부분이 없는데 어디가 잘못된 건지 한 30분동안 계속 들여다보고 있었다.
- 알고보니 로직에는 써놓고 코드에서 빼먹은 부분이 있었다.. 후우.. 머리로만 생각하지 말고 글 써놓은 거랑 비교하면서 디버깅을 해야겠다.
  - moves의 원소 하나씩 본다.
  - `board[i][move - 1]`을 i 증가시키며 보는데,
  - 0이 아닌 값이 나오면,
  - stack의 마지막 원소를 확인, 값이 같으면 stack에서 pop한 후 count += 2, board의 해당 값 0으로 바꾸기
  - 값이 다르면 stack에 push한 후 board의 해당 값 0으로 바꾸기

<br>

## 4. 후위식 연산

(21.08.04)

- 후위식 연산이라는 걸 처음 알게 돼서 어떻게 풀어야 할지 살짝 고민하다가 이 챕터가 스택, 큐니까.. 스택으로 푸는 방법이 문득 떠올랐다. 그리고 맞았다.
- 연산자를 배열에 넣어두고 `includes` 메서드를 이용했고, 연산자가 string이기 때문에 함수를 하나 만들어서 switch문으로 분기해서 연산 결과를 리턴해주도록 했다.

### 선생님 풀이

- 선생님은 연산자인지 판단할 때 `isNaN` 을 사용했다.
- 그런데 찾아보니, `전역 isNaN` 의 경우는 `'+'` 와 같은 것들이 true가 나오는데, ES6에서 추가된 `Number.isNaN` 은 더 엄격해서 진짜 `NaN` 일 때만 true가 나온다고 한다.
- 따라서 개인적인 의견으로는 `isNaN` 을 사용하는 게 별로 직관적인 방법은 아닌 것 같다.

```js
function solution(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = '352+*9-';
console.log(solution(str));
```

<br>

## 5. 쇠막대기

(21.08.05)

- 열린 괄호 개수 === 겹쳐진 막대기의 개수, `)` 바로 직전에 `(` 가 나오면 레이저 라는 것 까지는 알았는데 레이저와 레이저 사이에서 끝나버린 막대기를 어떻게 처리해야 할 지 모르겠어서 헤맴
- `)` 가 레이저의 닫힌 괄호인지, 막대기가 끝났다는 닫힌 괄호인지 판단해야 한다. (직전의 원소 확인)
- 막대기의 끝이라면 쪼개진 막대기니까 총 개수에 +1 해주면 되는 간단한 문제였음

### 선생님 풀이

- 나는 pop을 밑에 주석 부분에 하고 stack.length - 1 을 더해줬는데 pop을 위에서 하면 되는 것이었다.

```js
function solution(s) {
  let answer = 0;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') stack.push('(');
    else {
      stack.pop();
      if (s[i - 1] === '(') answer += stack.length;
      else answer++;
      //stack.pop(); 이 위치에 하면 레이저까지 카운팅한다.
    }
  }
  return answer;
}

let a = '()(((()())(())()))(())';
console.log(solution(a));
```

<br>

## 6. 공주 구하기

(21.08.07)

- 어떻게 풀어야 할 지 감이 안 왔다. 처음에는 인덱스로 filter 할까 했지만, 탈락한 사람의 다음 사람부터 다시 시작되기 때문에 인덱스로는 거를 수가 없었다.
- 섹션의 주제가 스택, 큐인데 뭔가 스택은 아닌 것 같아서 큐로 생각해보려 했지만 잘 생각이 안 났다.
- 문득 맨 앞에 사람을 뽑아서(shift) 맨 뒤에 넣으면 되겠다(push)는 생각이 듦.

### 선생님 풀이

- 선생님 풀이도 같은 방법이었는데 살짝 나랑 코드가 달랐다. 초기 배열 만들기나 while문에서 차이가 있었음

```js
function solution(n, k) {
  let answer;
  let queue = Array.from({ length: n }, (v, i) => i + 1);
  while (queue.length) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }
  return answer;
}

console.log(solution(8, 3));
```

<br>

## 7. 교육과정설계

(21.08.08)

- includes를 이용하여 풀이도 가능하겠지만 queue(shift)만을 사용하여 풀어보았다.
- shift는 시간복잡도 면에서 좋지 않을 텐데.. 코테에서 써도 되는 건지 잘 모르겠다.
- QnA를 봤는데, 선생님 답변은 문제의 난이도마다 다르겠지만 shift만 써도 통과가 되도록 문제를 낼 것이고, 만약 shift 썼는데 시간 초과가 난다면 queue를 직접 구현하여 사용해야 할 것 같다고 하심

### 선생님 풀이

```js
function solution(need, plan) {
  let answer = 'YES';
  let queue = need.split('');
  for (let x of plan) {
    if (queue.includes(x)) {
      if (x !== queue.shift()) return 'NO';
    }
  }
  if (queue.length > 0) return 'NO';
  return answer;
}

let a = 'CBA';
let b = 'CBDAGE';
console.log(solution(a, b));
```
