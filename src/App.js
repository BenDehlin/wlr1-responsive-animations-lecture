import './App.css';
import Example from './components/Example'

function App() {
  return (
    <div className="App">
      <div className="big-box">
        <div className="small-box"></div>
      </div>
      <div className="big-box">
        <div className="small-box-two">
        </div>
      </div>
      <Example />
    </div>
  );
}

export default App;
