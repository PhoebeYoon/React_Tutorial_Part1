###### 🌵 React_Tutorial_Part1




## React hook를 이용한 DELETE 요청  

이제, 
개별적으로 내용을 보여주는 BlogsDetails에 버튼을 추가하여 삭제할 수 있도록 만들겠습니다.  
내용을 삭제하면 이게 db.json에 반영되고 Home으로 돌아가게 하겠습니다.  
fetch함수에서 메서드는 'DELETE' 입니다.   
기억하실 것은 전에 db에 있는 id값으로 접근가능했던것을 기억하시죠. 그래서 아래와 같이 변경해주면 됩니다.  


[BlogDetails.js] 

``` js
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useNavigate();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'}).then(() => {
      history('/');
    }) 
  }
  return ( 
    <div className="blog-details">

      <h2>Blog-Details -{id} </h2>
      { isPending && <div>Loadig ... </div>} 
      { error && <div> ddderror</div>} 
      {blog  && ( 
      <article>  
        <h2>{blog.title}</h2> 
        <div>{blog.body}</div>
        <button onClick={handleClick}>Delete</button>
      </article>)}
    </div>
   );
}
export default BlogDetails;
```   




