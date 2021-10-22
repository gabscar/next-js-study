import classes from '../../styles/all-posts.module.css'
import PostGrid from './post-grid';

function AllPosts(porps){

    return(
        <section className = {classes.AllPosts}>
            <h1>All Posts</h1>
            <PostGrid posts = {porps.posts}/>
        </section>
    )
}



export default AllPosts;