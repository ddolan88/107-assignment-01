import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar></Navbar>
        <h1>welcome to the store!</h1>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default App;
