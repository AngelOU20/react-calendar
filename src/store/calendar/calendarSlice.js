import { createSlice } from '@reduxjs/toolkit';
// import { addHours } from 'date-fns';

// const tempEvent = {
//   id: new Date().getTime(),
//   title: 'Cumpleaños del Jefe',
//   note: 'Hay que comprar el pastel',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   bgColor: '#fafafa',
//   user: {
//     id: '123',
//     name: 'Julio',
//   },
// };

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [
      // tempEvent
    ],
    activeEvent: null,
  },
  reducers: {
    onSetActiveEvent: (state, action) => {
      state.activeEvent = action.payload;
    },
    onAddNewEvent: (state, action) => {
      state.events.push(action.payload);
      state.activeEvent = null;
    },
    onUpdateEvent: (state, action) => {
      state.events = state.events.map((event) => {
        if (event.id === action.payload.id) {
          return action.payload;
        }
        return event;
      });
    },
    onDeleteEvent: (state) => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          (event) => event.id !== state.activeEvent.id
        );
        state.activeEvent = null;
      }
    },
    onClearEventActive: (state) => {
      state.activeEvent = null;
    },
    onLoadEvent: (state, { payload = [] }) => {
      state.isLoadingEvents = false;
      // state.events = payload;
      payload.forEach((event) => {
        const eventExist = state.events.some(
          (dbEvent) => dbEvent.id === event.id
        );
        if (!eventExist) {
          state.events.push(event);
        }
      });
    },
    onLogoutCalendar: (state) => {
      state.isLoadingEvents = true;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onSetActiveEvent,
  onAddNewEvent,
  onUpdateEvent,
  onDeleteEvent,
  onClearEventActive,
  onLoadEvent,
  onLogoutCalendar,
} = calendarSlice.actions;
