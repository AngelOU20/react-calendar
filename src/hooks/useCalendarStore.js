import { useDispatch, useSelector } from 'react-redux';
import {
  onAddNewEvent,
  onClearEventActive,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store/calendar/calendarSlice';
import calendarApi from '../api/calendarApi';
import { convertEventsToDateEvents } from '../helpers';

export const useCalendarStore = () => {
  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector((state) => state.calendar);
  const { user } = useSelector((state) => state.auth);

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent));
  };

  const startSavingEvent = async (calendarEvent) => {
    // TODO: Update event
    if (calendarEvent._id) {
      // Actualizado
      dispatch(onUpdateEvent({ ...calendarEvent }));
    } else {
      // Creando un nuevo evento
      const { data } = await calendarApi.post('/events', calendarEvent); // Llegar al backend

      dispatch(onAddNewEvent({ ...calendarEvent, id: data.event.id, user }));
    }
  };

  const clearEventActive = () => {
    dispatch(onClearEventActive());
  };

  const startDeletingEvent = () => {
    // TODO: LLegar al backend
    dispatch(onDeleteEvent());
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');
      const events = convertEventsToDateEvents(data.events);
      console.log({ events });
    } catch (error) {
      console.log('Error cargando eventos');
      console.log(error);
    }
  };

  return {
    // Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent?._id,

    // Métodos
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
    clearEventActive,
    startLoadingEvents,
  };
};
