import { useState } from 'react';
import { addHours } from 'date-fns';

import Modal from 'react-modal';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

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
  const [formValue, setFormValues] = useState({
    title: '',
    notes: '',
    start: new Date(),
    end: addHours(new Date(), 2),
  });

  const onInputChange = ({ target }) => {
    setFormValues({
      ...formValue,
      [target.name]: target.value,
    });
  };

  const onDateChanged = (event, changing) => {
    setFormValues({
      ...formValue,
      [changing]: event,
    });
  };

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
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label className="d-block">Fecha y hora inicio</label>
          <DatePicker
            className="form-control"
            selected={formValue.start}
            onChange={(event) => onDateChanged(event, 'start')}
            dateFormat="Pp"
          />
        </div>

        <div className="form-group mb-2">
          <label className="d-block">Fecha y hora fin</label>
          <DatePicker
            minDate={formValue.start}
            className="form-control"
            selected={formValue.end}
            onChange={(event) => onDateChanged(event, 'end')}
            dateFormat="Pp"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValue.title}
            onChange={onInputChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValue.notes}
            onChange={onInputChange}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
