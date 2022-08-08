import logo from './logo.svg';
// import './App.css'; /* CreateReactApp utiliza webPack por debajo, y si no se quiere utilizar eso, entonces el ./App.css no es tan portable */
import './main.css'

// también se pueden crear las "✨Nuevas Etiquetas✨" aca dentro 
const P = ({ children }) => {
  return(
    <p className = 'class-P-modified'>{children}</p>
  )
};

/* la funcionalidad de crear una función App es hacer que dentro del HTML haya lógica, algo que no se puede hacer en el html normal, luego, estas se exportan y se renderizan en el index */
function App() {
  /* aca iría la lógica: */
  let logica = "UwU"

  return (
  <div>
    <p className = 'class-p-default'>{logica}</p>
    <P>✨Brillito UwU✨</P>
  </div>
  );
}

export default App;