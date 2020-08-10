import { useState, useEffect } from "react";
import PostSidebarSocialMedia from "./PostSidebarSocialMedia";
import PostSidebarCategories from "./PostSidebarCategories";
import PostSidebarPosts from "./PostSidebarPosts";

const PostSidebar = (props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setPosts(props.posts);
  }, [props.posts]);

  return (
    <>
      {/* <PostSidebarSocialMedia /> */}
      <PostSidebarCategories posts={posts} />
      <PostSidebarPosts posts={posts} />
    </>
  )
}

export default PostSidebar;