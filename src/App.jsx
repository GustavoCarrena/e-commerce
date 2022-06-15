
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/navBar/NavBar';
import { ItemListContainer } from './components/containers/itemListContainer/ItemListContainer';

function App() {
  return (
    <div className='print'>
      <NavBar />
      <ItemListContainer  greeting={'Proximo render de items!!'}/>
    </div>
  );
};

export default App;
