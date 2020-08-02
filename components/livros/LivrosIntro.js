import React, { Component } from 'react';
import livrosData from './../../lib/livros/livrosGeral.json';
import CardLivro from './CardLivro';

class LivrosMain extends Component {
  constructor() {
    super();
    let unonderedBooks = this.sortLivros();
    this.state = {
      livros: unonderedBooks
    }
  }

  sortLivros() {
    let data = livrosData;
    let currentIndex = data.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = data[currentIndex];
      data[currentIndex] = data[randomIndex];
      data[randomIndex] = temporaryValue;
    }
    return data;
  }

  filterData(type) {
    let { livros } = this.state;
    livros = livros.filter(livro => {
      livro.sections.forEach(section => {
        if (section == type) {
          return livro;
        }
      })
    })
    this.state = {
      livros
    }
  }

  render() {
    const { livros } = this.state;
    return(
      <div className="livrosintro-wrapper">
        <div className="livrosintro-left uk-card uk-card-default">
          <span className="livrosintro-description">
          Leitura é atividade fundamental para nosso desenvolvimento. Além do mais, o crescimento intelectual precede o crescimento financeiro. Tomemos como exemplo as pessoas mais admiradas por serem intelectualmente brilhantes, em grande maioria, são leitores vorazes.
          </span>
          <div className="livrosintro-filter">
            <ul className="livrosintro-filter-list uk-list">
              <li onClick={this.filterData('investimentos')} >investimentos</li>
              <li onClick={this.filterData('mindset')} >mindset</li>
              <li onClick={this.filterData('empreendedorismo')} >empreendedorismo</li>
            </ul>
          </div>
        </div>
        <div className="livrosintro-content uk-card">
          <ul className="uk-list">
            {
              livros.map((livro)  =>
              <li key={livro.id}>
                <CardLivro livro={livro} />
              </li>
              )
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default LivrosMain;