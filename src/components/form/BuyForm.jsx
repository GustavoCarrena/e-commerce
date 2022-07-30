import { useContext } from "react";
import { Shop } from "../../context/ShopContext";
import { useForm } from "../../hooks/useForm";
import { PageNotFound } from "../pageNotFound/PageNotFound";
import {formValidations,formatDataValidation,initialValues,formIsEmpty,} from "../../helpers/formValidations";
import styles from "./clientForm.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const BuyForm = () => {
  const { cart, totalCartPrice } = useContext(Shop);
  const {form,errors,handleChange,handleBlur,handleSubmit,show,handleClose,handleShow,} = useForm(initialValues, formValidations);

  return (
    <>
      {cart.length === 0 ? (
        <PageNotFound cart={cart.length} />
      ) : (
        <div className={styles.pageContainer}>
          <div className={styles.container}>
            <div className={styles.title}>Formulario de Compra</div>
            <form className={styles.formContainer}>
              <label
                className={`${styles.label} ${styles.labelName}`}
                htmlFor="name"
              >
                {errors.name && (
                  <span
                    className={`${styles.labelError} animate__animated animate__flash`}
                  >
                    {errors.name}
                  </span>
                )}
              </label>
              <input
                className={`${styles.inputs} ${styles.inputName}`}
                type="text"
                id="name"
                name="name"
                value={form.name || ""}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Introduzca nombre"
                required
              />
              <label
                className={`${styles.label} ${styles.labelSurname}`}
                htmlFor="surname"
              >
                {errors.surname && (
                  <span
                    className={`${styles.labelError} animate__animated animate__flash`}
                  >
                    {errors.surname}
                  </span>
                )}
              </label>
              <input
                className={`${styles.inputs} ${styles.inputSurname} `}
                type="text"
                id="surname"
                name="surname"
                value={form.surname || ""}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Introduzca apellido"
                required
              />
              <label
                className={`${styles.label} ${styles.labelPhone}`}
                htmlFor="phone"
              >
                {errors.phone && (
                  <span
                    className={`${styles.labelError} animate__animated animate__flash`}
                  >
                    {errors.phone}
                  </span>
                )}
              </label>
              <input
                className={`${styles.inputs} ${styles.inputPhone}`}
                type="tel"
                id="phone"
                name="phone"
                value={form.phone || ""}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Introduzca teléfono celular"
                required
              />
              <label
                className={`${styles.label} ${styles.labelEmail}`}
                htmlFor="email"
              >
                {errors.email && (
                  <span
                    className={`${styles.labelError} animate__animated animate__flash`}
                  >
                    {errors.email}
                  </span>
                )}
              </label>
              <input
                className={`${styles.inputs} ${styles.inputEmail}`}
                type="email"
                id="email"
                name="email"
                value={form.email || ""}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Introduzca correo electrónico"
                required
              />
              <label
                className={`${styles.label} ${styles.labelAddres}`}
                htmlFor="addres"
              >
                {errors.addres && (
                  <span
                    className={`${styles.labelError} animate__animated animate__flash`}
                  >
                    {errors.addres}
                  </span>
                )}
              </label>
              <input
                className={`${styles.inputs} ${styles.inputAddres}`}
                type="text"
                id="addres"
                name="addres"
                value={form.addres || ""}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Introduzca dirección de entrega"
                required
              />
              <h6 className={`${styles.label} ${styles.labelPaymethod}`}>
                Medio de Pago
              </h6>
              <select
                className={`${styles.inputs} ${styles.inputPaymethod}`}
                name="paymethod"
                value={form.paymethod || ""}
                onChange={handleChange}
                disabled={
                  Object.entries(errors).length !== 0 ||
                  formIsEmpty(form) === true ||
                  cart.length === 0
                }
              >
                <option disabled value="">
                  ---
                </option>
                <option className={styles.optionCard}>Visa</option>
                <option className={styles.optionCard}>Mastercard</option>
              </select>
            </form>
          </div>

          <span className={styles.totalPrice}>Total: ${totalCartPrice}</span>

          {form.paymethod && (
            <>
              <Button
                variant="primary"
                onClick={handleShow}
                className={`${styles.modalShowBtn} animate__animated animate__heartBeat`}
                disabled={
                  Object.entries(errors).length !== 0 ||
                  formIsEmpty(form) === true ||
                  cart.length === 0
                }
              >
                Ingresar Numero de Tarjeta
              </Button>
              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                size="xl"
                onChange={handleShow}
                className={styles.modal}
              >
                <Modal.Header closeButton className={styles.modalHeader}>
                  <Modal.Title>Tarjeta {form.paymethod}</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modalBody}>
                  <p className={styles.cardNumberTitle}>
                    Número de Tarjeta
                    <span style={{ fontSize: "0.7rem", marginLeft: "10px" }}>
                      (*) 16 dígitos
                    </span>
                  </p>
                  <div className={styles.cardNumberContainer}>
                    <input
                      className={styles.cardNumber}
                      type="text"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="cardNumber"
                      value={Math.floor(form.cardNumber) || ""}
                      maxLength="16"
                    />
                  </div>
                  <div className={styles.securityNumberContainer}>
                    <p className={styles.securityNumberTitle}>
                      Código de Seguridad{" "}
                      <span style={{ fontSize: "0.7rem", marginLeft: "5px" }}>
                        (*) 3 dígitos
                      </span>
                    </p>
                    <input
                      className={styles.securityNumber}
                      type="text"
                      maxLength="3"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      name="securityNumber"
                      value={Math.floor(form.securityNumber) || ""}
                    />
                  </div>
                </Modal.Body>
                <Modal.Footer className={styles.modalFooter}>
                  <Button
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "#636464",
                      border: "none",
                    }}
                    onClick={handleClose}
                  >
                    Cancelar
                  </Button>
                  <Button
                    style={{
                      borderRadius: "20px",
                      backgroundColor: "rgb(41 114 39)",
                      border: "none",
                    }}
                    variant="primary"
                    onClick={handleSubmit}
                    disabled={
                      formatDataValidation.name(form.cardNumber) === true ||
                      form.cardNumber.length < 16 ||
                      formatDataValidation.name(form.securityNumber) === true ||
                      form.securityNumber.length < 3
                    }
                  >
                    Terminar Compra
                  </Button>
                </Modal.Footer>
                <div className={styles.buyContainer}></div>
              </Modal>
            </>
          )}
        </div>
      )}
    </>
  );
};
