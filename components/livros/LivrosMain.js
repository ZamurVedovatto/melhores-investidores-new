import React, { Component } from 'react';
import CardLivro from './CardLivro';

class LivrosMain extends Component {
  constructor(props) {
    super(props);
    let unonderedBooks = this.sortLivros();
    this.state = {
      livros: unonderedBooks
    }
  }

  sortLivros() {
    let data = this.props.livros;
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
      <div className="row" style={{ margin: "0 auto", maxWidth: "1040px", width: "100%", padding: "2rem 0" }}>
        <div className="livrosintro-content col-12">
          <div className="row" style={{ width: "100%" }}>
            {
              livros.map((livro)  =>
              <div className="col-sm-12 col-md-4 col-lg-3" key={livro.id}>
                <CardLivro livro={livro} />
              </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default LivrosMain;