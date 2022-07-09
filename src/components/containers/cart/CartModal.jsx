import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Shop } from '../../../context/ShopContext';
import styles from './cart.module.scss'

export function CartModal() {
  const [show, setShow] = useState(false);
  const {mount} = useContext(Shop);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true)};

  return (
    <>
      <button onClick={handleShow} className={styles.buyBtn} >Comprar</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Monto Total de la compra: {mount}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

