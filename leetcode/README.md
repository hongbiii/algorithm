# Easy

## ๐ข 94. Binary Tree Inorder Traversal

| Try |   Date   | Time spent | Correctness | Performance |                             Code                              |
| :-: | :------: | :--------: | :---------: | :---------: | :-----------------------------------------------------------: |
|  1  | 21-07-20 |   ๋ชป ํ    |      -      |      -      | ๐ [๊ฒฐ๊ณผ](https://leetcode.com/submissions/detail/525359092/) |

### ํ์ด ๋ฐฉ๋ฒ

- DFS ์์ง ์ ๋ชจ๋ฅด๊ฒ ์ด์ ๋ชป ํ์๋ค.
- root.left๊ฐ ์์ผ๋ฉด.. ์ด๋ค ์ผ์ ํ๊ณ ? root.right๊ฐ ์์ผ๋ฉด.. ์ด๋ค ์ผ์ ํ๊ณ ? ์ด๋ฐ ์์ผ๋ก ์๊ฐํด ๋ด
- ๋ค๋ฅธ ์ฌ๋์ ๋ต์์ ๋ณด๋ ๊นํ์ ์ ์๋ ์ฒ๋ผ ํ
- ๋ด๊ฐ ์๊ฐํ ๊ฑฐ๋ ์ข ๋น์ทํ๊ฒ ํผ ํ์ด๋ ์์์ (๋ค๋ฅธ ํ์ด์ ์ฒจ๋ถ)

### ๋ค๋ฅธ ํ์ด

<details>
  <summary>root.left, root.right ๊ฐ ์๋์ง์ ๋ฐ๋ผ ํ์ดํ ๋ต</summary>
  <div markdown="1">

```js
var inorderTraversal = function (root) {
  var res = [];
  helper(root, res);
  return res;
};

var helper = function (root, res) {
  if (!root) return;
  if (root.left) helper(root.left, res);
  res.push(root.val);
  if (root.right) helper(root.right, res);
};
```

  </div>
</details>

<br>

## ๐ข 110. Balanced Binary Tree

| Try |   Date   | Time spent | Correctness | Performance |                             Code                              |
| :-: | :------: | :--------: | :---------: | :---------: | :-----------------------------------------------------------: |
|  1  | 21-09-24 |     -      |    100%     |      -      | ๐ [๊ฒฐ๊ณผ](https://leetcode.com/submissions/detail/560055293/) |

### 1st try

- height-balanced ๋ผ๋ ๊ฒ ๋ฌด์จ ๋ป์ธ์ง ๋ชฐ๋ผ์ ํด๋น ๊ฐ๋์ ๋ํด ๊ฐ๋จํ ํ์ตํ๋ค. [์ฐธ๊ณ ํ ๋ธ๋ก๊ทธ](https://javascript.plainenglish.io/leetcode-110-balanced-binary-tree-javascript-49ec9ddf9318)
- ์ฌ๊ท๋ก ์ญ์ญ ๋ค์ด๊ฐ์ leaf ๋ธ๋๋ถํฐ ํ์ธํด๋๊ฐ์ผ ํด์ DFS๋ก ํ์ด์ผ๊ฒ ๋ค๋ ์๊ฐ์ด ๋ค์๋ค.
- ๊ทธ๋ฌ๋ฉด ์ฌ๊ท ํจ์๋ฅผ ์ด๋ป๊ฒ ์งค๊น? `1. ์ฌ๊ท ํ์ถ ์กฐ๊ฑด` `2. return ๊ฐ` `3. ์ ๋ต ๋์ถ` ์ด๋ ๊ฒ ๋๋ ์ ์๊ฐํด๋ดค๋ค.
  1. ์ฌ๊ท ํ์ถ ์กฐ๊ฑด
     - ์ต์ด์ root ๋ธ๋๋ฅผ ์ธ์๋ก ๋ฃ์ด ํธ์ถํ  ๊ฑฐ๊ณ , ์ด์ง ํธ๋ฆฌ์ด๊ธฐ ๋๋ฌธ์ ์ฌ๊ท๋ก node.left, node.right๋ฅผ ๋ฃ์ด ํธ์ถํ  ๊ฒ์ด๋ค.
     - ์ฆ, ์ธ์๋ก ๋ค์ด์จ node ๊ฐ์ด null ์ผ ๊ฒฝ์ฐ ๋ฆฌํด์ ํด์ค๋ค.
     - ์ด ๋ height ๊ณ์ฐ์ ํด์ผ ํ๊ธฐ ๋๋ฌธ์ ๋ฆฌํด๊ฐ์ 1๋ก ํ๋ค.
     - ๐ ์ด ๋ถ๋ถ ๋๋ฌธ์ ์๋ leaf ๋ธ๋๋ผ๋ฉด height ๊ฐ์ด 1์ด ๋์ด์ผ ํ์ง๋ง ๋ด ํ์ด์์๋ 2๊ฐ ๋์๋ค.
  2. return ๊ฐ
     - ์ฌ๊ท ํจ์๊ฐ ๋ฆฌํด ๋๋ฉฐ ๋ถ๋ชจ ๋ธ๋๋ก ์ฌ๋ผ๊ฐ๋ฉด์ height ๊ฐ์ผ๋ก ๋น๊ตํ๋ฉฐ ํ๋จํด์ผ ํ๋ฏ๋ก ๋ฆฌํด๊ฐ์ height ๊ฐ์ด์ด์ผ ํ๋ค.
     - ํน์  ๋ธ๋์ height(`currHeight`)๋ ์ข, ์ฐ ๋ธ๋์ height ์ค ๋ ํฐ ๊ฐ์ `+1` ํ ๊ฐ์ด๋ค.
  3. ์ ๋ต ๋์ถ
     - ์ข, ์ฐ ๋ธ๋๋ฅผ ๋ฃ์ด ์ฌ๊ทํธ์ถํ ๋ฆฌํด๊ฐ์ ๋ณ์ `leftHeight`, `rightHeight`์ ๋ด์๋๋ค.
     - ๋ง์ฝ ๋ ๊ฐ ์ค ํ๋๋ผ๋ false์ด๋ฉด ๊ทธ ๋จ๊ณ์ dfs ํจ์๋ false๋ฅผ ๋ฆฌํดํ๋ค.
     - ๊ฐ์ด false๊ฐ ๋๋ ์กฐ๊ฑด์, `leftHeight`์ `rightHeight`์ ์ฐจ์ด๊ฐ 1 ์ด์์ธ ๊ฒฝ์ฐ์ด๋ค.
     - ์ธ์  ๊ฐ ํ ๋ฒ์ด๋ผ๋ false๊ฐ ๋์ค๊ฒ ๋๋ฉด ์ฌ๊ทํจ์๊ฐ ์ฝ์คํ์์ pop๋๋ฉด์ ๋ชจ๋ ๊ฐ๊ฐ์ ํจ์๊ฐ ๋ชจ๋ false๋ฅผ ๋ฆฌํดํ๊ฒ ๋๊ณ , ์ต์ข์ ์ผ๋ก๋ false๋ฅผ ๋ฆฌํดํ๋ค.
     - ๊ทธ๋ ์ง ์์ผ๋ฉด (=== height-balanced๋ผ๋ฉด) `currHeight`๋ฅผ ๋ฆฌํด๊ฐ์ผ๋ก ๊ฐ๋๋ค. ์ฆ ์์ฐ์๋ฅผ ๋ฆฌํด๊ฐ์ผ๋ก ๊ฐ๋๋ค.
     - ๋ฐ๋ผ์ dfs ํจ์์ ๋ฆฌํด๊ฐ์ `result` ๋ณ์์ ๋ด์๋๊ณ , ๊ทธ ๊ฐ์ด ์์ผ๋ฉด true, ์์ผ๋ฉด (false์ด๋ฉด) false๋ฅผ ๋ฐํํ๋๋ก ํ๋ค.

### ๋ค๋ฅธ ํ์ด

- `check` ๋ผ๋ ํ๋๊ทธ๋ฅผ ํ๋ ๋ง๋ค์ด์, ์ข์ฐ ๋ธ๋์ height ์ฐจ์ด๊ฐ 1 ์ด์์ด๋ฉด check๋ฅผ false๋ก ๋ฐ๊พผ๋ค.
- dfs ๋ด์์๋ `check`๊ฐ false์ผ ๊ฒฝ์ฐ ๋ฆฌํดํด์ฃผ๋๋ก ํ๋ค.
- ์ต์ข ๋ฆฌํด๊ฐ์ `check`์ธ๋ฐ, dfs๊ฐ ์ผ๋ง๋ ๋ง์ด ํธ์ถ๋์๋์ง์ ์๊ด ์์ด `check`๋ dfs ๋ฐ๊นฅ์ ์ ์๋์ด ์์ผ๋ฏ๋ก ์ค์ฝํ์ฒด์ธ์ผ๋ก ์ญ์ญ ๊ฐ์ ๋ค๋ค ๋๊ฐ์ `check` ๋ณ์๋ฅผ ํ์ธํ๋ค.

<details>
  <summary>ํ์ ํ์ด</summary>
  <div markdown="1">

```js
var isBalanced = function (root) {
  if (!root) return true;

  let check = true;
  function dfs(node) {
    if (!node) return 0; // ๋น์์ ๊ฒฝ์ฐ ๋ฆฌํด
    if (!check) return; // check๊ฐ false ์ผ๋ฆฌ๋ฆฌํด

    const leftNode = dfs(node.left);
    const rightNode = dfs(node.right);
    const diff = Math.abs(leftNode - rightNode);
    if (diff > 1) return (check = false); // ๊ท ํ ์ด์ง ํธ๋ฆฌ๊ฐ ์๋ ๊ฒฝ์ฐ check๋ฅผ false
    return Math.max(leftNode, rightNode) + 1; // ๋์ด ์ฒดํฌ
  }

  dfs(root);
  return check;
};
```

  </div>
</details>

<br>

## ๐ข 1047. Remove All Adjacent Duplicates In String

| Try |   Date   | Time spent | Correctness | Performance |                             Code                              |
| :-: | :------: | :--------: | :---------: | :---------: | :-----------------------------------------------------------: |
|  1  | 21-08-05 |     -      |    100%     |      -      | ๐ [๊ฒฐ๊ณผ](https://leetcode.com/submissions/detail/533779523/) |

<br>
<br>

# Medium

## ๐  841. Keys And Rooms

### 1st try

- ๋์ ํ ๋ชจ๋ฅด๊ฒ ์ด์ ํ์ ๋์์ ๋ฐ์์ ๊ณผ์ ์ ๋ฐ๋ผ๊ฐ ๋ด
- while๋ก ํ์ด๋ ๋๊ณ  ์ฌ๊ท๋ก ํ์ด๋ ๋จ. ๋ฌผ๋ก  BFS ํ์ด๋ ๊ฐ๋ฅ
- ๊ณ ๋ คํด์ผ ํ  ์ 
  - dfs๊ฐ ์ต์ข์ ์ผ๋ก ๋ฆฌํดํด์ฃผ๋ ๊ฒ์ด ๋ฌด์์ธ์ง
  - ์ด๋ค ๊ฒฝ์ฐ์ dfs๋ฅผ ๋น ์ ธ๋์ฌ ๊ฑด์ง (์ด ๋ฌธ์ ์ ๊ฒฝ์ฐ์๋ ์ด๋ฏธ ๋ฐฉ๋ฌธํ ๊ฒฝ์ฐ์ return)
  - ์ธ์๋ก ์ด๋ค ๊ฑธ ๋ฃ์ด์ค ๊ฑด์ง
- ์ด๋ ต๋ค.. DFS..

<br>

## ๐  1209. Remove All Adjacent Duplicates in String II

| Try |   Date   | Time spent | Correctness |     Performance     |                             Code                              |
| :-: | :------: | :--------: | :---------: | :-----------------: | :-----------------------------------------------------------: |
|  1  | 21-08-05 |     -      |   18 / 20   | Time Limit Exceeded | ๐ [๊ฒฐ๊ณผ](https://leetcode.com/submissions/detail/533798437/) |
|  2  | 21-08-06 |     -      |   20 / 20   |  faster than 7.73%  | ๐ [๊ฒฐ๊ณผ](https://leetcode.com/submissions/detail/534007180/) |
|  3  | 21-08-06 |     -      |   20 / 20   | faster than 85.87%  | ๐ [๊ฒฐ๊ณผ](https://leetcode.com/submissions/detail/534012407/) |

### 1st try

- k๊ฐ๊ฐ ์ฐ์๋์๋์ง ํ์ธ์ for๋ฌธ ์์ ๋ for๋ฌธ์ ๋ง๋ค์ด์ ํ๋ค. ์๊ฐ๋ณต์ก๋ `O(N*K)`
- ์ด๋ ๊ฒ ํ๋ ๊ฒ ์๋ ๊ฒ ๊ฐ์๋๋ฐ ๋ ์ข์ ๋ฐฉ๋ฒ์ด ์ ๋ ์ฌ๋ผ์.. ๐ญ
- ์ญ์๋ ์๊ฐ์ด๊ณผ๊ฐ ๋์๋ฒ๋ ธ๋ค.

### 2nd try

- `O(N)` ์ผ๋ก ํธ๋ ๋ฐฉ๋ฒ์ด ์๊ฐ๋์ง ์์์ [์ฝ์ํ](https://www.youtube.com/watch?v=EU7ISz76xjw&list=PLDV-cCQnUlIYQOb8_n-d-VPhl_X6cECjg&index=4) ์์์ ๋ดค๋ค.
- ๋๋ฆ ์์์ ๋์จ ๋ฐฉ์๋๋ก ์ ํ์๋ค๊ณ  ์๊ฐํ๋๋ฐ ํ์ 7.73%...... ๐ค
- ์คํ์ ํ๋ค ๋ ๋ง๋ค์ด์ ์ฐ์ ์ซ์์ ๊ฐ์๋ฅผ ์นด์ดํํ๋ ๋ฐฉ์์ด๋ค.
- k๊ฐ ์ฐ์๋ ์ซ์๊ฐ ๋์จ๋ค๋ฉด ๋ฐ๋ณต๋ฌธ ๋๋ฉฐ popํด์ฃผ๋ ๋์  slice ๋ฉ์๋๋ฅผ ์ด์ฉํด ์๋ผ๋๋๋ฐ ์ด๊ฒ ๋ฌธ์ ์ธ ๊ฒ ๊ฐ๋ค.

### 3rd try

- slice ๋ฉ์๋๋ฅผ ์์ ๊ณ  for๋ฌธ์ผ๋ก ์คํ์์ k-1๊ฐ์ ์์๋ฅผ popํ๋ ๋ฐฉ์์ผ๋ก ํ์๋๋ ํจ์ฌ ๋นจ๋ผ์ก๋ค.
- ECMA ์คํ์๋ ์๊ฐ๋ณต์ก๋์ ๋ํ ๋ด์ฉ์ ๋์์์ง ์์ง๋ง ๋์ถฉ ์ถ์ธกํด๋ดค์ ๋ ์์ ๋ณต์ฌํ์ฌ ๋ฐํํ๊ธฐ ๋๋ฌธ์ O(N)์ ์๊ฐ๋ณต์ก๋๋ฅผ ๊ฐ๋๋ค.
- ์ค๊ฐ์ ์ธ๋ฑ์ค๋ก ์๋ฅธ๋ค๊ณ  ํด๋.. ๊ทธ ๊ธธ์ด๋งํผ ์๋ก์ด ๋ฐฐ์ด์ ๋ง๋ค์ด๋ด๊ธฐ ๋๋ฌธ์ ์๋ฅด๋ ๊ธธ์ด๋ฅผ K๋ผ๊ณ  ํ๋ค๋ฉด O(K)์ผ ๊ฒ์ด๋ค.
- ์ฌ์ค์ for๋ฌธ์ด๋ ์๊ฐ๋ณต์ก๋๋ ๊ฐ์ ๋ณด์ด๋๋ฐ.. ๋ฌด์จ ์ฐจ์ด์ผ๊น?
- ๋ค์ด์ค ์ ๋ฐ์ดํฐ๊ฐ ์ด๋ป๊ฒ ๋ค์ด์ค๋์ ๋ฐ๋ผ, ๊ทธ๋ฆฌ๊ณ  ๋ณต์ฌ๋(slice) ์๋๋(for๋ฌธ) ์ฐจ์ด์ ๋ฐ๋ผ ์ฑ๋ฅ ์ฐจ์ด๊ฐ ๋๋ ๊ฒ ๊ฐ๋ค๊ณ  ํ๋ค.
- ๊ทธ๋ ๋ค๋ฉด ์๋ณธ ๋ฐฐ์ด์ ์ง์  ๋ณ๊ฒฝํ๋ splice ๋ฉ์๋๋ฅผ ์ด๋ค๋ฉด ์ด๋จ๊น??!
- ๊ฒฐ๊ณผ๋ for๋ฌธ๊ณผ ๋น์ทํ๋ค! ๋ฐํ์๋ ๋ฉ๋ชจ๋ฆฌ๋ ๋ชจ๋ ๋น์ท!
- ๊ฒฐ๋ก ! ์๋ณธ ๋ฐฐ์ด์ ๋ณต์ฌํด์ ๋ฐํํ๋ ๋ฉ์๋๋ ์๊ฐ๋ณต์ก๋๊ฐ ๋ ์ฆ๊ฐํ๋ค.

<br>
<br>

# Hard

## ๐ด 42. Trapping Rain Water

| Try |   Date   | Time spent | Correctness | Performance |                             Code                              |
| :-: | :------: | :--------: | :---------: | :---------: | :-----------------------------------------------------------: |
|  1  | 21-08-03 |     -      |    100%     |      -      | ๐ [๊ฒฐ๊ณผ](https://leetcode.com/submissions/detail/532145840/) |

### ํ์ด ๋ฐฉ๋ฒ

- ์ผํ ํฌํฌ์ธํฐ ์๊ณ ๋ฆฌ์ฆ์ด๋ผ๊ณ  ๋ค์ ๊ฒ ๊ฐ์์ ์๊ฐํด๋ดค๋๋ฐ ์ ๋ชจ๋ฅด๊ฒ ์ด์ [๊ตฌ๋์ ๊ธ](https://velog.io/@goody/LC-%EB%B9%97%EB%AC%BC-%EA%B0%80%EB%91%90%EA%B8%B0)์ ์ฐธ๊ณ ํจ
- ๊ฐ์ฅ ๋์ด๊ฐ ๋์ ๋ธ๋ญ์ ๋์ด ๊ฐ๊ณผ ์ธ๋ฑ์ค(a)๋ฅผ ๊ตฌํ๋ค.
- left ํฌ์ธํฐ๋ ์ ์ผ ์ผ์ชฝ๋ถํฐ, right ํฌ์ธํฐ๋ ์ ์ผ ์ค๋ฅธ์ชฝ๋ถํฐ (a)์ ๋๋ฌํ  ๋๊น์ง ++, -- ํด์ฃผ๋ฉฐ ๊ณ์ฐ
- ํฌ์ธํฐ๊ฐ ์ง๋๊ฐ๋ฉด์ ๊ฐ์ฅ ๋์ด๊ฐ ๋์ ๊ฐ์ ์ ์ฅํ๋ค. (b)
- ๊ฐ์ฅ ๋์ด๊ฐ ๋์ ๋ธ๋ญ์ด ์๋ค๋ ๊ฒ์ ์๊ณ  ์๊ธฐ ๋๋ฌธ์ (b)์ ํ์ฌ ํฌ์ธํฐ ์์น์ ๋์ด์ ์ฐจ์ด๋งํผ ๋น๋ฌผ์ด ๊ฐ๋ฌ์ง๋ค.
- (a)๋ฅผ ๊ธฐ์ค์ผ๋ก ์ผ์ชฝ while๋ฌธ, ์ค๋ฅธ์ชฝ while๋ฌธ ๋๋ฉด ๋~

<br>
