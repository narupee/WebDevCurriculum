'use strict';

let star = '';

let a = prompt();

for(let i = 0; i < 5; i++) {             // 줄
    for(let j = 4; j > i; j--) {         // 공백 4칸 대입 (위에서 아래로 -> 4,3,2,1 공백)
        star += ' ';                     // 공백이 들어갈 반복문
    }
    for(let k = 0; k <= (i * 2 ); k++) { // 처음 별 한개를 대입 후 2의 배수 만큼 별 대입
        star += '*';
    }
    star += '\n';                        // 두번째 반복문 빠져 나오고 줄바꿈 대입
}
console.log(star);                       // 다섯번 반복됨 콘솔창 출력