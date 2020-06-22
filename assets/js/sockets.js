import { handleNewUser, handleDisconnected } from "./notifications";

let socket = null;

export const getSocket = () => socket;

export const updateSocket = aSocket => (socket = aSocket);

export const initSockets = aSocket => {
  updateSocket(aSocket);
  const { events } = window;
  aSocket.on(events.newUser, handleNewUser);
  aSocket.on(events.disconnected, handleDisconnected);
};
