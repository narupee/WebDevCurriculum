
const textarea = document.getElementById("myarea");

function makeNewFile() { // 새파일 만들기
    let name = prompt("원하는 파일 이름을 입력해주세요.");
    let tabnode = document.createElement('li'); // 돔요소만들기
    tabnode.setAttribute('class','tabnode'); // tabnode는 내가만든 돔요소 이기 때문에 class를 주기위해서는 이렇게 써야함
    let tabList = document.getElementById("tabList"); // 돔요소 부모 부름
    tabnode.textContent = name;
    tabList.appendChild(tabnode);  // 부모한테 자식 넣음
    textSave(name);

}

const newBtn = document.getElementById("text_file");
// console.log(newBtn);
newBtn.addEventListener('click', makeNewFile);
// newBtn 을 클릭해서(눌러서) makeNewFile(실행될 메소드) 새로운 파일을 만든다.


function Tabnode() { // 탭 요소 클릭 후 텍스트창 열기
    let textarea = document.getElementById("myarea");
    textarea.style.display='block';


}

const tabList = document.getElementById("tabList");
console.log(tabList);
tabList.addEventListener('click', Tabnode);


// 저장
function textSave(파일명) {
    // 파일명
    // 텍스트아리아값
    localStorage.setItem(파일명, textarea.value);
}

const saveBtn = document.getElementById("text_save");

tabList.addEventListener('click', saveTarget); // 콜백함수로 넣어줌

let saveT; // 전역변수(하는 방법)
function saveTarget(e) {
    if(e.target.id !== "tabList"){
        saveT = e.target.textContent; // textContent는 태그들 사이의 내용(글자)이다.
    }
}

saveBtn.addEventListener('click', e=> textSave(saveT));


// 열기










// 다른이름 저장



// let textname = prompt("원하는 이름을 저장해주세요."); // 다른이름 저장에 넣어야함
// tabList.textContent = textname;


