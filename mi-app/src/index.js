import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // esto guarda el elemento en la constante root para luego renderizarla 
root.render(
  <React.StrictMode> {/* esto nos va a mostrar errores o advertencias cuando no estamos siendo 100% escrictos con el código */}
    <App />
  </React.StrictMode>
);

/* Datazos:
 *  para poder estandarizar una etiqueta para hacerla más dinámica se hace de la siguiente manera
 */

// const Li = ({ children }) => <li>{children}</li>
// const LiTest = ({ children, estado }) => <li>{children}{estado}</li>

// /* Esto es un componente funcional jsx, que permite almacenar una especie de HTML (no es) llamado jsx para poder renderizarlo previamente*/
// const X = () => 
//   <ul>
//     <Li>Hola</Li> {/* las etiquetas "nuevas" que sirven para más dinamismo, */}
//     <LiTest estado=" XD">Mundo</LiTest>
//     <li>Cómo están?</li>
//   </ul>
// /* aca dentro de render toma como parámetro un string o un react element jsx */
// root.render(
//   <X />
// ) 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // nos permite medir el rendimiento y enviarlo a cualquier lado si asi lo desea (o imprimirlo y listo)