import Button from './Button.js'
import './main.css'

// indicar un valor único para poder identificar la fila que queremos renderizar en caso que ese llegara a cambiar
// en react, si estamos trabajando con listas que se van a imprimir tenemos que 
const arr = [
    'Blondy feliz',
    'Blondy triste',
    'Blondy emocionado',
];

const App = () => {

    const miVariable = false;

    if (miVariable) {
        return <p>Mi variable dio true!</p>
    }

    return (
        <div className = "class-P-modified">
            <h1>Hello</h1>
            <h1>World</h1>
            {arr.map(el => <p key={el}>{el}</p>)}
            <Button onClick = {() => console.log("Clicked")}/>
        </div>
    );
};

export default App;