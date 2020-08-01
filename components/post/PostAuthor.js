const { Component } = require("react");

class PostAuthor extends Component {
  render() {
    const { author } = this.props;

    return (
      <div className="auth">
        <div className="author-info">
          <div className="author-avatar">
            <img src="/img/favicon-zamur.png" width="165" height="165" alt="Zamur Vedovatto" className="avatar avatar-165 wp-user-avatar wp-user-avatar-165 alignnone photo" />
          </div>
          <div className="author-description">
            <h5><a href="post-layout-6.html#">Zamur Vedovatto</a></h5>
            <p>Analista de Sistemas, empresário e apaixonado por empreendedorismo, negócios e investimentos, o autor produz conteúdo com o intuito de atiçar a capacidade do leitor de produzir insights e conhecimento.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PostAuthor;