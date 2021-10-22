import FeaturedPosts from "../components/homePage/featured-posts";
import Hero from "../components/homePage/hero";
import { getFeaturedPosts } from "../lib/post-util";


function HomePage(props){
  
    return(
        <>
          <Hero/>
          <FeaturedPosts posts={props.posts}/>
        </>
    )
}




export function getStaticProps(){
      const featuredPosts = getFeaturedPosts();

      return {
        props:{
          posts:featuredPosts
        },
        
      }
}
export default HomePage;
