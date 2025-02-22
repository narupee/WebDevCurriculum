

## Checklist
* 객체지향 프로그래밍은 무엇일까요?
* `객체지향 프로그래밍 (Object-Oriented Programming, OOP)`
  * "객체"들의 모임으로 파악하고자 하는 것
  * 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 여러개의 독립된 단위
  * 각각의 객체는 메세지를 주고받고, 데이터를 처리할 수 있다.
  * 유연하고 변경이 용이하게 만들며 대규모 소프트웨어 개발에 많이 사용됨
  * 소프트웨어 개발과 보수를 간편하게 하며, 보다 직관적인 코드 분석을 가능하게 하는 장점을 가짐
  * 실세계의 객체처럼 모델링하고, 객체와의 상호작용을 토대로 프로그래밍하는 기법

<br>

* `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?
  * 캡슐화(Encapsulation)
  * 데이터와 그 데이터를 다루는 함수를 묶고, 외부의 개입과 오용을 막는 것
  * 정보 은닉을 실현: 구현을 숨기고 안정적인 인터페이스를 제공함으로써, 디자인 변경에 대비함 (decoupling)
    * 디커플링 (decoupling) : 인터페이스를 이용해 모듈 사이의 `의존성을 감소`하고 <br>
      `유지보수 효과를 높이`는 방법
    * 디커플링에 관한 출처 (한번 더 보기) : [(링크)](https://xianeml.tistory.com/34)
    

* <b>다형성이란 무엇인가요?</b>
  * 하나의 인터페이스로 여러 종류의 함수나 클래스를 제공하는 것
  * 오버라이딩(같은 이름의 메소드가 여러 클래스에서 다른 기능을 하는 것)
  * 오버로딩(같은 이름의 메소드가 인자의 개수나 자료형에 따라서 다른 기능을 하는 것)
  * 다형 개념을 통해 프로그램 안의 객체 간의 관계를 조직적으로 나타낼 수 있다.
  

* <b> 또 다른 방식의 다형성 의미 </b>
  
  * 코드 실행 시 어떤 개체에서 실행될지 신경쓸 필요 없도록(agnostic) 함
  * 애드 혹(Ad hoc) 다형성: 함수에 대한 다형성 (오버로딩)
  * 파라매트릭(Parametric) 다형성: 여러 타입을 다루는 함수와 클래스에 대한 다형성 (Generic)
  * 서브타입(Subtype) 다형성: 클래스에 대한 다형성 (메소드 오버라이딩)
  

* <b>다형성은 어떻게 코드 구조의 정리를 도와주나요?</b>
  * 다형성은 `컴파일 타임 (Compile time polymorphism)`과 `런 타임 (Runtime polymorphism)`으로 크게 나눌 수 있다.
  * `Compile time polymorphism`은 `Overloading`으로 구현
    * Overload : 과적하다, 너무 많이 주다
    * 하나의 메서드 이름에 여러 타입에 따른 구현을 다르게 ‘과적하는’ 것
    * `컴파일 타임에 수행`되며, `Overload`된 `메서드들 중 하나를 선택`하는 것
    * 메서드가 Overload 되어있다면, 그 메서드를 사용시 컴파일러가 <br>
      Overload된 메서드 중 어떤 메서드를 실행해야하는지 선택하는 것
  * `Runtime polymorphism`은 `Overriding`으로 구현
    * Override : ~보다 더 중요하다
    * 상위 클래스에서 정의한 메서드보다 하위 클래스의 메서드를 더 중요하게 여기겠다는 뜻
    * `하나의 베이스 클래스 타입 변수`를 이용해 `다양한 형태`를 보일 수 있는 것
    

  * 런타임 다형성(Runtime Polymorphism) 
    * 업캐스팅(Up-casting) : 자식 클래스의 객체가 부모 클래스 타입으로 형변환 되는 것
    * 다운캐스팅(Downcasting)
      * 업캐스팅과 반대로 캐스팅 하는 것을 다운캐스팅이라고 한다.
      * 업캐스팅된 것을 다시 원상태로 돌리는 것
      * 하위 클래스로의 다운캐스팅을 할때는 타입을 명시적으로 지정해줘야한다는 특징이 있다.
      

  * 캐스팅 (Casting) 이란?
    * 타입을 변환하는 것 == 형변환
    * 자바의 상속 관계에 있는 부모와 자식 클래스 간에는 서로 간의 형변환이 가능
    

  * 바인딩 (binfing) 이란?
    * 다형성을 이해하는데 핵심!
    * ‘bind’라는 말의 뜻은 ‘묶다.’라는 뜻
    * 변수와 데이터를 연결시켜주는 것
    
  
      binding 개념
      val a : Int = 3
      
      (풀이) 컴파일러는 a라는 변수가 Int 타입이라고 정해주어야하고, 그 값으로 3이 할당된다.<br>
      ‘a가 Int 타입이다.’ 라고 a라는 변수와 자료형이라는 데이터를 연결시켜주는 것과,<br>
      a라는 변수와 값 3이라는 데이터를 연결시켜주는 것이 바로 binding이다.

  * <b>바이딩의 종류</b>
    * `정적 바인딩(Static binding)`과 `동적 바인딩(Dynamic binding)`으로 나뉜다.
      * 정적 바인딩(Static binding)
        * = 얼리 바인딩 (Early binding)
        * = 컴파일 타임 바이딩 (Compile- time binding)
          
      * 동적 바인딩(Dynamic binding)
        * = 레이트 바인딩 (Late binding)
        * = 런타임 바인딩 (Runtime binding)
  


  * <b>상속이란 무엇인가요?</b>
    * 클래스들이 계층 구조를 갖고, 부모 디자인을 물려받는 것
      * 기존 코드를 재사용할 수 있음
      * 기존 코드와 독립적으로 확장할 수 있음
    * 새로운 클래스가 기존의 클래스의 자료와 연산을 이용할 수 있게 하는 기능
    * 상속을 받는 `새로운 클래스`를 `부클래스`, `파생 클래스`, `하위 클래스`, `자식 클래스`가 있다.
    * 새로운 클래스가 상속하는 `기존의 클래스`를 `기반 클래스`, `상위 클래스`, `부모 클래스`라고 한다.
    * 상속을 통해 기존의 클래스를 상속받은 하위 클래스를 이용해 <br>
     프로그램의 요구에 맞추어 `클래스를 수정`할 수 있고 <br>
    `클래스 간의 종속 관계를 형성함`으로써 `객체를 조직화`할 수 있다.
  

* <b>상속을 할 때의 장점과 단점은 무엇인가요?</b>
  * <b>장점</b>
    * 기존에 작성된 클래스를 재활용
    * 자식 클래스 설계시 중복되는 멤버를 미리 부모 클래스에 작성해 놓으면, <br>
      자식 클래스에서는 해당 멤버를 작성하지 않아도됨
    * 클래스 간의 `계층적 관계`를 구성, `다형성`의 문법적 토대를 마련함
  * <b>단점</b>
    * 상속으로 인해 결합도가 높아지면 두가지 문제점이 발생함
      1. 하나의 기능을 `추가`, `수정` 하기 위해 불필요하게 많은 수의 클래스를 추가, 수정해야 함
      2. 단일 상속만 지원하는 언어에서는 상속으로 인해 오히려 '중복 코드의 양'이 늘어날 수 있다.


* OOP의 합성(Composition)이란 무엇인가요? 
  * "컴퓨터 과학에서의 복합 자료형Composite datatype이란
    * 프로그래밍 언어의 원시 자료형 및 기타 복합 유형을 사용하여 <br>
      구성 할 수있는 모든 데이터 유형
    * `복합 유형을 구성하는 행위`는 `합성Composition` 이다.
    * 기본형들을 조립해 복합 객체를 만드는 모든 행위가 `객체 합성`이다.
    * 합성 형태에 따라 '복합체의 구조'와 '객체간의 관계'가 달라진다.
    * 어떤 객체가 다른 객체에 종속되면 한 객체가 변경되었을 때 다른 객체가 손상 될 수 있음
      * 상속은 객체 합성과는 전혀 관련 없음, 객체 합성의 문법과 의미간에 차이가 있음
  

* 합성이 상속에 비해 가지는 장점은 무엇일까요?
  * 합성을 통해 매우 간단히 구현 할 수 있음
  * 밀접하게 결합된 상속 구조를 벗어날 수 있음
  * 객체에 다른 객체를 주입해 사용 할 수 있음
  * 코드 가독성이 높아짐 (pipe : 함수형 언어, 함수 합성의 경우를 말함)
  

* 자바스크립트의 클래스는 어떻게 정의할까요?
  * '클래스' 란? -> `생성자 함수`
  * 함수가 특정기능을 하는 구문(알고리즘, 로직)을 묶을 때 사용하는 문법이라면
  * 클래스는 이렇게 만들어진 수많은 변수와 함수 중 연관 있는 변수와 함수만을 선별해 포장하는 기술
  * 즉, `연관있는 변수`와 `함수를 하나로 묶을 때` 사용하는 문법 이다.
    * 클래스로 포장하는 이유
      * 객체 단위로 코드를 그룹화
      * 코드를 재사용하기 위함


  * 프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?
    * 컴퓨터 프로그램을 명령어의 목록으로 보는 시각에서 벗어나 <br>
      여러 개의 독립된 단위
    * "객체"들의 모임으로 파악하고자 하는 것
    * 각각의 객체는 메시지를 주고받고, 데이터를 처리
    

  * 자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?
    * 클래스 는 런타임에 인스턴스화할 수 있는 유형 을 정의
      * ES6 클래스의 `자식은 새로운 속성과 메서드`로 <br>
        `부모를 확장`하는 또 다른 유형 정의
      * 차례로 런타임에 인스턴스화될 수 있다
      * 프로토타입의 자식은 자식에 구현되지 않은 모든 속성을 <br>
        부모에게 위임하는 또 다른 개체 인스턴스 이다.
        * 프로토타입의 자식은 프로토타입의 복사본 이 아님
        * 프로토타입과 모양 이 같은 객체도 아님
        * 자식은 프로토타입에 대한 살아있는 참조 를 가짐
        * 자식에 존재하지 않는 프로토타입 속성은 <br>
          프로토타입에 있는 같은 이름의 속성에 대한 단방향 참조이다.
    * 프로토타입 자체는 개체 인스턴스라는 것
   
