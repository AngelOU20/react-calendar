import { useSelector } from 'react-redux';

export const useCalendarStore = () => {
  const { events, activeState } = useSelector((state) => state.calendar);

  return {
    events,
    activeState,
  };
};
