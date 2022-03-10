import {Modal} from 'react-bootstrap';
import { useState } from "react";

function MealModal(props) {
    console.log(props.open)
    const [isOpen, setIsOpen] = useState(false);
    setIsOpen(props.open)
  const [title, setTitle] = useState("Transitioning...");

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  return (
    <>
      <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>The body</Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
  export default MealModal;