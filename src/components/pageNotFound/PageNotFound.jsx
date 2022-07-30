import styles from "../pageNotFound/pageNotFound.module.scss";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const PageNotFound = ({ cart }) => {
  const navigate = useNavigate();
  if (cart === 0) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Oops... El carrito debe tener al menos un producto",
      text: "Será redirigido a la página principal",
      showConfirmButton: false,
      timer: 2000,
    }).then(() => navigate("/"));
  } else {
    setTimeout(() => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops...",
        text: "Ha ocurrido un error. Será redirigido a la página principal",
        showConfirmButton: false,
        timer: 2000,
      }).then(() => navigate("/"));
    }, 1000);
  }
  return <div className={styles.mainScreen}></div>;
};
