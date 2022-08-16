import { Component } from "react" /* con esto podemos invocar setState para poder crear un estado dentro de un component */

class Button extends Component {
  constructor(props) {
    super(props); // super hace referencia al componente al que estamos extendiendo (osea Component)
    console.log('constructor', props);
  }

  componentDidMount() { /* este no recibe ningún argumento, solo se ocupa cuando hay que llamar a setState para poder actualizar el estado de nuestro componente */
    console.log('componentDidMount')
  }

  // componentDidUpdate recibe dos argumentos, las propiedades anteriores, y el estado anterior
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate',prevProps,prevState)
  }

  // se ejecuta cuando el componente va a ser desmontado, y no es lo mismo que hiden en css, porque el componente sigue renderizado, en cambio aca no, se desmonta totalmente de react
  componentWillUnmount(){
    console.log('desmontado :3',this.props,this.state)
  }

  render() {
    console.log("ejecutando metodo render de Button")
    return(
      <button onClick={() => this.setState({ prop: 1 })}>
        Enviar desde component
      </button>
    )
  }
}

// clase Input
class Input extends Component {
  render() {
    return (
      <input
        value={this.props.value}
        onChange={this.props.onChange}
      />
    )
  }
}


// cómo extender una clase de un componente
// mi clase de App va a extender de la clase de Component de react
class App extends Component {
  // aca estoy definiendo un componente vacio (que ahora tiene el valor de "valor: 3")
  // este valor se puede cambiar cuando llamamos al valor de "this.setState({ valor: 2 })"
  // y obviamente hay que poner el this.blablabla, ya que this. hace referencia a la clase de app, vendría siendo como un self en python
  // una vez se haya actualizado el metodo de setState, todo el render se vuelve a ejecutar
  state = {
    /* react necesita que el estado de un componente se llame siempre state */
    valor: 3
  }


  // lo primero que hay que definir dentro de los componentes basados en clases es el metodo de render
  render() {
    console.log(this.state)
    return (
      <div>
        <p className={`${this.state.valor}`}>Puto el que lee</p>
        {this.state.valor === 3 ?
          <Button blondy="feliz :3"/>
          : null
        }
        <button onClick={() => this.setState({ valor: 2 })}>
          Enviar default
        </button> {/* el metodo de render se ejecuta siempre en dos condiciones: (1) Si el componente cambió (2) cuando el metodo render de un componente padre haya sido llamado*/}
      </div>
    )
  }
}

export default App