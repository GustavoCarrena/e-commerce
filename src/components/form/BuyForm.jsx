
import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import { Shop } from "../../context/ShopContext";
import { db } from "../../firebase/config";
import {generarOrden} from '../../firebase/generarOrden'
// import {guardarOrden} from '../../firebase/guardarOrden';


export const BuyForm = () => {

  const { cart, totalCartPrice  } = useContext(Shop);
  const [form, setForm] = useState({});

  const handleChange = e => { setForm({...form, [e.target.name]: e.target.value}) };
  
    
    const confirmarOrden = async () => {
      const order = generarOrden(form.name, form.surname, form.adress,form.phone,form.email,form.paymethod,cart.map(p=>p.product), totalCartPrice);
      // guardarOrden(cart, order)
      const docRef = await addDoc(collection(db, "orders"),order)
      console.log("Id de la compra: ", docRef.id);

    }


    const handleSubmit = (e) =>{
      e.preventDefault();
      confirmarOrden()
    };
    
    // console.log(cart2);
    // console.log(typeof form.name );

 
    return (
        
        <>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" value={form.name || ''} onChange={handleChange}/>
          <label htmlFor="surname">Apellido</label>
          <input type="text" id="surname" name="surname" value={form.surname || ''} onChange={handleChange}/>
          <label htmlFor="phone">Telefono</label>
          <input type="text" id="phone" name="phone" value={form.phone || ''} onChange={handleChange}/>
          <label htmlFor="email">Correo electrónico</label>
          <input type="text" id="email" name="email" value={form.email || ''} onChange={handleChange}/>
          <label htmlFor="addres">Direccion</label>
          <input type="text" id="adress" name="adress" value={form.adress || ''} onChange={handleChange}/>
          <h6>Medio de Pago</h6>
          <select name="paymethod" onChange={handleChange} defaultValue="">
            <option value="">Seleccione su tipo de tarjeta</option>
            <option value="visa">Visa</option>
            <option value="master">Mastercard</option>
          </select>
          <input type="submit" />
        </form>

       
        </>


  );
}



