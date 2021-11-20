const tabList = document.querySelector('#tabList');
const textarea = document.getElementById("myarea");
const tabClick = document.querySelector('.tabnode');
let pTarget;
let li = document.querySelector('#tabList');

// 새파일
// 몸통
const text_file = document.querySelector('#text_file');
text_file.addEventListener('click', () => {
    let name = prompt("파일의 이름을 입력해주세요.");
    let tabnode = document.createElement('li'); // 요소 만들기: createElement
    tabnode.setAttribute('class', 'tabnode'); // 속성 부여: setAttribute
    tabList.appendChild(tabnode); // appendChild: 부모에게 자식을 넣어줌
    tabnode.textContent = name;
    textarea.style.display = 'block';

}); // 익명함수

// 저장
// 몸통
const text_save = document.querySelector('#text_save');
if (tabClick) {
    tabClick.addEventListener('click', (e) => {
        const textarea = document.querySelector('#myarea');
        pTarget = e.target;
        textarea.style.display = 'block';
    });
}

text_save.addEventListener('click', () => {
    // 클릭 후 저장 -> 저장만할것 -> 로컬스토리지(이름,내용)
    localStorage.setItem(li.textContent, textarea.value);
    console.log(localStorage);
});

// 새파일만든것도 여기에 저장이 같이 되게 넣기
// text_save.appendChild(text_file);
// console.log(text_save);
text_file.addEventListener('click', () => {
   let text
});

// 열기 (열기 탭클릭, 리스트 목록 띄우기(열리면서 리스트 목록이 닫혀야함-열기 이벤트 넣고 그다음 바로 꺼지는 이벤트 실행),  전파일 가져옴, 눈에 보여짐, 가운데에 띄어서 보이게하기)
// 몸통
const text_load = document.querySelector('#text_load');
text_load.addEventListener('click', () => {
    // 탭리스트 보여지기 (기존에 만들어놓음 - (리스트목록띄우기)로컬스토리에서 받아와야함(로컬스토리 기능을 넣기) )
    localStorage.getItem(text_save);
    const tabList = document.querySelector('#tabList');
    tabList.style.display = 'block';
    console.log(tabList);

    // createElement  를 이용해 요소 부여 하기 - 껐다켜도 바로 만들어지게 만들기 (끄면 사라짐 그러나 다시 키면 살아남)
    let text_load = document.createElement('id');
    // 탭리스트 닫기

    // 탭리스트 목록(구현)이 열어진다 -> 새창외

    // 탭리스트 가져오기
    // 탭리스트 목록이 닫혀진다 (닫기버튼)

});


// 다른이름 저장
// 몸통
const text_save_as = document.querySelector('#text_save_as');
text_save_as.addEventListener('click', () => {
    let name = prompt("파일의 다른이름을 입력해주세요.");
    let tabnode = document.createElement('li'); // 요소 만들기: createElement
    tabnode.setAttribute('class', 'tabnode'); // 속성 부여: setAttribute
    tabList.appendChild(tabnode);
    tabnode.textContent = name;

});

if (tabClick) {
    tabClick.addEventListener('click', (e) => {
        let tabClick = document.querySelector('.tabnode');
        pTarget = e.target;
        textarea.style.display = 'block';
        console.log(textarea);
    });
}

text_save.addEventListener('click', () => {
    // 클릭 후 저장 -> 저장만할것 -> 로컬스토리지(이름,내용)
    localStorage.setItem(li.textContent, textarea.value);
});




