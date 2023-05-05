import './App.css';
import Header from './components/header';
import IMC from './components/IMC/index';
function App() {
  return (
    <div className="App">
      <Header
        title="Titulo do App"
      />
      <IMC />

    </div>
  );
}

export default App;
