import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onClearEventActive,
  onDeleteEvent,
  onLoadEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store/calendar/calendarSlice';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers';
import Swal from 'sweetalert2';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: Update event
    try {
      if (calendarEvent.id) {
        // Actualizando un evento existente
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent); // Llegar al backend

        dispatch(onUpdateEvent({ ...calendarEvent, user }));

        return;
      }

      // Creando un nuevo evento
      const { data } = await calendarApi.post('/events', calendarEvent); // Llegar al backend
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    } catch (error) {
      console.log(error);
      Swal.fire('Error al guardar', error.response.data?.msg, 'error');
    }
  };

  const clearEventActive = () => {
    dispatch(onClearEventActive());
  };

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`); // LLegar al backend

      dispatch(onDeleteEvent());
    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar', error.response.data?.msg, 'error');
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents(data.events);

      dispatch(onLoadEvent(events));
    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error);
    }
  };

  return {
    // Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent?.id,

    // Métodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    clearEventActive,
    startLoadingEvents,
  };
};
