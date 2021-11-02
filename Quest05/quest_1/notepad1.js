// class Notepad {
//     /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
//     constructor() {
//     }
// };

// 로컬 스토리지(문자열만 저장할 수 있음) 1.저장
const save = "저장을 했습니다."
// 저장
localStorage.setItem("save", save)
// 가져오고싶은 아이템
// alert : 창에 띄어서 보여주는 얘
const save1 = localStorage.getItem("save")
alert(save1);




const editor = document.getElementById('editor');
const btnNewfile = document.getElementById('btn-new file');
const btnOpenload = document.getElementById('btn-open load');
const btnSave = document.getElementById('btn-save');
const btnSaveas = document.getElementById('btn-save as');
const btnBold = document.getElementById('btn-bold');
const btnItalic = document.getElementById('btn-italic');
const btnUnderline = document.getElementById('btn-underline');
const btnStrike = document.getElementById('btn-strike');
const btnOrderedList = document.getElementById('btn-ordered-list');
const btnUnorderedList = document.getElementById('btn-unordered-list');

btnBold.addEventListener('click', function () {
    setStyle('new file');
});
btnBold.addEventListener('click', function () {
    setStyle('open load');
});
btnBold.addEventListener('click', function () {
    setStyle('save');
});
btnBold.addEventListener('click', function () {
    setStyle('save as');
});
btnBold.addEventListener('click', function () {
    setStyle('bold');
});
btnBold.addEventListener('click', function () {
    setStyle('italic');
});
btnBold.addEventListener('click', function () {
    setStyle('underline');
});
btnBold.addEventListener('click', function () {
    setStyle('strikeThrough');
});
btnBold.addEventListener('click', function () {
    setStyle('insertOrderedList');
});
btnBold.addEventListener('click', function () {
    setStyle('insertUnorderedList');
});

function setStyle(style) {
    document.execCommand(style);
    focusEditor();
}

// 버튼 클릭 시 에디터가 포커스를 잃기 때문에 다시 에디터에 포커스를 해줌
function focusEditor() {
    editor.focus({preventScroll: true});
}

// 이미지 부분
const btnImage = document.getElementById('btn-image');
const imageSelector = document.getElementById('img-selector');

btnImage.addEventListener('click', function () {
    imageSelector.click();
});

imageSelector.addEventListener('change', function (e) {
    const files = e.target.files;
    if (!!files) {
        insertImageDate(files[0]);
    }
});

function insertImageDate(file) {
    const reader = new FileReader();
    reader.addEventListener('load', function (e) {
        focusEditor();
        document.execCommand('insertImage', false, `${reader.result}`);
    });
    reader.readAsDataURL(file);
}

// 텍스트 상태에 따라 버튼에 스타일을 적용
editor.addEventListener('keydown', function () {
    checkStyle();
});

editor.addEventListener('mousedown', function () {
    checkStyle();
});

function setStyle(style) {
    document.execCommand(style);
    focusEditor();
    checkStyle();
}

function checkStyle() {
    if (isStyle('new file')) {
        btnNewfile.classList.add('active');
    } else {
        btnNewfile.classList.remove('active');
    }
    if (isStyle('open load')) {
        btnOpenload.classList.add('active');
    } else {
        btnOpenload.classList.remove('active');
    }
    if (isStyle('save')) {
        btnSave.classList.add('active');
    } else {
        btnSave.classList.remove('active');
    }
    if (isStyle('save as')) {
        btnSaveas.classList.add('active');
    } else {
        btnSaveas.classList.remove('active');
    }
    if (isStyle('bold')) {
        btnBold.classList.add('active');
    } else {
        btnBold.classList.remove('active');
    }
    if (isStyle('italic')) {
        btnItalic.classList.add('active');
    } else {
        btnItalic.classList.remove('active');
    }
    if (isStyle('underline')) {
        btnUnderline.classList.add('active');
    } else {
        btnUnderline.classList.remove('active');
    }
    if (isStyle('strikeThrough')) {
        btnStrike.classList.add('active');
    } else {
        btnStrike.classList.remove('active');
    }
    if (isStyle('insertOrderedList')) {
        btnOrderedList.classList.add('active');
    } else {
        btnOrderedList.classList.remove('active');
    }
    if (isStyle('insertUnorderedList')) {
        btnUnorderedList.classList.add('active');
    } else {
        btnUnorderedList.classList.remove('active');
    }
}

function isStyle(style) {
    return document.queryCommandState(style);
}
















