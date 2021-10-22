
import fs from 'fs'
import path from 'path'

import matter from 'gray-matter';
const postDirectory = path.join(process.cwd(),'posts')

export function getPostsFiles() {
    return fs.readdirSync(postDirectory);
}
export function getPostData(postIdentifier){
    const postSlug = postIdentifier.replace(/\.md$/,'')
    const filePath = path.join(postDirectory,`${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath,'utf-8');
    const { data, content }=matter(fileContent);

   
    const postData ={
        slug: postSlug,
        ...data,
        content: content,
    }
    return postData;
}
export function getAllPosts(){
    const postFiles = getPostsFiles();

    let allPosts = [];
    for(let postFile of postFiles){
        allPosts.push(getPostData(postFile));
    }

    return allPosts.sort((x,y)=>x.data>y.date?-1:1);

}

export function getFeaturedPosts(){
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post=>post.isFeatured)

    return featuredPosts;
}