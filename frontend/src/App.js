import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './components/Home';  //home screen
import ProductDetail from './components/ProductDetail'; //product screen
import ProductEdit from './components/ProductEdit';
import ProductCreate from './components/ProductCreate';
const App =() => {
  return (
    <Router>

    
    <Header />
    <main className='py-3'>
      <Container>
      <Route path='/' component={Home} exact />
      <Route path='/product/:id' component={ProductDetail}  />
      <Route path='/edit/product/:id' component={ProductEdit}  />
      <Route path='/add' component={ProductCreate}  />




      </Container>

    </main>
    <Footer />
    </Router>
  );
}

export default App;
