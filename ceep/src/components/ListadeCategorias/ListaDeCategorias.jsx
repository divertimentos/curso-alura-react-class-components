import React, { Component } from 'react';
import "./estilo.css";

class ListadeCategorias extends Component {

  _handleEventoInput(e) {
    // console.log(e.key)
    if(e.key == "Enter") {
      console.log("Categoria adicionada!")
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.map((categoria) => {
            return (
              <li className="lista-categorias_item">
                {categoria}
              </li>
            )
          })}
          {/* <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li>
          <li className="lista-categorias_item">Categorias</li> */}
        </ul>

        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListadeCategorias;