###### 🌵 React_Tutorial_Part1

## Rounter 사용하기   
lesson04에서  잠시 소개되었던 도식화된 이미지를 기억해봅시다. Rounter 라는 것을 이용해서 만들어 보겠습니다 
React Router는 클라이언측 라우팅을 가능하게 합니다. 이게 뭐냐면,  
전통적인 방식은 브라우저가 웹서버로 문서를 요청하고 다운로드후 css, javascript등의 요소들을 평가한후에 랜더링하여 화면에 보여줍니다. 
클라이언트측 라우팅은 앱이 문서의 다른 내용들을 뺀 사용자가 클릭한 그 url를 업데이트할 수 있습니다. 그래서 즉시로 요청한 url과 연관된 새로운 UI과 새로운 데이터를 fetch하여 정보를 갱신합니다.


먼저 rounter 기능을 사용하려면 해당 기능을 설치해야 합니다.   특정버전을 원한다면 dom글자위에  @특정버전를 추가합니다.   
```> npm install react-router-dom``` 이렇게 하면 됩니다   
설치후에 package.json파일을 열어보면  
"dependencies" 항목에 "react-router-dom": "숫자"가 있을 것입니다.   

### App.js의 내용에 등록하기
react-router-dom 설치가 되었다면 사용하기 위해 App.js에 이것을 사용하겠다고 등록(불러옴)해야 합니다. 

```import { BrowserRouter, Routes, Route} from 'react-router-dom';  ```   
추가합니다. 
주의할 것은 react-router-dom이 버전 6로 업그레이드되면서, Switch를 더이상 지원하지 않는다는 것이다.    

[ App.js ]

```javascript
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
            <Routes>
              <Route path="/" element={<Home /> } ></Route>

            </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
```    
위에서 언급했듯이 react-router-dom@5 로 버전6이하의 버전을 설치했다면 위의 코드와는 달라질 것이다.    
