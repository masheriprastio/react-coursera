import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Button from './components/Btn';
let bilangan1 = 2;
var bilangan2 = 2;
function Header(props){
 return(
  <div>
    <h1>Judul Pertama {bilangan1}</h1>
    <p>Bilangan ke dua {bilangan2}</p>
  </div>
 )
}

function App() {
  function handleClick(){
    let random = Math.floor(Math.random() * 3)+1;
    console.log(random);
    let userInput = prompt('type a number');
    alert(`Computer number: ${random}, Your guess: ${userInput}`);
  }
  return(
    <div className="App">
      <Header/>
      <Nav/>
      <Main greetings="Helo"/>
      <Sidebar/>
      <Button/>
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  )
}

export default App;
