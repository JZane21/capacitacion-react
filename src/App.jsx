// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Saludo } from './components/Saludo';
import { Header } from './components/Header'
import { Auto } from './components/Auto';
import { Card } from './components/Card';
import { Formulario } from './components/Formulario';
import { Content } from './components/Content';
// import { PrimerComponente } from './PrimerComponente'

// aqui se importa todo lo necesario

// todo archivo de react debe ser de tipo jsx
// este debe tener esta estructura para ser un componente:
// function Name(){
// codigo javascript como: alert('hola mundo');
//   return (
//   );
// };

// material UI + Boostrap = tailwind

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Header/>
      <Content/>
    </div>
  );
}

{/* <div className="App">



 <div>
  <a href="https://vitejs.dev" target="_blank">
    <img src={viteLogo} className="logo" alt="Vite logo" />
  </a>
  <a href="https://reactjs.org" target="_blank">
    <img src={reactLogo} className="logo react" alt="React logo" />
  </a>
</div>
<h1>Vite + React</h1>
<div className="card">
  <button onClick={() => 
    setCount((count) => 
    {count = count + 1
    return count})
  }>
    count is {count}
  </button>

  <PrimerComponente/>

  <p>
    Edit <code>src/App.jsx</code> and save to test HMR
  </p>
</div>
<p className="read-the-docs">
  Click on the Vite and React logos to learn more
</p> 
</div> */}

export default App
