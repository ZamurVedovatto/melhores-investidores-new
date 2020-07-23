import Layout from '../components/Layout';

const PostLayout = (props) => {
  const { post } = props; 
  console.log(post);

  return (
    <Layout>
      <div className="jl_single_style8">
				<div className="single_captions_aboves_image_full_width_wrapper">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="jl_single_full_box"> <span className="image_grid_header_absolute" style={{ backgroundImage: "url('/img/1920x982.jpg')" }}></span>
									<span className="link_grid_header_absolute"></span>
									<div className="single_post_entry_content single_post_caption_full_width_format"> <span className="meta-category-small single_meta_category"><a className="post-category-color-text" style={{ background: "#d66300" }} href="post-layout-3.html#">Science</a></span> 
										<h1 className="single_post_title_main">
                                This is a great photo and nice for shooting                            </h1>
										<p className="post_subtitle_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p> <span className="single-post-meta-wrapper"><span className="post-author"><span><img src="img/favicon.jpg" width="50" height="50" alt="Zamur" className="avatar avatar-50 wp-user-avatar wp-user-avatar-50 alignnone photo" /><a href="post-layout-3.html#" title="Posts by Zamur" rel="author">Zamur</a></span></span><span className="post-date updated"><i className="fa fa-clock-o"></i>Dec 24, 2016</span><span className="meta-comment"><i className="fa fa-comment"></i><a href="post-layout-3.html#">0 Comment</a></span><a href="post-layout-3.html#" className="jm-post-like liked" data-post_id="2963" title="Unlike"><i className="fa fa-heart"></i>2</a><span className="view_options"><i className="fa fa-eye"></i>12.4k</span></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


    </Layout>
  )
}

PostLayout.getInitialProps = async (context) => {
  console.log(context.query);
  const id = context.query.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postData = await res.json();
  return {
    post: postData
  }
}

export default PostLayout;