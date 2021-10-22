import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/post-util';


function PostDetailPage(props) {
  
  return <PostContent post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  const { postName } = params;

  const postData = getPostData(postName);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const postsNames = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: postsNames.map((postName) => ({ params: { postName: postName } })),
    fallback: false,
  };
}

export default PostDetailPage;