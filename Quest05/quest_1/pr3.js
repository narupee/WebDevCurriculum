const tabList = document.querySelector('#tabList');
const textarea = document.getElementById("myarea");
let pTarget;

// 새파일
// 몸통
const text_file = document.querySelector('#text_file');
text_file.addEventListener('click', () => {
    let name = prompt("파일의 이름을 입력해주세요.");
    let tabnode = document.createElement('li'); // 요소 만들기: createElement
    tabnode.setAttribute('class', 'tabnode'); // 속성 부여: setAttribute
    tabList.appendChild(tabnode);
    tabnode.textContent = name;

}); // 익명함수

// 저장
// 몸통
const text_save = document.querySelector('#text_save');
const tabclick = document.querySelector('.tabnode');
if (tabclick) {
    tabclick.addEventListener('click', (e) => {
        pTarget = e.target;
        textarea.style.display = 'block';
        console.log(textarea);
    });
}

text_save.addEventListener('click', () => {
    // 클릭 후 저장 -> 저장만할것 -> 로컬스토리지(이름,내용)
    localStorage.setItem(pTarget.textContent, textarea.value);
});

// 열기
// 몸통
const text_load = document.querySelector('#text_load');
text_load.addEventListener('click', () => {


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

if (tabclick) {
    tabclick.addEventListener('click', (e) => {
        let tabclick = document.querySelector('.tabnode');
        pTarget = e.target;
        textarea.style.display = 'block';
        console.log(textarea);
    });
}

text_save.addEventListener('click', () => {
    // 클릭 후 저장 -> 저장만할것 -> 로컬스토리지(이름,내용)
    localStorage.setItem(pTarget.textContent, textarea.value);
});




// const tabList = document.querySelector('#tabList');
// const textarea = document.getElementById("myarea");
// const tabclick = document.querySelector('.tabnode');
//
// let pTarget;
//
// // 새파일
// // 몸통
// const text_file = document.querySelector('#text_file');
// text_file.addEventListener('click', () => {
//     let name = prompt("파일의 이름을 입력해주세요.");
//     let tabnode = document.createElement('li'); // 요소 만들기: createElement
//     tabnode.setAttribute('class', 'tabnode'); // 속성 부여: setAttribute
//     tabList.appendChild(tabnode);
//     tabnode.textContent = name;
//
// }); // 익명함수
//
// // 저장
// // 몸통
// const text_save = document.querySelector('#text_save');
// if (tabclick) {
//     tabclick.addEventListener('click', (e) => {
//         let tabclick = document.querySelector('.tabnode');
//         pTarget = e.target;
//         textarea.style.display = 'block';
//         console.log(textarea);
//     });
// }
//
// text_save.addEventListener('click', () => {
//     // 클릭 후 저장 -> 저장만할것 -> 로컬스토리지(이름,내용)
//     localStorage.setItem(pTarget.textContent, textarea.value);
// });
//
// // 열기
// // 몸통
// const text_load = document.querySelector('#text_load');
// text_load.addEventListener('click', () => {
//
//
// });
//
//
// // 다른이름 저장
// // 몸통
// const text_save_as = document.querySelector('#text_save_as');
// if (tabclick) {
//     text_save_as.addEventListener('click', (e) => {
//         let tabclick = document.querySelector('.tabnode');
//         let name = prompt("파일의 다른이름을 입력해주세요.");
//         let tabnode = document.createElement('li'); // 요소 만들기: createElement
//         tabnode.setAttribute('class', 'tabnode'); // 속성 부여: setAttribute
//         tabList.appendChild(tabnode);
//         tabnode.textContent = name;
//
//         pTarget = e.target;
//         textarea.style.display = 'block';
//         console.log(textarea);
//
//     });
// }
//
// text_save.addEventListener('click', () => {
//     // 클릭 후 저장 -> 저장만할것 -> 로컬스토리지(이름,내용)
//     localStorage.setItem(pTarget.textContent, textarea.value);
// });








