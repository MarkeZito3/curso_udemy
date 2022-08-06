import logo from './logo.svg';
import './App.css';

// también se pueden crear las "✨Nuevas Etiquetas✨" aca dentro
const P = ({ children }) => {
  return(
    <p>{children}</p>
  )
};

/* la funcionalidad de crear una función App es hacer que dentro del HTML haya lógica, algo que no se puede hacer en el html normal, luego, estas se exportan y se renderizan en el index */
function App() {
  /* aca iría la lógica: */
  let logica = "UwU"

  return (
  <div>
    <p className='clase-p'>{logica}</p>
    <P>✨Brillito UwU✨</P>
  </div>
  );
}

export default App;
