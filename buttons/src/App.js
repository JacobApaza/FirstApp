import logo from './logo.svg';
import './App.css';
import ButtonWithMessage from './components/ButtonWithMessage';
import ButtonIncreaseDecrease from './components/ButtonIncreaseDecrease';
import ButtonIncreDecreLabel from './components/ButtonIncreDecreLabel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonIncreDecreLabel></ButtonIncreDecreLabel>
      </header>
      <div>
        <ButtonWithMessage></ButtonWithMessage>
      </div>
      <div>
        <ButtonIncreaseDecrease></ButtonIncreaseDecrease>
      </div>
    </div>
  );
}

export default App;
