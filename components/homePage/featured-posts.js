import PostsGrid from '../posts/post-grid';
import classes from '../../styles/featured-posts.module.css'
function FeaturedPosts(props){

    return(
        <section className={classes.latest}>
            <h2>Featured Posts</h2>
            <PostsGrid posts={props.posts} />
        </section>
    )
}

export default FeaturedPosts;