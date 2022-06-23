
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavBar } from './components/navBar/NavBar';
import { ItemListContainer } from './components/containers/itemListContainer/ItemListContainer';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={'Productos'} />
    </>
  );
};

export default App;
