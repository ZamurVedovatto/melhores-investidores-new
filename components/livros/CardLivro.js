import React, { Component } from 'react';
import cardLivroStyles from './CardLivro.module.scss';

class CardLivro extends Component {

  render() {
    const { img, title, author, description, sections, link } = this.props.livro;

    return(
      <div className={`${cardLivroStyles.cardlivroWrapper}`}>
        <div className={`${cardLivroStyles.cardlivroContent}`}>
          <div className={`${cardLivroStyles.cardlivroContentTop}`}>
            <img className="uk-border-rounded" src={img} alt="livro" />
            <div className={`${cardLivroStyles.cta}`}>
              <a href={link} target="_blank" rel="noopener noreferrer" className={`${cardLivroStyles.livroCta} uk-button uk-button-default uk-width-1-1 uk-margin-small-bottom`}>Saiba mais</a>
            </div>
          </div>
          <div className={`${cardLivroStyles.cardlivroContentBottom}`}>
            <div className={`${cardLivroStyles.rightTop}`}>
              <span className={`${cardLivroStyles.livroTitle}`}>{title}</span>
              <span className={`${cardLivroStyles.livroAuthor}`}>{author}</span>
              <div className={`${cardLivroStyles.livroStars}`}>
                {
                  sections.map((section) =>  <span key={section}>{section}</span>)
                }
              </div>
            </div>
            <div className={`${cardLivroStyles.rightCenter}`}>
              <span className={`${cardLivroStyles.livroDescription}`}>{description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardLivro;