import Layout from '../../components/layout'
import PostTopInfo from '../../components/post/PostTopInfo'
import PostHashs from '../../components/post/PostHashs'
import PostShare from '../../components/post/PostShare'
import PostAuthor from '../../components/post/PostAuthor'
import PostRelateds from '../../components/post/PostRelateds'
import PostAnchorLinks from '../../components/post/PostAnchorLinks'

const info = {
  id: 1,
  title: 'Como criar valor em uma empresa',
  url: 'como-criar-valor-em-uma-empresa',
  imgMain: '/img/posts/1main.jpg',
  imgSecondary: '/img/posts/1secondary.jpg',
  categories: ['insights', 'empreendedorismo'],
  author: 'Zamur Vedovatto',
  date: '08 de agosto de 2020',
  hashtags: ['inspiracional', 'geração-de-valor'],
  related: [0, 2]
}

export default function PostExample() {
  return (
    <Layout>
      <section className="content_main clearfix jl_spost">
        <div className="container">
          <div className="row main_content">
            <div className="col-md-8 loop-large-post" id="content">
              <div className="widget_container content_page">
                <div className="post type-post status-publish format-standard has-post-thumbnail hentry category-crazy tag-food tag-inspiration">
                  <div className="single_section_content box blog_large_post_style">
                    <PostTopInfo info={info} />

                    {/* Conteudo aqui */}
                    <div className="post_content">
                      <p>
                      Quando se pensa em empreender, é preciso ter a resposta de três perguntas fundamentais para montar o seu modelo de negócios: O Quê, Por Quê e Como.
                      </p>
                      <p>
                      O Quê é a etapa principal. Traz a definição do negócio, o propósito da empresa. É de fato o que o empreendedor quer levar aos seus clientes e quem serão esses clientes. Já as perguntas Por Quê e Como, são a base para a criação do valor de uma empresa, ou seja, são a identidade da marca.
                      </p>
                      <p>
                      A resposta do "porquê fazemos o que fazemos" é a essência do negócio. É ter um posicionamento claro e firme do objetivo e é esse objetivo que vai definir a estratégia de crescimento e de valorização da marca. E o "como" essa estratégia se transformará em ação serão as leis que guiaram os colaboradores a atingirem o objetivo.
                      A proposta do valor aparece no plano de negócio, mas existem alguns pilares para que essa cultura seja fortalecia e os valores propostos se tornem consistentes.
                      </p>
                      <blockquote>
                        <p>Quando se pensa em empreender, é preciso ter a resposta de três perguntas fundamentais para montar o seu modelo de negócios: O Quê, Por Quê e Como.</p>
                      </blockquote>
                      <p>1) Envolvimento dos colaboradores</p>
                      <p>
                      Não é novidade que empregados motivados rendem muito mais. Mas não é apenas motivação, é transformar os funcionários em defensores da marca. Trata-se de engajar, desenvolver e reconhecer. É incentivar o colaborador a ter sentimento de dono, de trazer soluções e inovações alinhados aos Valores e propósitos da companhia. A Ambev, por exemplo, tem 10 princípios que norteiam os seus valores. Dos 10, 7 são diretamente relacionados aos seus colaborares e seus desempenhos.
                      </p>
                      <p>2) Inovação</p>
                      <p>
                        <img className="wp-image-4861 alignleft"  src={info.imgSecondary} alt="" width="338" height="423" />Inovação não precisa ser necessariamente um produto ou serviço novo, e sim a maneira como esse produto é oferecido ao cliente. Para isso, é necessário conhecer o consumidor, entender o mercado e com isso proporcionar uma nova experiência, objetivando conquistar e fidelizar o cliente. A Apple é um excelente exemplo. O IPod, Iphone e Ipad já eram produtos existentes no mercado, mas ainda não tinham atingido seu potencial máximo. Inovação, qualidade e excelência fazem parte dos valores da Apple.</p>
                      
                      <p>3) Responsabilidade Social</p>
                      <p>Significa que a empresa vai além do propósito de lucrar. Uma empresa que tem em seus valores Responsabilidade Social não se preocupa apenas com o seu desempenho e o de seus colaboradores. Ela também se preocupa com os seus clientes, fornecedores e meio ambiente. O mercado e os consumidores estão cada vez mais atentos ao consumo inteligente e a sustentabilidade. A responsabilidade social torna-se um fator decisivo não apenas para os clientes, mas também para os acionistas que irão investir na empresa.
                      </p>
                      <p>
                      Os valores criados para sua empresa vão definir o valor da sua marca no mercado. E se você ainda tem dúvida do peso da marca, Jeff Bezos, CEO da Amazon, empresa mais valiosa do mundo, simplifica essa explicação: "marca é o que as pessoas dizem sobre você quando você não está na sala".
                      </p>
                    </div>
                    {/* Fim - Conteudo aqui */}
                    <div className="clearfix"></div>
                    <div className="single_tag_share">
                      <PostHashs hashtags={info.hashtags} />
                      <PostShare related={info.related} />
                    </div>
                    <PostRelateds  />
                    <PostAuthor author={info.author} />
                    <PostAnchorLinks />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4" id="sidebar">
              <div style={{ display: "none" }} id="socialcountplus-2" className="widget widget_socialcountplus">
                <div className="social-count-plus">
                  <ul className="default">
                    <li className="count-facebook">
                      <a className="icon" href="https://www.facebook.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">likes</span></span>
                    </li>
                    <li className="count-instagram">
                      <a className="icon" href="https://instagram.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
                    </li>
                    <li className="count-pinterest">
                      <a className="icon" href="https://www.pinterest.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
                    </li>
                    <li className="count-twitch">
                      <a className="icon" href="http://www.twitch.tv//profile" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
                    </li>
                    <li className="count-twitter">
                      <a className="icon" href="https://twitter.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
                    </li>
                    <li className="count-vimeo">
                      <a className="icon" href="https://vimeo.com/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
                    </li>
                    <li className="count-youtube">
                      <a className="icon" href="post-layout-6.html" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">subscribers</span></span>
                    </li>
                    <li className="count-linkedin">
                      <a className="icon" href="https://www.linkedin.com/company/" rel="nofollow noopener noreferrer" target="_blank"></a><span className="items"><span className="count">20.5k</span><span className="label">followers</span></span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <span className="jl_none_space"></span>
              <div id="disto_category_image_widget_register-5" className="widget jellywp_cat_image">
                <div className="wrapper_category_image">
                  <div className="category_image_wrapper_main">
                    <div className="category_image_bg_image" style={{ backgroundImage: "url('/img/400x280.jpg')" }}><a className="category_image_link" id="category_color_2" href="post-layout-6.html#"><span className="jl_cm_overlay"><span className="jl_cm_name">Insights</span><span className="jl_cm_count">11</span></span></a>
                      <div className="category_image_bg_overlay" style={{ background: "#ed1c1c" }}></div>
                    </div>
                    <div className="category_image_bg_image" style={{ backgroundImage: "url('/img/400x280.jpg')" }}><a className="category_image_link" id="category_color_3" href="post-layout-6.html#"><span className="jl_cm_overlay"><span className="jl_cm_name">Business</span><span className="jl_cm_count">10</span></span></a>
                      <div className="category_image_bg_overlay" style={{ background: "#0015ff" }}></div>
                    </div>
                    <div className="category_image_bg_image" style={{ backgroundImage: "url('/img/400x280.jpeg')" }}><a className="category_image_link" id="category_color_4" href="post-layout-6.html#"><span className="jl_cm_overlay"><span className="jl_cm_name">Empreendedorismo</span><span className="jl_cm_count">5</span></span></a>
                      <div className="category_image_bg_overlay" style={{ background: "#d1783c" }}></div>
                    </div>
                  </div> <span className="jl_none_space"></span>
                </div>
              </div>
              
              <span className="jl_none_space"></span>
              <div id="disto_recent_post_widget-7" className="widget post_list_widget">
                <div className="widget_jl_wrapper"><span className="jl_none_space"></span>
                  <div className="widget-title">
                    <h2>Artigos Recentes</h2>
                  </div>
                  <div>
                    <ul className="feature-post-list recent-post-widget">
                      <li>
                        <a href="post-layout-6.html#" className="jl_small_format feature-image-link image_post featured-thumbnail" title="Sitting right here waiting for you come to me">
                          <img width="120" height="120" src="/img/120x120.jpg" className="attachment-disto_small_feature size-disto_small_feature wp-post-image" alt="" />
                          <div className="background_over_image"></div>
                        </a>
                        <div className="item-details">
      <span className="meta-category-small"><a className="post-category-color-text" style={{ background: "#d800f9" }} href="post-layout-6.html#">Techno</a></span> 
                          <h3 className="feature-post-title"><a href="post-layout-6.html#">
                      Sitting right here waiting for you come to me</a></h3>
                          <span className="post-meta meta-main-img auto_image_with_date">                             <span className="post-date"><i className="fa fa-clock-o"></i>Dec 24, 2016</span></span>
                        </div>
                      </li>
                      <li>
                        <a href="post-layout-6.html#" className="jl_small_format feature-image-link image_post featured-thumbnail" title="Before breakfast we have a great photo shoot">
                          <img width="120" height="120" src="/img/120x120.jpg" className="attachment-disto_small_feature size-disto_small_feature wp-post-image" alt="" />
                          <div className="background_over_image"></div>
                        </a>
                        <div className="item-details">
      <span className="meta-category-small"><a className="post-category-color-text" style={{ background: "#ed1c1c" }} href="post-layout-6.html#">Active</a></span> 
                          <h3 className="feature-post-title"><a href="post-layout-6.html#">
                      Before breakfast we have a great photo shoot</a></h3>
                          <span className="post-meta meta-main-img auto_image_with_date">                             <span className="post-date"><i className="fa fa-clock-o"></i>Dec 23, 2016</span></span>
                        </div>
                      </li>
                      <li>
                        <a href="post-layout-6.html#" className="jl_small_format feature-image-link image_post featured-thumbnail" title="Beautiful flying bikes with simple style but look good">
                          <img width="120" height="120" src="/img/120x120.jpg" className="attachment-disto_small_feature size-disto_small_feature wp-post-image" alt="" />
                          <div className="background_over_image"></div>
                        </a>
                        <div className="item-details">
      <span className="meta-category-small"><a className="post-category-color-text" style={{ background: "#ed1c1c" }} href="post-layout-6.html#">Active</a></span> 
                          <h3 className="feature-post-title"><a href="post-layout-6.html#">
                      Beautiful flying bikes with simple style but look good</a></h3>
                          <span className="post-meta meta-main-img auto_image_with_date">                             <span className="post-date"><i className="fa fa-clock-o"></i>Dec 23, 2016</span></span>
                        </div>
                      </li>
                    </ul>
                  </div>
      <span className="jl_none_space"></span>
                </div>
              </div><span className="jl_none_space"></span>
              <div style={{ display: "none" }} id="disto_recent_large_slider_widgets-5" className="widget jl_widget_slider">
                <div className="slider_widget_post jelly_loading_pro">
                  <div className="recent_post_large_widget"> <span className="image_grid_header_absolute" style={{ backgroundImage: "url('/img/780x520.jpg')" }}></span>
                    <a href="post-layout-6.html#" className="link_grid_header_absolute" title="Standing right here and singing until the mid"></a> <span className="meta-category-small"><a className="post-category-color-text" style={{ background: "#ed1c1c" }} href="post-layout-6.html#">Active</a></span> 
                    <div className="wrap_box_style_main image-post-title">
                      <h3 className="image-post-title"><a href="post-layout-6.html#">
                          Standing right here and singing until the mid</a></h3>
                      <span className="jl_post_meta"><span className="jl_author_img_w"><img src="/img/favicon-zamur.png" width="30" height="30" alt="Zamur Vedovatto" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" /><a href="post-layout-6.html#" title="Posts by Zamur Vedovatto" rel="author">Zamur Vedovatto</a></span><span className="post-date"><i className="fa fa-clock-o"></i>Dec 23, 2016</span></span>
                    </div>
                  </div>
                  <div className="recent_post_large_widget"> <span className="image_grid_header_absolute" style={{ backgroundImage: "url('/img/780x520.jpg')" }}></span>
                    <a href="post-layout-6.html#" className="link_grid_header_absolute" title="You can make your art with canyon color"></a> <span className="meta-category-small"><a className="post-category-color-text" style={{ background: "#6b34ba" }} href="post-layout-6.html#">Gaming</a></span> 
                    <div className="wrap_box_style_main image-post-title">
                      <h3 className="image-post-title"><a href="post-layout-6.html#">
                          You can make your art with canyon color</a></h3>
                      <span className="jl_post_meta"><span className="jl_author_img_w"><img src="/img/favicon-zamur.png" width="30" height="30" alt="Zamur Vedovatto" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" /><a href="post-layout-6.html#" title="Posts by Zamur Vedovatto" rel="author">Zamur Vedovatto</a></span><span className="post-date"><i className="fa fa-clock-o"></i>Dec 23, 2016</span></span>
                    </div>
                  </div>
                  <div className="recent_post_large_widget"> <span className="image_grid_header_absolute" style={{ backgroundImage: "url('/img/780x520.jpg')" }}></span>
                    <a href="post-layout-6.html#" className="link_grid_header_absolute" title="Makeup it really important things to do"></a> <span className="meta-category-small"><a className="post-category-color-text" style={{ background: "#6b34ba" }} href="post-layout-6.html#">Gaming</a></span> 
                    <div className="wrap_box_style_main image-post-title">
                      <h3 className="image-post-title"><a href="post-layout-6.html#">
                          Makeup it really important things to do</a></h3>
                      <span className="jl_post_meta"><span className="jl_author_img_w"><img src="/img/favicon-zamur.png" width="30" height="30" alt="Zamur Vedovatto" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" /><a href="post-layout-6.html#" title="Posts by Zamur Vedovatto" rel="author">Zamur Vedovatto</a></span><span className="post-date"><i className="fa fa-clock-o"></i>Dec 23, 2016</span></span>
                    </div>
                  </div>
                </div>
                <span className="jl_none_space"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}