## 1. 재귀함수

(21.07.14)

- 재귀함수 기초
- 재귀함수에 엄~청 약한데 한 단계씩 해보자 👊
- 재귀함수는 결국 콜스택에 쭉 쌓여서 마지막부터 처음까지 하나씩 pop되며 실행된다는 것을 기억하기
- 종료 조건 (return) 잘 확인
- [stack frame](http://tcpschool.com/c/c_memory_stackframe)
  - 스택 영역에 차례대로 저장되는 함수의 호출 정보
  - 매개변수, 지역변수, 호출이 끝난 뒤 돌아갈 주소값

<br>

## 2. 재귀함수를 이용한 이진수 출력

(21.07.19)

- 재귀를 써서 풀이가 가능할 거라는 느낌은 왔음
- 리턴하면서 문자열로 어떻게 합치지 이런 생각이 들어서 못 풂..
- 빈 문자열을 만들고 거기에 붙여나가면 되는 것이었다.
- 꼭 값을 리턴하지 않아도 된다는 것. map, filter 이런 함수들처럼 꼭 리턴해야 된다고 생각을 했었음 😑

### 선생님 풀이

```js
function solution(n) {
  let answer = '';
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      answer += n % 2;
    }
  }
  DFS(n);
  return answer;
}
```

<br>

## 3. 이진트리순회 (DFS)

(21.07.20)

- DFS 뭘 모르겠으면 일단 `if ~ else` 문을 쓰라는 게 선생님의 팁! 이렇게라도 하세요!!!!!! 라고 하심
- `if` 에는 종료 조건 (return) 을 넣어주고, `else` 에는 재귀함수 호출
- 트리 구조에서는 두 갈래로 나가야 하니까 `else` 문에 두 번 호출을 해주면 되는 것이다.
- 내가 봐왔던 트리 구조는 class로 정의된 node 구조여서 어떻게 하라는 건지 몰랐다. 주어진 그림에서 규칙을 찾아보면 왼쪽 자식 노드는 `부모노드 값 * 2`, 오른쪽 자식 노드는 `부모노드 값 * 2 + 1` 이라는 점을 이용하여 출력하라는 것이었다.

### 선생님 풀이

```js
// 1부터 7까지
function solution(v) {
  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v); // console.log의 위치를 옮기면 preorder, inorder, postorder 구현 가능
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(v);
}

solution(1);
```

<br>

## 5. 합이 같은 부분집합

(21.07.23)

- 처음 문제를 봤을 때는 어떻게 DFS로 풀 수 있을까... 생각했음
- 생각하다보니 문득 타겟넘버랑 비슷하다는 느낌이 빡!!!
- 타겟넘버는 다음 원소를 더하거나 빼거나이지만 이 문제는 더하거나 더하지 않거나 이렇게 두 가지로 트리구조처럼 뻗어나감
- 접근은 맞았지만 코드로 어떻게 써야 하는지 또 감이 안 잡힘
- 타겟넘버 필기를 다시 보고 depth를 활용해야 한다는 걸 되새김

### 실수 기록

- 전반적으로 단계마다 어떤 값이 들어가야 할 지 헷갈려했던 게 문제
- dfs 함수를 맨 처음에 호출할 때 sum에 `arr[0]`을 넣음
- 재귀 첫번째 호출 (14라인) 때 `sum + arr[depth + 1]` 이라고 씀
- 사실 위와 같이 쓴 것은 잘못한 건 아님. 초기값을 0으로 보냐 첫번째 원소로 보냐의 차이니까
- 결정적인 실수는 if문 안에서 `return 'YES'` 라고 쓴 것
- 이렇게 쓰면 해당 함수 하나만 리턴되는 것이므로 전체 재귀 탐색이 끝나지도 않을 뿐더러 정답으로 YES가 리턴되지도 않는다.
- 정확한 방법은 answer에 초기값 `'NO'` 를 넣어두고 조건이 만족했을 때 `YES` 로 바꿔주는 것

### 알아둘 점

- `flag` 변수를 하나 만들어서 0으로 초기화, 1이 되면 조건이 만족됐다는 뜻으로 함수 리턴시키기.
  - 조건을 만족하면 더 이상 재귀를 더 돌릴 필요가 없으므로 탐색을 중단하기 위한 목적!
  - `flag` 변수를 두지 않아도 `if(answer === 'YES') return;`이렇게도 쓸 수 있을 듯

### 선생님 풀이

```js
function solution(arr) {
  let answer = 'NO';
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  function DFS(L, sum) {
    // L은 Level, 즉 depth라는 뜻
    if (flag) return;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
```

<br>

## 6. 바둑이 승차

(21.09.23)

- 재귀함수로 조합 구현하던 것처럼 바둑이를 포함한다, 포함하지 않는다 두 가지 경우로 각각 나눠서 결국 바둑이가 n마리이면 `2^n`가지 경우가 나온다.
- 답을 구하기 위해 depth와 weight를 초기화했다.
  - 다시 보니 초기화할 필요 없이 그냥 dfs 호출할 때 초기값으로 넘겨주면 되는데...
- `dfs` 함수는 depth를 한 단계씩 더하면서 실행되고, 최초에 두 갈래로 호출하여 하나는 바둑이 무게를 더하고 하나는 더하지 않는다.
- depth가 주어진 바둑이 배열 arr의 length와 같아지면 구한 무게를 weights 배열에 push하고 리턴한다.

### 선생님 풀이

- DFS 방식 자체는 내가 생각한 방법이랑 같음. depth와 sum을 더하고 안 더하고 하는 방식
- 핵심 포인트는! 내가 푼 건 필요 없는 경우까지 모두 구했다는 것이다. 조건을 하나 추가해서 바둑이 무게 합이 주어진 값보다 클 때 바로 리턴해주면 불필요한 재귀가 돌지 않는다.
  - 이런 방법을 컷에지라고 한다. 답이 나오지 않을 가지를 미리 예측해서 아예 뻗어나가지 않는 방법이다.
- 선생님은 depth가 아닌 sum 조건으로만 리턴을 시켰다. 이렇게만 할 경우 모든 바둑이의 무게를 더해도 문제에 주어진 값보다 작을 때 무한루프를 돌 거라고 생각했다. 돌려보니 답이 정상적으로 나왔다.
  - 그 이유는, `L === n` 인 경우에 더 이상 재귀(else 부분)를 돌지 않고 함수가 끝나서 차례로 콜스택에서 pop되기 때문이었다. if-else를 쓰면 이런 부분에서 안전하구나..
- 그 때마다 max값을 갱신해주면 내가 한 것처럼 괜히 스프레드 연산자를 써서 시간복잡도를 올리지 않고 간단하게 구할 수 있다.

```js
function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;

  function DFS(L, sum) {
    if (sum > c) return;

    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr(L));
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  return answer;
}
```

<br>

## 7. 최대점수 구하기

(21.09.28)

- 이 문제도 조합 구하던 것처럼 계속 두 갈래로 뻗어나가는 방식이다.
- 다만 조금 다른 점은, 조합처럼 리턴하면서 요소를 붙여나가는 게 아니라, depth가 +1 되면 점수를 더하고 그 때마다 최댓값을 업데이트 해주면 된다.
- 재귀함수를 구현하기 위해 `재귀 탈출 조건`, `인자로 필요한 값`, `리턴값` 을 생각해봤다. 재귀 탈출 조건을 먼저 생각해보면 인자로 넘겨야 하는 값이 무엇인지 감이 잡히는 것 같다.
  - `재귀 탈출 조건`
    - depth가 문제에 주어진 배열의 길이를 넘었을 때 더 이상 탐색할 원소가 없으므로 리턴
    - 또는 누적 시간 합이 문제에 주어진 제한 시간 m보다 클 때 더 이상 탐색할 필요가 없으므로 리턴
  - `인자로 필요한 값`
    - 아하 그러면 일단 depth는 +1 하면서 넘겨줘야겠다.
    - 시간도 계속 누적해야 하니 시간도 넘겨줘야겠다.
    - 답을 구하려면 점수의 합을 알아야 하니 점수도 넘겨줘야겠다.
  - `리턴값`
    - 리턴값은 없어도 되겠다. solution 함수에 변수 하나를 선언해놓고 계속 최댓값을 업데이트하면 되겠다.
    - 이유는 위에도 말했듯이 조합처럼 깊이 들어갔다가 리턴하면서 더해나가는 방식이 아니라, 그 깊이에서의 점수 합만 알면 되기 때문이다.
