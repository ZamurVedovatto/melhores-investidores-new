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
        {
          livros.map((livro)  =>
          <div className="col-sm-12 col-md-4 col-lg-3" key={livro.id}>
            <CardLivro livro={livro} />
          </div>
          )
        }
      </div>
    );
  }
}

export default LivrosMain;