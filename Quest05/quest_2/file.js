class File {
    name; // 프로퍼티 (필드) , 파일명
    text;
    node;

    constructor () {         // 생성자 (프로퍼티)
        let name = prompt("파일 이름을 입력해주세요.");
        this.name = name;
        this.text = "";      // 첫 값은 비워둠! (초기화)
        this.node = this.createElement('li');
    }

    makeNode(name) {
        let li = document.createElement('li');
        li.textContent = name;
    }

}