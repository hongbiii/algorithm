## 3. 멘토링

(2021.07.02)

- 어떻게 풀어야 할 지 고민하다가 문득 그래프로 풀어봐야겠다는 생각이 들었다.
- 연결관계를 표현하기 위해 2차원 배열을 사용했다.
- 연결되어 있으면 1이라고 표시해주고, 서로 (양방향) 연결되어 있으면 다시 2로 바꿨다.
- 그럼 한 방향으로 연결된 애들만 남는데 그 인덱스를 출력하면 끝~

<img src="https://user-images.githubusercontent.com/60209518/124311350-8ce8fc80-dba8-11eb-8793-bcb4995b0eff.png" width="60%">

(강의 보고 내용 추가)
강의에서 4중 for문으로 풀이해서 충격받았다. 커뮤니티 보니까 테스트케이스가 있길래 내 풀이에 넣어봤는데 바로 틀려버림 😑 다시 생각해봐야겠다.

<br>

## 4. 졸업선물

(2021.07.03)

- 모든 경우의 수를 다 구해야 할 것 같은 느낌은 왔는데 어떻게 풀어야 할 지 감이 안 왔다.
- 정렬이 안 되어 있다는 것까지는 캐치를 했음
- 결국 못 풀고 강의를 봤는데, 가격+배송비 합한 금액 기준으로 정렬을 하고 시작하는 게 포인트였다.
- 채점 프로그램이 없으니 답이 맞는지 아닌지 알 수가 없네..
- 풀면서 (늘 그래왔지만) 헷갈렸던 건 반복문을 탈출할 조건을 설정하는 것. 머리로 잘 생각이 안 되면 쓰면서 조건을 꼼꼼하게 체크해보자.
- 완전탐색 방법 중 Brute force 방법은 효율성이 떨어지지만 알고리즘적 사고를 익힐 수 있는 시작 단계라고 한다. 생각하기 귀찮다고 그냥 넘어가지 말고 꾸준히 하자!!

<br>

## 5. K번째 큰 수

(2021.07.04)

- 3장을 뽑는다는 게 조합을 활용한 것 같아서 조합 함수를 가져다가 썼다.
- 조합 함수는 인터넷 검색으로 가져다 쓴 건데, 완전히 이해하고 쓰려고 했지만 아직 혼자 구현해보라고 하면 못할 듯.. 알고 쓰자!!

**틀린 이유**

- 중복 제거를 안 했다. 합에 중복이 있을 수 있는 건데!
