import React, { Component } from 'react';
// import './CardLivro.scss';

class CardLivro extends Component {

  render() {
    const { img, title, author, description, sections, link } = this.props.livro;
    console.log(link)

    return(
      <div className="cardlivro-wrapper uk-card uk-card-default">
        <div className="cardlivro-content">
          <div className="cardlivro-content-top">
            <img className="uk-border-rounded" src={img} alt="livro" />
          </div>
          <div className="cardlivro-content-bottom">
            <div className="right-top">
              <span className="livro-title">{title}</span>
              <span className="livro-author">{author}</span>
              <div className="livro-stars">
                {
                  sections.map((section) =>  <span key={section}>{section}</span>)
                }
              </div>
            </div>
            <div className="right-center">
              <span className="livro-description">{description}</span>
            </div>
            <div className="right-bottom">
              <a href={link} target="_blank" rel="noopener noreferrer" className="livro-cta uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom">Saiba mais</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardLivro;