class Desktop {
    /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    constructor() {    // 생성자만드는것? 알아보기
        const desktop = document.querySelector(".desktop"); // 부모선택
        const desk = document.createElement('div');         // div 만듬
        desktop.appendChild(desk);  // 하나의 div 생성됨                // 부모에 자식 넣음

        const icons = prompt("icon_파일의 개수를 적어주세요");

        function icon(icons) {   // 펑션 메소드로 만들기
            for (let i = 0; i < icons; i++) {
                let file = document.createElement('i');
                file.setAttribute('class', 'far fa-file');
                desk.appendChild(file);
                move(file);
            }
        }

        icon(icons); // 아이콘 호출

        const folders = prompt("icon_폴더의 개수를 적어주세요");

        function folder(folders) {
            for (let i = 0; i < folders; i++) {
                let file = document.createElement('i');
                file.setAttribute('class', 'fas fa-folder');
                desk.appendChild(file);
                move(file);
                file.addEventListener('dblclick', modalOpen);     // 버튼 클릭리스너 달기(모달창 킴)

            }
        }

        folder(folders); // 폴더 호출
    }

}

class Icon {
    /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
}

// 아이콘 무브무브

function move(id) {
    let dragValue;
    id.style.position = "absolute";
    id.addEventListener('mousedown',function (){
        dragValue = id;
        document.addEventListener('mousemove', mouseMove);
    });

    document.addEventListener('mouseup', e=> {
        document.removeEventListener('mousemove',mouseMove);
    });

    function mouseMove(e){
        let x = e.pageX;
        let y = e.pageY;
        if(dragValue){
            dragValue.style.left = `${x}px`;
            dragValue.style.top = `${y}px`;
        }
    }

}

// 버튼 클릭리스너 달기(모달창 끔)
document.querySelector('.fa-times-circle').addEventListener('click', modalClose);

// 모달 열기
function modalOpen() {
    document.querySelector('.modal_wrap').style.display = 'block';
    move(modalmove);
}
// 모달 끄기
function modalClose() {
    document.querySelector('.modal_wrap').style.display = 'none';
}

// 모달 무브무브
function move(modalmove) {
    let dragValue;
    modalmove.style.position = "absolute";
    modalmove.addEventListener('mousedown',function (){
        dragValue = modalmove;
        document.addEventListener('mousemove', mouseMove);
    });

    document.addEventListener('mouseup', e=> {
        document.removeEventListener('mousemove',mouseMove);
    });

    function mouseMove(e){
        let x = e.pageX;
        let y = e.pageY;
        if(dragValue){
            dragValue.style.left = `${x}px`;
            dragValue.style.top = `${y}px`;
        }
    }

}



