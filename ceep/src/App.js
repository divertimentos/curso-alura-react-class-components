import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro';
import "./assets/App.css";
import "./assets/index.css";
import ListadeCategorias from './components/ListadeCategorias/ListaDeCategorias';
import Categorias from './dados/Categorias';
import ArrayDeNotas from './dados/Notas';

class App extends Component {
  constructor() {
    super()
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListadeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias}
          />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}
          />

        </main>
      </section >
    );
  }
}

export default App;
