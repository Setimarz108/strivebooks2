
import './App.css';
import MyBadge from './components/MyBadge';
import WarningSign from './components/WarningSign';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleBook from './components/SingleBook';
import books from './data/fantasy.json'


function App() {
  return (
    <div className="App">
      
      <WarningSign text="hola"/>
      <MyBadge  colors="secondary"/>
      
      <h1>Hello TEst</h1>
        <h1>test</h1>
      <SingleBook book={books}/>
      
    </div>
  );
}

export default App;
