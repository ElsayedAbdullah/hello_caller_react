import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
      </div>
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
