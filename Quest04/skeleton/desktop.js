class Desktop {
    /* TODO: Desktop 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    /* this. : 클래스 내의 다른 생성자를 호출, 파라미터가 없는 생성자를 호출 */

    /* super : 부모 클래스의 생성자를 호출, 상속에서 부모 객체를 참조 가능, 파라미터를 적용 가능 */
    constructor() {
        this.Desktop = "Desktop";
    }

};

class Icon {
    /* TODO: Icon 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */
    // div.addEventListener('click', (event) => {
    //    result.innerHTML+= '<div>click</div>';
    // });

    // drag() {
    //     const icons_clicks = document.querySelectorAll("icons_click")
    // }

};

class Folder {
    /* TODO: Folder 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */


};

class Window {
    /* TODO: Window 클래스는 어떤 멤버함수와 멤버변수를 가져야 할까요? */

    dragFile() {
        const targets = document.querySelectorAll('#icons_click');

        for (let target of targets) { // 이미지가 찍혀도 div가 움직이도록.

            const offset = {x: 0, y: 0};
            const initialMousePos = {x: 0, y: 0};

            // mousemove

            const moveHandler = e => {
                // initialMousePos = 초기 좌표, client = 현재 좌표, offset = 이동한 좌표
                // 이동한 좌표 = 현재 좌표 - 초기 좌표
                offset.x = e.clientX - initialMousePos.x;
                offset.y = e.clientY - initialMousePos.y;
                target.style.transform = translate3d(${offset.x}px,${offset.y}px, 0);

            };

            // mousedown
            // addEventListener 에 콜백함수 명을 적어야 암묵적으로 이벤트 객체가 된다.
            // 함수에 매개변수를 준 것이 콜백함수
            target.addEventListener('mousedown', e => {
                // 초기좌표 = 이동 직전 좌표 - 이동한 좌표 > 이동 직전 좌표에서 이동한 좌표를 마이너스하여 새로운 초기 좌표 설정
                initialMousePos.x = e.clientX - offset.x;
                initialMousePos.y = e.clientY - offset.y;
                document.addEventListener('mousemove', moveHandler);
            });

            // mouseup
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', moveHandler)
            });

        }
    }


};


