import React from 'react';
import ReactDOM from 'react-dom';

const conteudo =  <>
                      <h1>Oi Mundo</h1>
                      <input value="oi"></input>
                  </> ;

//const conteudo = React.createElement('p', {class: 'meuParagrafo'}, 'Olá pessoal!' )

class Titulo extends React.Component{
  constructor(){
    super();
    this.state = {color: "red"} 
  }
  render(){
    return <h1>Títudo da minha Página com cor {this.state.color}</h1>
  }
}
const elementoTitulo = <>
                          <Titulo /> 
                          <hr/>
                          <Titulo />
                        </>;


class Botao extends React.Component{
  
  mostrarAlerta(){
    alert("Botão clicado");
  }

  render(){
    return <button onClick={ this.mostrarAlerta }>Clique aqui</button>
  }

}

// ReactDOM.render(
//     <Botao />,
//     document.getElementById('pagina')
// );


class Formulario extends React.Component{

    constructor(){
      super();
      this.state = {resultado: 0 };
    }

    calcular = (event) => {
        this.setState( {resultado: event.target.value * 2 } )
    }

    render(){

      const estilo ={
        color: "blue" ,
        border: "solid 3px red"
      };

      return <form>
                <h1>Multiplicar por 2</h1>
                <input type='number' onChange={this.calcular} /> 
                <br />
                <span style={ estilo } >Resultado: {this.state.resultado}</span>
            </form>
    }    
}

ReactDOM.render(
  <Formulario />,
  document.getElementById('pagina')
);

