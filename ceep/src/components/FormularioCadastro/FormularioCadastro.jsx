import React, { Component } from 'react';
import "./estilo.css"

class FormularioCadastro extends Component {
  render() {
    return (
      <form className="form-cadastro">
        <input
          type="text"
          className="form-cadastro_input"
          placeholder="Título"
        />
        <textarea
          rows={15}
          className="form-cadastro_input"
          placeholder="Escreva sua nota..." />
        <button
          className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    )
  }
}

export default FormularioCadastro;
