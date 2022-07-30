import { useContext, useState } from 'react';
import { Shop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import { generateOrder } from '../firebase/generateOrder';
import { saveOrder } from '../firebase/saveOrder';

/**
 * @description  CustomHook for product quantity used in ItemCount
 * @param {Object} initialValues Initial keys without values
 * @param {Object} validationsForm To use in setErrors forn handle them
 * @returns {Object} { form, errors, handleChange, handleBlur, handleSubmit, show, handleClose, handleShow, emptyCart }
 */
export const useForm = (initialValues, validationsForm) => {

  const { cart, totalCartPrice, clearAllCart } = useContext(Shop);
  const [form, setForm] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const confirmOrder = () => {

    const formCart = cart.map((p) => {
      return { ...p.product, quantity: p.quantity };
    });

    const order = generateOrder(
      form.name,
      form.surname,
      form.phone,
      form.email,
      form.addres,
      formCart,
      form.paymethod,
      form.cardNumber,
      totalCartPrice
    );
    saveOrder(formCart, order, clearAllCart)
    setTimeout(() => {
      navigate('/')
    }, 2000);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = (e) => { const { name, value } = e.target; setForm({ ...form, [name]: value }) };
  const handleBlur = (e) => { handleChange(e); setErrors(validationsForm(form)) };
  const handleSubmit = () => confirmOrder();
  const emptyCart = () => {
    navigate('/');
  };

  return { form, errors, handleChange, handleBlur, handleSubmit, show, handleClose, handleShow, emptyCart };
}
