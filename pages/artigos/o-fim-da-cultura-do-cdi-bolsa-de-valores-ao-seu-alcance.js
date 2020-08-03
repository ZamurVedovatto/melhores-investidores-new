import React, { Component } from 'react';

import artigoStyles from './artigos.module.scss';

import Head from 'next/head';
import Layout from '../../components/layout'
import PostTopInfo from '../../components/post/PostTopInfo'
import PostHashs from '../../components/post/PostHashs'
import PostShare from '../../components/post/PostShare'
import PostAuthor from '../../components/post/PostAuthor'
import PostRelateds from '../../components/post/PostRelateds'
import PostAnchorLinks from '../../components/post/PostAnchorLinks'
import PostSidebar from '../../components/post/PostSidebar'

import data from "./../../lib/posts/posts.json";

class PostExample extends Component {
  constructor(props){
    super(props);
    this.state = {
      info: {}
    }
  }

  componentWillMount() {
    this.getInfo();
  }

  getInfo() {
    this.setState({
      info: data[3]
    })
  }
    
  render() {
    const { info } = this.state;
    return (
      <Layout>
        <Head>
          <title>{this.state.info.title}</title>
        </Head>
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
                        A taxa de juros referencial Selic está no nível mais baixo da história: 6,75%
                        ao ano. Essa mesma taxa ficou em 14,25% entre julho de 2015 e agosto de 2016.
                        Em 18 meses, a tesoura do Banco Central (BC) cortou os juros brasileiros em 7,5
                        pontos percentuais. A taxa caiu de 1,12% ao mês em julho de 2015 para 0,55%
                        ao mês em março de 2018. Alguns economistas de bancos já projetam mais um
                        corte de 0,25% na taxa Selic, para 6,5% ao ano (0,53% ao mês), no dia 21 de
                        março. Isso abriu caminho para o fim da cultura do CDI..
                        </p>
                        <p>
                        Segundo a previsão do relatório Focus do BC, a taxa Selic deve permanecer
                        estável em 2018 (6,75% ao ano) e subir, em 2019, para 8% ao ano (0,64% ao mês).
                        O que significa o fim da cultura do CDI e o que você, investidor, tem a ver
                        com isso?
                        </p>
                        <p>
                        O fim da cultura do CDI quer dizer que o dinheiro aplicado no banco em
                        juros pós-fixados (CDI) agora rende muito menos do que antes. Assim, você,
                        investidor, tem de passar a se preocupar mais com o rendimento das suas aplicações financeiras. Como diria a música do Roberto Carlos, “daqui pra frente
                        tudo vai ser diferente”.
                        </p>
                        <blockquote>
                          <p>Seguro morreu de velho</p>
                        </blockquote>
                        <p>
                        O Brasil já teve juros baixos em duas ocasiões. Em setembro de 2009,
                        as taxas caíram para 8,75% ao ano. Em outubro de 2012, elas recuaram para
                        7,25% ao ano. Nessas duas ocasiões, o governo brasileiro reduziu os juros “na
                        marra” e posteriormente o BC teve de ajustar as taxas para cima. O povo brasileiro pagou a conta com inflação alta. Porém, mais uma vez eu recorro ao rei
                        Roberto Carlos para falar da taxa de juros baixa: “Eu voltei, agora para ficar…
                        porque aqui, aqui é o meu lugar.”
                        </p>
                        <p>
                          <img className="wp-image-4861 alignleft"  src={info.images[1]} alt="" width="338" height="423" />A economia brasileira sempre foi indexada e atrelada à taxa de juros do CDI,
                          desde a época do overnight nos tempos da hiperinflação. Assim, o rendimento
                          das aplicações financeiras sempre foi analisado em relação ao CDI, que era o
                          benchmark, ou seja, a base de comparação.
                        </p>                        
                        <p>
                        O investidor brasileiro nunca pensou no retorno do seu portfólio em termos
                        absolutos ou em termos reais (descontada a inflação). As aplicações financeiras
                        tradicionais de renda fixa (CDBs de bancos, fundos de investimentos e títulos
                        públicos) sempre tiveram o seu desempenho medido em “por cento do CDI”
                        (% do CDI).
                        </p>
                        <p>
                        O brasileiro ficou acostumado com o “número mágico” de 1% ao mês de
                        rendimento da renda fixa. Como a taxa de juros era alta, o rendimento era alto
                        com baixo risco. Era um mundo “mágico” de alta liquidez, alto rendimento e
                        baixo risco. O investidor agora precisa escolher entre rendimento e risco para
                        aprender como investir em ações.
                        </p>

                        <p>
                        O lado perverso da alta taxa de juros sempre foi a visão de curtíssimo prazo
                        dos aplicadores em relação aos investimentos, pois não valia a pena correr mais
                        risco comparado ao alto rendimento da taxa de juros com baixo risco (taxa Selic
                        de 26,5% em 2003).
                        </p>
                        <p>
                        Essa visão de curto prazo explica a pouca importância dos ativos financeiros
de prazo mais longo, como, por exemplo, renda variável (ações), no cômputo
total dos investimentos. Atualmente, apenas 5% dos recursos totais de fundos no
Brasil estão aplicados em ações (segundo dados da Anbima), o nível mais baixo
da história.
                        </p>
                        <p>                          
                        Acredito que a “cultura do CDI” está chegando ao fim e o seu impacto no
rendimento das aplicações financeiras será muito grande.
                        </p>
                        <p>
                        <img className="wp-image-4861 alignleft"  src={info.images[2]} alt="" width="338" height="423" />
                        Para simplificar, usarei exemplos numéricos para explicar o impacto no bolso do nosso leitor: R$ 100 mil aplicados em um CDB de um grande banco (com
taxa equivalente a 100% do CDI) renderiam, sem descontar Imposto de Renda,
R$ 14.250 durante o ano todo de 2016 (CDI de 14,25%). Com a taxa Selic a
6,75% ao ano, o mesmo rendimento bruto seria reduzido para R$ 6.750, quase
metade do rendimento de 2016.
                        </p>
                        <p>
                        E agora? O que fazer? Para se chegar ao mesmo rendimento de 2016, será
necessário correr mais risco. Em resumo: aumentar exposição a ativos de maior
risco. Neste cenário, é fundamental aprender a como investir em ações.
                        </p>
                        <p>
                        A boa notícia é que as condições para a economia no Brasil nunca foram
tão favoráveis: temos um time dos sonhos na equipe econômica (Banco Central,
Ministro da Fazenda) e um ambiente externo favorável, com baixa aversão ao
risco e alta liquidez global.
                        </p>
                        <p>
                        Deixando um pouco de lado as questões políticas (reforma da Previdência,
eleições presidenciais em 2018), as perspectivas de longo prazo são positivas,
com um descolamento da economia da política. Cada vez mais os investidores
estão pensando no longo prazo em termos de aplicações financeiras. Um exemplo disso são os títulos públicos negociados por meio do Tesouro Direto com
prazo entre 2035 e 2050 – antes, eles eram eram mais curtos.
                        </p>
                        <p>
                        Existem basicamente cinco ativos em termos de relação risco retorno: juros
pós-fixados (Selic/CDI), Tesouro Direto (inflação IPCA mais e pré-fixada), fundos multimercado e investimentos em ações.
                        </p>
                        <p>
                        Como somos (ou já fomos) o País do futebol, vale a metáfora: o jogo não
está mais 4 × 0 a nosso favor; não podemos mais ficar tocando a bola de lado e
passando o pé sobre a bola do CDI.
                        </p>
                        <p>
                        Será preciso ir para o ataque e aumentar o risco e o horizonte de prazo para
os investimentos. Obviamente, existem os investidores mais Pepe Guardiola e os
mais retranqueiros, isto é, com perfis diferentes de risco.
                        </p>
                        <p>
                        Esse ambiente atual já se refletiu na indústria brasileira de fundos em 2017:
segundo dados da Anbima, a captação líquida total da indústria de fundos atingiu
R$ 260 bilhões, o dobro da captação de R$ 130 bilhões em 2016, com a maior
entrada de recurso em fundos de investimento desde 2002.
                        </p>
                        <p>
                        Os fundos multimercado lideraram a captação líquida em 2017: R$ 101 bilhões (R$ 4,6 bilhões em 2016).
                        Os fundos de ações captaram R$ 21 bilhões em 2017 (resgates de R$ 5 bilhões em 2016). Porém, os fundos dedicados exclusivamente a ações ainda representam apenas 5% do total dos recursos aplicado na indústria de fundos.
                        </p>
                        <p>
                        Os fundos de previdência privada aberta, com horizonte de investimento
mais de longo prazo, captaram R$ 45 bilhões em 2017, frente aos R$ 58 bilhões
dos fundos de renda fixa no mesmo período.
Dentro dos fundos de previdência, houve aumento da participação dos multimercados, com captação de R$ 15 bilhões em 2017.
Acredito que seja somente o começo da migração para os ativos de maior
risco e que a taxa de juros baixa veio mesmo para ficar.
A definição do nível de risco da carteira dos investimentos é o principal passo para a determinação da rentabilidade média consolidada.
                        </p>
                        <p>
                        Com o fim da cultura do CDI, o retorno das aplicações financeiras deve ser
pensado em termos absolutos ao ano, isto é, em termos reais descontada a inflação. Em países desenvolvidos, como os Estados Unidos, com baixa inflação
e taxa de juros, o rendimento das aplicações financeiras já é “pensado” pelos
investidores em termos absolutos e em termos reais, acima da inflação.
                        </p>
                        <p>
                        No mercado brasileiro, a referência de rendimento em termos reais é a Nota
do Tesouro Nacional IPCA+ (antiga NTN-B), que tem rendimento equivalente
à inflação (IPCA) mais uma taxa de juros real pré-definida por volta de 5% ao
ano. Por fim, acreditamos que o investidor daqui para frente deve pensar assim
para manter um patamar razoável de rendimento em suas aplicações financeiras.
                        </p>

                      </div>
                      {/* Fim - Conteudo aqui */}
  
  
                      <div className="clearfix"></div>
                      {/* <div className="single_tag_share">
                        <PostHashs hashtags={info.hashtags} />
                        <PostShare related={info.related} />
                      </div> */}
                      {/* <PostRelateds  /> */}
                      <PostAuthor author={info.author} />
                      {/* <PostAnchorLinks /> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4" id="sidebar">
                <PostSidebar />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PostExample;