import React, { Component } from 'react';
import ListaDeNotas from './components/ListaDeNotas/';
import FormularioCadastro from './components/FormularioCadastro';
import "./assets/App.css";
import "./assets/index.css";
import ListadeCategorias from './components/ListadeCategorias/ListaDeCategorias';

class App extends Component {
  constructor() {
    super()

    this.state = {
      notas: [{
        titulo: "Título", // apagar
        texto: "Conteúdo da nota", // apagar
        categoria: "Sem Categoria" // apagar
      }],
      categorias: ["Games", "Música"] // Esvaziar o array depois de testar
    }
  }

  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria }
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }

  deletarNota(indice) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(indice, 1);
    this.setState({ notas: arrayNotas })
  }

  adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria]
    const novoEstado = {...this.state, categorias: novoArrayCategorias}
    this.setState(novoEstado)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          criarNota={this.criarNota.bind(this)}
          categorias={this.state.categorias}
        />
        <main className="conteudo-principal">
          <ListadeCategorias
            categorias={this.state.categorias}
            adicionarCategoria={this.adicionarCategoria.bind(this)}
          />
          <ListaDeNotas
            notas={this.state.notas}
            apagarNota={this.deletarNota.bind(this)}
          />

        </main>
      </section >
    );
  }
}

export default App;
