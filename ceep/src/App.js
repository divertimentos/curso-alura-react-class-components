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
      notas: [],
      categorias: ["Categoria I", "Categoria II"] // Esvaziar o array depois de testar
    }
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto }
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

  criarCategoria(texto) {
    const novaCategoria = { texto }
    const novoArrayCategorias = [...this.state.categorias, novaCategoria]
    const novoEstadoCategorias = {
      categorias: novoArrayCategorias
    }
    this.setState(novoEstadoCategorias)
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          criarNota={this.criarNota.bind(this)} 
          criarCategoria={this.criarCategoria.bind(this)}
        />
        <main className="conteudo-principal">
          <ListadeCategorias
            categorias={this.state.categorias}
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
