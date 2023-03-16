import { useState } from "react"; 
import BlogList from "./BlogList";

const Home = () => {
 const [blogs, setBlog] = useState([
  {title : 'my article 1', body :'1 lorem ipsum...', author:'Hong', id:1},
  {title : 'my article 2', body :'2 lorem ipsum...', author:'Kim' , id:2},
  {title : 'my article 3', body :'3 lorem ipsum...', author:'Lee' , id:3}
 ])
 return ( 
  <div className="home">
  
      <BlogList blogs={blogs} title="All Blogs!"/>
      <BlogList blogs={blogs.filter((blog)=> blog.author ==='Kim')} title="Kim's Blogs"/>
       {/* <BlogList blogs={blogs.blog.author ==='Lee'} title="Nobody's blogs"/> */}
  
  </div>
 );
}
export default Home;