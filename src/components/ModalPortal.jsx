import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import Modal from "../UI/Modal";

export default function ModalPortal({ children }) {

  return ReactDOM.createPortal(
    <Modal>
      {children}
    </Modal>,
    document.getElementById("portal")
  )
}

ModalPortal.propTypes = {
  children: PropTypes.node
}