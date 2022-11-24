import './App.css';
import ButtonWithMessage from './components/ButtonWithMessage';
import ButtonIncreaseDecrease from './components/ButtonIncreaseDecrease';
import ButtonIncreDecreLabel from './components/ButtonIncreDecreLabel';
import DataForm from './components/DataForm';
import ButtonMatrix from './components/ButtonMatrix';
import TextButton from './components/TextButton';

function App() {
  return (
    <div className="App">
      <ButtonMatrix rows="10" cols="10"></ButtonMatrix>

      <header className="App-header">
        <TextButton></TextButton> 
        <DataForm></DataForm>
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
