import dicionarioStyles from './dicionario-do-investidor.module.scss';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout';
import Home from './home';
import dicionario from './../lib/dicionario/dicionario.json';
import { Component } from 'react';

class DicionarioDoInvestidor extends Component {
  constructor() {
    super();
    this.state = {
      termos: dicionario,
      termoTitle: "Desmitificando todos os termos do mercado financeiro",
      mainContent: "Selecione um termo ao lado",
      secondaryContent: "",
      isLoading: false
    }
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  handleClick(termo) {
    let title = termo.termo;
    let main = termo.conteudo[0];
    let secondary = termo.conteudo.slice(1, termo.conteudo.length);

    this.setState({
      termoTitle: title,
      mainContent: main,
      secondaryContent: secondary
    })
  }

  handleChange (e) {
    let value = e.target.value;
    this.filterTermos(value);
  }

  normalizeText(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()
  }

  filterTermos = (termoFilter) => {
    if (termoFilter !== '') {
      let filteredTermos = this.state.termos.filter((termoLoop) => {
        let termoName = this.normalizeText(termoLoop.termo);
        return termoName.indexOf(this.normalizeText(termoFilter)) !== -1
      })
      this.setState({
        termos: filteredTermos
      })
    } else {
      this.clearSearch();
    }
  }

  clearSearch() {
    this.setState({
      termos: dicionario
    })
  }

  render() {
    const { termos, termoTitle, mainContent, secondaryContent } = this.state;

    return (
      <Layout>
        <Head>
          <title>{siteTitle} - Dicionário das Finanças</title>
        </Head>
        <div className="jl_single_style8">
          <div className="single_captions_aboves_image_full_width_wrapper" style={{ marginBottom: '30px' }}>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <section className={`${dicionarioStyles.dicionarioWrapper} row`}>
                    <div className={`${dicionarioStyles.dicionarioList} col-md-6 `}>
                      <form className="uk-search uk-search-default" style={{ width: '100%' }}>
                        <span uk-search-icon="true"></span>
                        <input className="uk-search-input" type="search" placeholder="Buscar..."
                          onChange={(e) => {this.handleChange(e)}}
                        />
                      </form>
                      <ul className="uk-list">
                        {
                          termos.map((termo)  =>
                            <li>
                              <a onClick={() => this.handleClick(termo)}>
                                {termo.termo}
                              </a>
                            </li>
                          )
                        }
                      </ul>
                    </div>
                    <div className={`${dicionarioStyles.dicionarioDefinicao} col-md-6`}>
                      <div className={`${dicionarioStyles.definicaoTop}`}>
                        <h1>{termoTitle}</h1>
                        <span className={`${dicionarioStyles.mainInfo}`}>
                        {mainContent}
                        </span>
                        {
                          secondaryContent && secondaryContent.map((content) =>
                            <span className={`${dicionarioStyles.secondaryInfo}`}>
                              {content}
                            </span>
                          )
                        }
                      </div>
                      {/* <div className={`${dicionarioStyles.definicaoLinks}`}>
                        <button>artigos/como-criar-valor</button>
                        <button>artigos/como-criar-valor</button>
                      </div> */}
                    </div>
                  </section>
  
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )

  }
}

export default DicionarioDoInvestidor;