class Notepad {
    /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
    constructor() {
        const editor = document.querySelector(".editor");
        const edi = document.createElement('div');
        editor.appendChild(edi);

        const tete = document.getElementById("myarea");
    }

};

class text_menu {
    constructor(edi) {
        const text_menu = document.querySelector(".text_top");
        const text = document.createElement('div');
        text_menu.appendChild(text);

        // 새파일 열기
        function text_file() {
            const text_file = document.querySelector('.text_file');
            text_file.setAttribute('class','text_file');
            let win = window.open("","text_file");




        }


        // 열기
        function text_load() {
            const text_load = document.querySelector('.text_load');


        }

        // 저장
        const textsj = prompt("원하는 이름을 저장하세요.");
        function text_save() {
            const text_save = document.querySelector('.text_save');


        }
        text_save(textsj);

        // 다른이름 저장
        const texts = prompt("다른이름으로 저장하세요.");
        function text_save_as() {
            const text_save_as = document.querySelector('.text_save_as');


        }
        text_save_as(texts); // 폴더호출


    }

};