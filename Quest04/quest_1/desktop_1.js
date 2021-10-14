class Desktop {
    /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    constructor() {    // 생성자만드는것? 알아보기
        const desktop = document.querySelector(".desktop"); // 부모선택
        const desk = document.createElement('div');           // div 만듬
        desktop.appendChild(desk);  // 하나의 div 생성됨                // 부모에 자식 넣음

        const icons = prompt("icon_파일의 개수를 적어주세요");

        function icon(icons) {   // 펑션 메소드로 만들기
            for (let i = 0; i < icons; i++) {
                let file = document.createElement('i');
                file.setAttribute('class', 'fas fa-file file');
                desk.appendChild(file);
            };
        };

        icon(icons); // 아이콘 호출

        const folders = prompt("icon_폴더의 개수를 적어주세요");

        function folder(folders) {
            for (let i = 0; i < folders; i++) {
                let file = document.createElement('i');
                file.setAttribute('class', 'fas fa-folder folder');
                desk.appendChild(file);
            };
        };

        folder(folders); // 폴더 호출
    }

};

class Icon {
    /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

// 아이콘 무브무브

let dragValue;
// 변수를 드래그 값이라고 선언
// 이 값은 드래그 값을 가져옴 (함수를 생성 해야함)

function move(id) {    // 무브를 데스크탑 메소드로 넣고 , 무브의 매개변수를 돔요소로 받기(엘리먼트는 매개변수 )
    let element = document.getElementById("desktop");
    element.style.position = "absolute";
    // 절대적 위치 요소( 내가 원하는 곳 어디든 드래그 가능하므로
    // 요소 점 스타일 점 위치가 절대값과 같으므로
    element.onmousedown = function () {
        dragValue = element;
    }
    // 마우스가 아래로 내려갔을 때마다 요소점으로 이동
    // 함수 호출 이 file 값에서 값을 가져옴
    // 이 값에 이 변수를 할당하여 요소와 동일한 끌기 값이 있다?!
}
    document.onmouseup = function (e) {
        dragValue = null;
    }
    // 커서 이동하는 모든 위치로 유지하는법
    // 드래그를 아무 것도 지정안함 , 드래그 값 지금과 동일하게 지정

    document.onmousemove = function (e) {
        let x = e.pageX;
        let y = e.pageY;

        dragValue.style.left = x + "px";
        dragValue.style.top = y + "px";

    }
    // (함수생성)
    // 마우스가 다운될 때마다 이 요소를 가져와 위치를 지정한다.
    // 마우스 이동 시 문서 점을 원하는 곳으로 지정합니다. -> 'e' 함수는 "유지" 하며, "짝수"이
    // XY x 위치 페이지 e도트 페이지 x 및 let 옆에 e도트 페이지 y를 가져갈것
    // 이제 값을 지정하고 이 x, y에 따라 드래그할 수 있는 위치에 지정



class Folder {
    /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    // 폴더 무브무브


};

class Window {
    /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
};

