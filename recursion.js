/*
  신선은 10이라는 참을성을 가지고 있습니다. 생각보다 참을성이 적어보인다고 생각할 수 있겠지만,
  바른 방식으로 신선에게 묻지 않는다면 평생 물어도 대답을 듣지 못하게 될 것입니다. 
  여러분은 recursion을 배우는 과정에서 recursion이 성립하기 위해 필요한 조건들을 하나씩 
  채워나가면서 신선이 되는 방법을 배우게 될 것입니다.
*/

var 신선에게물어보다 = function(질문) {
  return 질문;
}

console.log(신선에게물어보다('신선이 되려면 어떻게 합니까?'));

/*
0. 편의상 함수 안에 console.log(질문)을 넣어서 매번 함수가 어떻게 작동하는지 확인해보세요!
1. identify base case(s).
  base case란 recursion이 끝나는 조건을 뜻합니다. 
  신선의참을성이 0이 되면 '그만해! 이제 니가 신선해라!'를 반환해주시면 됩니다.
  아직 신선의 참을성은 10일 것이기 때문에 아무것도 return이 되지 않아 undefined가 반환될 것입니다.
2. identify recursive case(s).
  재귀는 언제 돌려야 할지 정해봅시다.
  여러분은 대답을 들을때까지 신선에게 묻어볼 오기가 생깁니다. 
  그래서 신선에게 같은 질문을 함수의 파라미터에 넣어 함수안에 함수를 넣어봅시다!
  그럼에도 신선은 꿈쩍도 않합니다. 참을성이 매번 10으로 그대로 유지 되기 때문이죠.
3. procedures for each case that brings you closer to the base case(s).
  base case에 가까워지기 위한 조건을 작성해주세요!
  매번 함수가 실행될때마다 신선의참을성이 -1되도록 해봅시다.
  그럼에도 undefined? 
4. return where appropriate.
*/