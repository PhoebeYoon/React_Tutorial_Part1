###### 🌵 React_Tutorial_Part1

## Link 사용하기 

바로 이전 수업의 내용을 잠시 살펴봐야 합니다.  
[Navbar.js] 파일에는 ```<a>``` 태그가 있습니다.  메뉴를 클릭해서 Home과 Create로 바꾸는데 이때 자세히보시면 페이지가 플레시됩니다. 서버에 페이지를 다시 불러오는 요청을 하는 것입니다. 
이걸 확인하는 방법 중 하나는 브라우저탭에 있는 react의 파비콘이 메뉴를 바꿀때마다 깜빡거립니다.  

그런데 우리는 SPA (Single Page Application) 를 만들고 있기 때문에 모든 것이 한개의 페이지에 있다는 의미이니까 서버에 요청하는 것이 아니라 메뉴를 클릭했을때 해당 내용을 삽입해주기만 하면 되는 것입니다.   
이걸 위해 Link를 사용하면 됩니다

[ Navbar.js ]
```javascript
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1>The Nobody's Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create</Link> <-- 기존 스타일을 넣어줍니다
      </div>
    </nav>
   );
}
export default Navbar;
```
변경한 후에 아까 브라우저탭의 아이콘이 깜빡거리는지 확인해 보시기 바랍니다.   
확인하는 다른 방법은 브라우저의 개발자도구탭 > Network 탭을 열어놓고 ```<a>``` 일 때와  ```Link```일때를 확인해 보시면 됩니다.  

아래 이미지의 빨간 테두리부분에 변화가 있는지 메뉴를 오가며 확인해 보십시요. 

<img width="338" alt="스크린샷 2023-03-18 오후 2 30 22" src="https://user-images.githubusercontent.com/48478079/226087216-8c3df23f-d887-4390-aee6-3cf99b530da6.png">

마지막으로 웹페이지를 실행시킨 뒤, Link로 연결된 부분이 ```<a>```태그로 바꿔있는 것을 확인하세요. 

