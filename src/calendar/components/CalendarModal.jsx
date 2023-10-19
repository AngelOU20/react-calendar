import { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseModal = () => {
    console.log('cerrando modal');
    setIsOpen(false);
  };

  return (
    <Modal
      className="modal"
      overlayClassName="modal-fondo"
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      closeTimeoutMS={200}
    >
      <h1>Hola</h1>
      <hr />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, dolor
        aliquid. Fuga cupiditate ipsam aspernatur sed eos dolor.
      </p>
    </Modal>
  );
};
