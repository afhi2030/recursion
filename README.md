Recursion은 Function이 스스로를 내부에서 부르게 만듬으로써 문제를 해결하는 기술입니다. 이렇게하면 소량의 처리만 완료하고 나머지 문제를 재귀 호출에 위임 할 수 있습니다.

아래 함수를 보고 고민을 해볼까요?

```js
var eat = function(meal){
  console.log('meal before bite:', meal);
  console.log('now eating', meal.pop());
  if(meal.length){
    eat(meal);
  } else {
    console.log('done with the meal!');
  }
}

eat(['soup', 'potatoes', 'fish']);
```

위 함수의 결과는 다음과 같습니다.

```js
meal before bite: ["soup", "potatoes", "fish"]
now eating fish
meal before bite: ["soup", "potatoes"]
now eating potatoes
meal before bite: ["soup"]
now eating soup
done with the meal!
```

이제 여러분은 전체적으로는 큰 문제처럼 보이는 문제의 작은 부분에 대해 recursion을 사용하실 수 있습니다.

이번 스프린트에서는, JSON.stringify를 recursion을 사용하여 구현하게 될 것입니다.

* Tip: 많은 브라우저에서 이 기능을 가지고 있지 않아서 사람들은 다시 구현해야 할 때가 있습니다. 이와 같이 이전 브라우저에서 기능 지원을 하지 않거나 기능에 차이가 있어 새로운 브라우저에서 다시 구현해야 할 때, 이를 "polyfill"이라고 부릅니다.

주의: 이번 테스트는 Javascript 테스트 도구인 Mocha로 만들어 졌습니다.

## Bare minimum Requirements

src/stringifyJSON.js에서 stringifyJSON 함수를 직접 구현해보고 spec 테스트를 통과시키세요.

---

## Extra

src/getElementsByClassName에 있는 getElementsByClassName 함수를 직접 구현해보고 spec 테스트를 통과시키세요.
document.body, element.childNodes 그리고 element.classList를 사용하세요.

---

## Advanced Content

src/parseJson.js에 있는 "parseJson" 함수를 구현하고 테스트를 통과해보세요.
<div>
  - 참조할만한 블로그:
  <a target="_blank" href="https://medium.com/@Mordoc/a-recursive-descent-parser-for-json-a6d68ab938ac">https://medium.com/@Mordoc/a-recursive-descent-parser-for-json-a6d68ab938ac</a>
</div>
