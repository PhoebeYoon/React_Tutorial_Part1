###### :cactus: React_Tutorial_Part1


## What is React 
리액트는 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용됩니다. 페이스북과 개별 개발자 및 기업들 공동체에 의해 유지보수되고 있습니다. 리액트는 Single Page Apps (SPA)를 쉽게 만들 수 있으며 UI 컴포넌트를 구축하기 위한 도구입니다.  
최초 출시일은 2013년 5월 29일 이며, 웹플랫폼, 자바스크립트언어를 사용합니다.  


### 리액트 수업을 위해서는 
- html, css, DOM, es6, Node.js , npm 에 대한 사전지식이 요구됩니다.
- 실습을 위해서는 먼저 node.js를 설치해야 합니다. Node.js는 크롬 V8 자바스크립트 엔진으로 빌드한 자바스크립트 런타임입니다.
- 리액트수업을 위해 node.js를 먼저 설치해야 하는 이유는 아래와 같습니다. 
-- 우리가 html,css,javascript를 이용해서 웹페이지를 만들고 웹브라우저(크롬)에서 만든 페이지를 열면 자바스크립트가 그냥 실행됩니다 뭐 따로 설치해야 하는 것도 없이 말입니다. 이는 웹브라우저에는 자바스크립트의 해석하고 실행하는 엔진이 장착되어 있기때문입니다. 그런데 우리가 웹브라우저가 아닌 환경에서 자바스크립트로 만든 뭔가를 실행하려고 하면 문제가 발생하는 것입니다. 그때 Node.js가 필요한 것입니다. Node.js는 웹브라우저 환경이 아닌 곳에서도 자바스크립트를 사용할 수 있게 해줍니다


- 그럼 npm은 대체 무슨 역할을 할까요 
npm은 node.js패키지 매니저 도구입니다. npm은 세계에서 가장 큰 소프트웨어 저장소입니다. 오픈소스 개발자들은 소프트웨어를 공유하기 위해 npm를 사용합니다. npm웹사이트 ( https://www.npmjs.com/)에 가시면 수많은 패키지들이 있습니다. 개발에 필요한 것을 찾아 설치하면 끝~ 입니다. 참고로, npm 은 따로 설치할 필요없이 node.js가 설치될때 함께 설치됩니다. 

--------------

자바스크립트기반 프레임워크들이 여러개 있지만 공통적으로 모델(Model)과 뷰(View)가 있습니다.
모델은 어플리케이션에서 사용하는 데이터를 관리하는 영역이고
뷰는 사용자에게 보이는 부분입니다.



-컴포넌트는 사용자정의태그이다.  
-사용자화면에 뷰를 보여주는 것을 랜더링이라 하는데 리액트 라이브러리가 뷰를 랜더링하는 것을 이해하려면 초기 랜더링과 리렌더링의 개념을 알아야 한다. 어떤 것이든 맨처음 어떻게 보일지를 정하는 초기 렌더링이 필요합니다. 리액트에서는 이를 render함수가 합니다. 이 render함수는 뷰가 어떻게 생격고 어떻게 작동하는지에 대한 정보를 지닌 객체입니다. 
렌더링작업이 끝나면 가지고 있는 정보를 이용하여 html마크업을 만들고 이를 우리가 보는 실제 페이지의 DOM요소안에 주입합니다.

<img width="450" alt="스크린샷 2023-03-14 오후 7 38 51" src="https://user-images.githubusercontent.com/48478079/224975283-6f66ee13-7f5c-4665-bd49-52cc81051539.png">
만약 리액트 라이브러리에서 업데이트가 진행되면 어떻게 할까요 리액트는 뷰를 업데이트할때 실제 '업데이트'를 한다기 보다는 '새로운 내용'을 '이전 내용'에 갈아끼우는 것입니다. 그리고 이 작업도 render() 함수가 맡아서 합니다. 아래 이미지를 참조하세요

<img width="450" alt="스크린샷 2023-03-14 오후 7 54 11" src="https://user-images.githubusercontent.com/48478079/224981238-c58ba515-f69f-4f34-9a01-8ec0fcbce9e8.png">   
(오른쪽 이미지의 '새로운 DOM 트리'는 virtual DOM입니다 )
리액트와 Virtual DOM은 업데이트 처리 간결성을 제공합니다

### DOM (Document Object Model)은 웹페이지를 이루는 태그들을 자바스크립트가 이용할 수 있게끔 트리구조로 만들어진 객체 
### 가상DOM 


#### 도움이 되는 사이트 
https://reactnative.dev/docs/tutorial.html

