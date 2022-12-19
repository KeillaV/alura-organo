import { useState } from 'react';
import Banner from './components/Banner';
import { Form } from './components/Form/Form';

function App() {

  const [workers, setWorkers] = useState([])

  const addWorker = (worker) => {
    console.log(worker)
    
    // Adicionando o novo colaborador
    setWorkers([...workers, worker])
  }

  return (
    <div className="App">
      <Banner />
      <Form whenInputWorker={worker => addWorker(worker)}/>
    </div>
  );
}

export default App;
