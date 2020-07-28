import { Component } from "react";
import PostSidebarSocialMedia from "./PostSidebarSocialMedia";
import PostSidebarCategories from "./PostSidebarCategories";
import PostSidebarPosts from "./PostSidebarPosts";

class PostSidebar extends Component {
  render() {
    return (
      <>
        <PostSidebarSocialMedia />
        <PostSidebarCategories />
        <PostSidebarPosts />
      </>
    )
  }
}

export default PostSidebar;