import './App.css';
import Header from './components/header';
import IMC from './components/IMC/index';
import Form from './components/Form/Form';
function App() {
  return (
    <div className="App">
      {/* <Header
        title="Titulo do App"
      />
      <IMC /> */
        <Form title="props" />
      }

    </div>
  );
}

export default App;
