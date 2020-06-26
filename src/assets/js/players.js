import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
} from "./paint";
import { enableChat, disableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");
const countdown = document.getElementById("jsCountDown");
let timeLeft = null;
let timerRef = null;

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

const setNotifs = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

const showCountDown = () => {
  timeLeft = 30;
  timerRef = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerRef);
      countdown.innerText = "Time ran out! Restarting game soon..";
    } else {
      countdown.innerText = timeLeft + " seconds remaining";
    }
    timeLeft -= 1;
  }, 1000);
};

const stopCountDown = () => {
  clearInterval(timerRef);
  countdown.innerText = "";
};

export const handlePlayerUpdate = ({ sockets }) => addPlayers(sockets);
export const handleGameStarted = () => {
  setNotifs("");
  // disable canvas events
  disableCanvas();
  // hide canvas controls
  hideControls();
  enableChat();
  showCountDown();
};
export const handlePainterNotif = ({ word }) => {
  enableCanvas();
  showControls();
  disableChat();
  notifs.innerText = `You are the painter!  Paint the word: ${word}`;
};
export const handleGameEnded = () => {
  setNotifs("Game Ended.");
  disableCanvas();
  hideControls();
  resetCanvas();
  stopCountDown();
};
export const handleGameStarting = () => {
  setNotifs("Game will start soon ....");
};
