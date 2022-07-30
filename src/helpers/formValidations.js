
const email = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
const name = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const surname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const phone = /^[0-9-]{8,14}$/;
const cardNumber = /^[0-9]$/;
const securityNumber = /^[0-9]$/;

export const initialValues = {
  name: "",
  surname: "",
  phone: "",
  email: "",
  addres: "",
  paymethod: "",
  cardNumber: "",
  securityNumber: "",
};

export const formatDataValidation = {
  name: (data) => name.test(data),
  surname: (data) => surname.test(data),
  email: (data) => email.test(data),
  phone: (data) => phone.test(data),
  cardNumber: (data) => cardNumber.test(data),
  securityNumber: (data) => securityNumber.test(data),
}

export const formValidations = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "* Nombre requerido";
  } else if (!formatDataValidation.name(form.name)) {
    errors.name = "* El nombre no puede contener números";
  } else if (form.name.trim().length < 3) {
    errors.name = "* El nombre debe tener un mínimo de 3 caracteres";
  }

  if (!form.surname.trim()) {
    errors.surname = "* Apellido requerido";
  } else if (!formatDataValidation.surname(form.surname)) {
    errors.surname = "* El apellido no puede contener números";
  } else if (form.surname.trim().length < 3) {
    errors.surname = "* El apellido debe tener un mínimo de 3 caracteres";
  }

  if (!form.phone.trim()) {
    errors.phone = "* Teléfono celular requerido";
  } else if (!formatDataValidation.phone(form.phone)) {
    errors.phone = "* Formato: de 8 a 14 dígitos (con o sin guiones)";
  }

  if (!form.email.trim()) {
    errors.email = "* Correo electrónico requerido";
  } else if (!formatDataValidation.email(form.email)) {
    errors.email = "* Formato de correo electrónico no válido";
  }

  if (!form.addres) {
    errors.addres = "* Dirección de entrega requerida";
  }
  return errors;
};

export const formIsEmpty = (form) => {
  const array = [];
  for (let [key, value] of Object.entries(form)) {
    if (value === '') array.push(key)
  }
  if (array.filter(a => a !== 'paymethod' && a !== 'cardNumber' && a !== 'securityNumber').length > 0)
    return true
  else return false
}