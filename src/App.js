import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header.js';

function App() {


  return (
    <div className="App">
      <div className="error">This app is not responsive for mobile</div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
