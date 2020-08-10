import { Component, useState, useEffect } from "react";
import Link from "next/Link";

const HeroSection = (props) => {
  const [ articles, setArticles ] = useState([]);

  useEffect(() => {
    let articles = props.posts.reverse().slice(0,2);
    setArticles(articles);
  }, [props.posts])

  return (
    <div className="row jl_front_b_cont">
      <div className="col-md-12 jl_mid_main_3col">
        <div className="jl_3col_wrapin">
          <div id="pl-3476" className="panel-layout">
            <div id="pg-3476-0" className="panel-grid panel-no-style">
              <div id="pgc-3476-0-0" className="panel-grid-cell"><span className="jl_none_space"></span>
                <div id="panel-3476-0-0-0" className="so-panel widget widget_disto_recent_grid5_widgets jl_widget_recent_grid5 panel-first-child panel-last-child" data-index="0">
                  <div className="jl_grid5_builder jelly_homepage_builder">
                    <div className="jl_grid5_wrapper">
                      <div className="jl_grid5_container">


                        {/* Card Biografia */}
                        <div className="jl_grid5_item jl_grid5main jl_grid1">
                          <div className="jl_grid5_itemin">
                            <span className="image_grid_header_absolute" style={{ backgroundImage: "url('/img/posts/2c.jpg" }}></span>
                            <Link href="/artigos">
                              <a className="link_grid_header_absolute" title="Biografias dos melhores investidores de todos os tempos"></a>
                            </Link>
                            <div className="wrap_box_style_main image-post-title">
                              <h3 className="image-post-title">
                                <Link href="/artigos">
                                  <a>Biografias dos melhores investidores de todos os tempos</a>
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>  

                        {/* Card Dicionario */}
                        <div className="jl_grid5_item jl_grid5small jl_grid2">
                          <div className="jl_grid5_itemin">
                            <span className="image_grid_header_absolute" style={{ backgroundImage: "url('/img/dictionary.png')" }}></span>
                            <Link href="/dicionario-do-investidor">
                              <a className="link_grid_header_absolute" title="Desmitificando todos os termos do mercado financeiro"></a>                              
                            </Link>
                            <div className="wrap_box_style_main image-post-title">
                              <h3 className="image-post-title">
                                <Link href="/dicionario-do-investidor">
                                  <a>Desmitificando todos os termos do mercado financeiro</a>
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>  

                        {/* Card Literatura */}
                        <div className="jl_grid5_item jl_grid5small jl_grid3">
                          <div className="jl_grid5_itemin">
                            <span className="image_grid_header_absolute" style={{ backgroundImage: "url('/img/literatura.jpg')" }}></span>
                            <Link href="/literatura">
                              <a className="link_grid_header_absolute" title="Indicações de leitura sobre finanças, investimentos, empreendedorismo e mudança de mindset"></a>                              
                            </Link>                              
                            <div className="wrap_box_style_main image-post-title">
                              <h3 className="image-post-title">
                                <Link href="/literatura">
                                  <a>Indicações de leitura sobre finanças, investimentos, empreendedorismo e mudança de mindset</a>
                                </Link>
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Cards Últimos Artigos */}
                        {
                          articles && articles.map(article =>
                            <div key={article.id} className="jl_grid5_item jl_grid5small jl_grid4">
                              <div className="jl_grid5_itemin">
                                <span className="image_grid_header_absolute" style={{ backgroundImage: `url(${article.images[0]})` }}>
                                </span>
                                <Link href={`/artigos/${article.url}`}>
                                  <a className="link_grid_header_absolute" title={article.title}>
                                  </a>
                                </Link>
                                <div className="wrap_box_style_main image-post-title">
                                  <h3 className="image-post-title">
                                    <Link href={`/artigos/${article.url}`}>
                                      <a>{article.title}</a>
                                    </Link>
                                  </h3>
                                  <span className="jl_post_meta">
                                    {/* <span className="jl_author_img_w">
                                      <img src="/img/dko.jpg" width="30" height="30" alt="Zamur" className="avatar avatar-30 wp-user-avatar wp-user-avatar-30 alignnone photo" />
                                      <a href="index-9.html#" title="Posts by Zamur" rel="author">Zamur</a>
                                    </span> */}
                                    <span className="post-date">
                                      <i className="fa fa-clock-o"></i>{article.date}
                                    </span>
                                  </span>
                                </div>
                              </div>
                            </div>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <span className="jl_none_space"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection;