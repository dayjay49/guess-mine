(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMsg = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n    <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", ":</span> ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMsg = function handleNewMsg(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  appendMsg(message, nickname);
};

exports.handleNewMsg = handleNewMsg;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TXNnIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQU1BLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLENBQWpCO0FBQ0EsSUFBTUMsT0FBTyxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FBaEI7O0FBRUEsSUFBTUUsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFPQyxRQUFQLEVBQW9CO0FBQ3BDLE1BQU1DLEVBQUUsR0FBR04sUUFBUSxDQUFDTyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUQsRUFBQUEsRUFBRSxDQUFDRSxTQUFILHdDQUN3QkgsUUFBUSxHQUFHLEtBQUgsR0FBVyxNQUQzQyxnQkFFRUEsUUFBUSxHQUFHQSxRQUFILEdBQWMsS0FGeEIsc0JBR1lELElBSFo7QUFLQUwsRUFBQUEsUUFBUSxDQUFDVSxXQUFULENBQXFCSCxFQUFyQjtBQUNELENBUkQ7O0FBVUEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFBQyxLQUFLLEVBQUk7QUFDN0JBLEVBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUNBLE1BQU1DLEtBQUssR0FBR1gsT0FBTyxDQUFDWSxhQUFSLENBQXNCLE9BQXRCLENBQWQ7QUFGNkIsTUFHckJDLEtBSHFCLEdBR1hGLEtBSFcsQ0FHckJFLEtBSHFCO0FBSTdCLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLE9BQS9CLEVBQXdDO0FBQUVpQixJQUFBQSxPQUFPLEVBQUVKO0FBQVgsR0FBeEM7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNELENBUEQ7O0FBU08sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBMkI7QUFBQSxNQUF4QkQsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZmQsUUFBZSxRQUFmQSxRQUFlO0FBQ3JERixFQUFBQSxTQUFTLENBQUNnQixPQUFELEVBQVVkLFFBQVYsQ0FBVDtBQUNELENBRk07Ozs7QUFJUCxJQUFJSCxPQUFKLEVBQWE7QUFDWEEsRUFBQUEsT0FBTyxDQUFDbUIsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNYLGFBQW5DO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRzXCI7XG5cbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xuXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcbiAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gIGxpLmlubmVySFRNTCA9IGBcbiAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7XG4gICAgbmlja25hbWUgPyBuaWNrbmFtZSA6IFwiWW91XCJcbiAgfTo8L3NwYW4+ICR7dGV4dH1cbiAgICBgO1xuICBtZXNzYWdlcy5hcHBlbmRDaGlsZChsaSk7XG59O1xuXG5jb25zdCBoYW5kbGVTZW5kTXNnID0gZXZlbnQgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcbiAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnNlbmRNc2csIHsgbWVzc2FnZTogdmFsdWUgfSk7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgYXBwZW5kTXNnKHZhbHVlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdNc2cgPSAoeyBtZXNzYWdlLCBuaWNrbmFtZSB9KSA9PiB7XG4gIGFwcGVuZE1zZyhtZXNzYWdlLCBuaWNrbmFtZSk7XG59O1xuXG5pZiAoc2VuZE1zZykge1xuICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU2VuZE1zZyk7XG59XG4iXX0=
},{"./sockets":7}],2:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjk2ZDIyYTQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xuaW1wb3J0IFwiLi9sb2dpblwiO1xuaW1wb3J0IFwiLi9jaGF0XCI7XG5pbXBvcnQgXCIuL3BhaW50XCI7XG4iXX0=
},{"./chat":1,"./login":3,"./paint":5,"./sockets":7}],3:[function(require,module,exports){
"use strict";

var _require = require("./sockets"),
    initSockets = _require.initSockets;

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  initSockets(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0U29ja2V0cyIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztlQUF3QkEsT0FBTyxDQUFDLFdBQUQsQztJQUF2QkMsVyxZQUFBQSxXOztBQUVSLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFBSCxRQUFRLEVBQUk7QUFDeEIsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUVULElBQUFBLFFBQVEsRUFBUkE7QUFBRixHQUF2QztBQUNBVCxFQUFBQSxXQUFXLENBQUNhLE1BQUQsQ0FBWDtBQUNELENBSkQ7O0FBTUEsSUFBSUosUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ3JCUixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWixVQUFqQjtBQUNELENBRkQsTUFFTztBQUNMTixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNILFFBQUQsQ0FBTDtBQUNEOztBQUVELElBQU1XLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQUMsQ0FBQyxFQUFJO0FBQzVCQSxFQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQSxNQUFNQyxLQUFLLEdBQUduQixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUY0QixNQUdwQnFCLEtBSG9CLEdBR1ZELEtBSFUsQ0FHcEJDLEtBSG9CO0FBSTVCRCxFQUFBQSxLQUFLLENBQUNDLEtBQU4sR0FBYyxFQUFkO0FBQ0FkLEVBQUFBLFlBQVksQ0FBQ2UsT0FBYixDQUFxQm5CLFFBQXJCLEVBQStCa0IsS0FBL0I7QUFDQXZCLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJYLFNBQWpCO0FBQ0FJLEVBQUFBLEtBQUssQ0FBQ1ksS0FBRCxDQUFMO0FBQ0QsQ0FSRDs7QUFVQSxJQUFJcEIsU0FBSixFQUFlO0FBQ2JBLEVBQUFBLFNBQVMsQ0FBQ3NCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgaW5pdFNvY2tldHMgfSA9IHJlcXVpcmUoXCIuL3NvY2tldHNcIik7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNMb2dpblwiKTtcblxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcblxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XG5cbmNvbnN0IGxvZ0luID0gbmlja25hbWUgPT4ge1xuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XG4gIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUsIHsgbmlja25hbWUgfSk7XG4gIGluaXRTb2NrZXRzKHNvY2tldCk7XG59O1xuXG5pZiAobmlja25hbWUgPT09IG51bGwpIHtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xufSBlbHNlIHtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKG5pY2tuYW1lKTtcbn1cblxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGUgPT4ge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3QgeyB2YWx1ZSB9ID0gaW5wdXQ7XG4gIGlucHV0LnZhbHVlID0gXCJcIjtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XG4gIGxvZ0luKHZhbHVlKTtcbn07XG5cbmlmIChsb2dpbkZvcm0pIHtcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XG59XG4iXX0=
},{"./sockets":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN4QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0QsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzdDWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixvQkFBNkIsa0JBQTdCLENBQWhCO0FBQ0QsQ0FGTTs7OztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsUUFBa0I7QUFBQSxNQUFmRCxRQUFlLFNBQWZBLFFBQWU7QUFDbERYLEVBQUFBLGdCQUFnQixXQUFJVyxRQUFKLGtCQUEyQixpQkFBM0IsQ0FBaEI7QUFDRCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xuICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XG4gIG5vdGlmaWNhdGlvbi5jbGFzc05hbWUgPSBcIm5vdGlmaWNhdGlvblwiO1xuICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7IG5pY2tuYW1lIH0pID0+IHtcbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBqb2luZWQhYCwgXCJyZ2IoMCwgMTIyLCAyNTUpXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZURpc2Nvbm5lY3RlZCA9ICh7IG5pY2tuYW1lIH0pID0+IHtcbiAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsIFwicmdiKDI1NSwgMTQ5LCAwXCIpO1xufTtcbiJdfQ==
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetCanvas = exports.showControls = exports.hideControls = exports.enableCanvas = exports.disableCanvas = exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var controls = document.getElementById("jsControls");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    ctx.strokeStyle = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor; // resets user's strokecolor to his own
};

function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
}

function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
}

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
}

function handleCM(event) {
  event.preventDefault();
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;

var disableCanvas = function disableCanvas() {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

exports.disableCanvas = disableCanvas;

var enableCanvas = function enableCanvas() {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

exports.enableCanvas = enableCanvas;

var hideControls = function hideControls() {
  return controls.style.opacity = 0;
};

exports.hideControls = hideControls;

var showControls = function showControls() {
  return controls.style.opacity = 1;
};

exports.showControls = showControls;

var resetCanvas = function resetCanvas() {
  return fill("#fff");
};

exports.resetCanvas = resetCanvas;

if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
  hideControls();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJjb250cm9scyIsIklOSVRJQUxfQ09MT1IiLCJDQU5WQVNfU0laRSIsIndpZHRoIiwiaGVpZ2h0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInBhaW50aW5nIiwiZmlsbGluZyIsInN0b3BQYWludGluZyIsInN0YXJ0UGFpbnRpbmciLCJiZWdpblBhdGgiLCJ4IiwieSIsIm1vdmVUbyIsInN0cm9rZVBhdGgiLCJjb2xvciIsImN1cnJlbnRDb2xvciIsImxpbmVUbyIsInN0cm9rZSIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJoYW5kbGVDb2xvckNsaWNrIiwidGFyZ2V0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoYW5kbGVNb2RlQ2xpY2siLCJpbm5lclRleHQiLCJmaWxsIiwiaGFuZGxlQ2FudmFzQ2xpY2siLCJoYW5kbGVDTSIsInByZXZlbnREZWZhdWx0IiwiQXJyYXkiLCJmcm9tIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJoYW5kbGVCZWdhblBhdGgiLCJoYW5kbGVTdHJva2VkUGF0aCIsImhhbmRsZUZpbGxlZCIsImRpc2FibGVDYW52YXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZW5hYmxlQ2FudmFzIiwiaGlkZUNvbnRyb2xzIiwib3BhY2l0eSIsInNob3dDb250cm9scyIsInJlc2V0Q2FudmFzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjtBQUNBLElBQU1DLEdBQUcsR0FBR0gsTUFB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b2NrZXRzXCI7XG5cbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDYW52YXNcIik7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XG5jb25zdCBtb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01vZGVcIik7XG5jb25zdCBjb250cm9scyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNDb250cm9sc1wiKTtcblxuY29uc3QgSU5JVElBTF9DT0xPUiA9IFwiIzJjMmMyY1wiO1xuY29uc3QgQ0FOVkFTX1NJWkUgPSA3MDA7XG5cbmNhbnZhcy53aWR0aCA9IENBTlZBU19TSVpFO1xuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFO1xuXG5jdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG5jdHguc3Ryb2tlU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xuY3R4LmZpbGxTdHlsZSA9IElOSVRJQUxfQ09MT1I7XG5jdHgubGluZVdpZHRoID0gMi41O1xuXG5sZXQgcGFpbnRpbmcgPSBmYWxzZTtcbmxldCBmaWxsaW5nID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHN0b3BQYWludGluZygpIHtcbiAgcGFpbnRpbmcgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc3RhcnRQYWludGluZygpIHtcbiAgcGFpbnRpbmcgPSB0cnVlO1xufVxuXG5jb25zdCBiZWdpblBhdGggPSAoeCwgeSkgPT4ge1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oeCwgeSk7XG59O1xuXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHksIGNvbG9yID0gbnVsbCkgPT4ge1xuICBsZXQgY3VycmVudENvbG9yID0gY3R4LnN0cm9rZVN0eWxlO1xuICBpZiAoY29sb3IgIT09IG51bGwpIHtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcbiAgfVxuICBjdHgubGluZVRvKHgsIHkpO1xuICBjdHguc3Ryb2tlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9IGN1cnJlbnRDb2xvcjsgLy8gcmVzZXRzIHVzZXIncyBzdHJva2Vjb2xvciB0byBoaXMgb3duXG59O1xuXG5mdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuICBjb25zdCB4ID0gZXZlbnQub2Zmc2V0WDtcbiAgY29uc3QgeSA9IGV2ZW50Lm9mZnNldFk7XG4gIGlmICghcGFpbnRpbmcpIHtcbiAgICBiZWdpblBhdGgoeCwgeSk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmJlZ2luUGF0aCwgeyB4LCB5IH0pO1xuICB9IGVsc2Uge1xuICAgIHN0cm9rZVBhdGgoeCwgeSk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnN0cm9rZVBhdGgsIHtcbiAgICAgIHgsXG4gICAgICB5LFxuICAgICAgY29sb3I6IGN0eC5zdHJva2VTdHlsZSxcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDb2xvckNsaWNrKGV2ZW50KSB7XG4gIGNvbnN0IGNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgY3R4LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTW9kZUNsaWNrKCkge1xuICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xuICAgIGZpbGxpbmcgPSBmYWxzZTtcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiRmlsbFwiO1xuICB9IGVsc2Uge1xuICAgIGZpbGxpbmcgPSB0cnVlO1xuICAgIG1vZGUuaW5uZXJUZXh0ID0gXCJQYWludFwiO1xuICB9XG59XG5cbmNvbnN0IGZpbGwgPSAoY29sb3IgPSBudWxsKSA9PiB7XG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguZmlsbFN0eWxlO1xuICBpZiAoY29sb3IgIT09IG51bGwpIHtcbiAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XG4gIH1cbiAgY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XG4gIGN0eC5maWxsU3R5bGUgPSBjdXJyZW50Q29sb3I7XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVDYW52YXNDbGljaygpIHtcbiAgaWYgKGZpbGxpbmcpIHtcbiAgICBmaWxsKCk7XG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLmZpbGwsIHsgY29sb3I6IGN0eC5maWxsU3R5bGUgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ00oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuQXJyYXkuZnJvbShjb2xvcnMpLmZvckVhY2goKGNvbG9yKSA9PlxuICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljaylcbik7XG5cbmlmIChtb2RlKSB7XG4gIG1vZGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU1vZGVDbGljayk7XG59XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVCZWdhblBhdGggPSAoeyB4LCB5IH0pID0+IGJlZ2luUGF0aCh4LCB5KTtcbmV4cG9ydCBjb25zdCBoYW5kbGVTdHJva2VkUGF0aCA9ICh7IHgsIHksIGNvbG9yIH0pID0+IHN0cm9rZVBhdGgoeCwgeSwgY29sb3IpO1xuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7IGNvbG9yIH0pID0+IGZpbGwoY29sb3IpO1xuXG5leHBvcnQgY29uc3QgZGlzYWJsZUNhbnZhcyA9ICgpID0+IHtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Nb3VzZU1vdmUpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcbiAgY2FudmFzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHN0b3BQYWludGluZyk7XG4gIGNhbnZhcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVDYW52YXMgPSAoKSA9PiB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgc3RhcnRQYWludGluZyk7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBzdG9wUGFpbnRpbmcpO1xuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcbiAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDYW52YXNDbGljayk7XG59O1xuXG5leHBvcnQgY29uc3QgaGlkZUNvbnRyb2xzID0gKCkgPT4gKGNvbnRyb2xzLnN0eWxlLm9wYWNpdHkgPSAwKTtcblxuZXhwb3J0IGNvbnN0IHNob3dDb250cm9scyA9ICgpID0+IChjb250cm9scy5zdHlsZS5vcGFjaXR5ID0gMSk7XG5cbmV4cG9ydCBjb25zdCByZXNldENhbnZhcyA9ICgpID0+IGZpbGwoXCIjZmZmXCIpO1xuXG5pZiAoY2FudmFzKSB7XG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgaGFuZGxlQ00pO1xuICBoaWRlQ29udHJvbHMoKTtcbn1cbiJdfQ==
},{"./sockets":7}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleGameEnded = exports.handlePainterNotif = exports.handleGameStarted = exports.handlePlayerUpdate = void 0;

var _paint = require("./paint");

var board = document.getElementById("jsPBoard");
var notifs = document.getElementById("jsNotifs");

var addPlayers = function addPlayers(players) {
  board.innerHTML = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, ": ").concat(player.points);
    board.appendChild(playerElement);
  });
};

var setNotifs = function setNotifs(text) {
  notifs.innerText = "";
  notifs.innerText = text;
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;

var handleGameStarted = function handleGameStarted() {
  setNotifs(""); // disable canvas events

  (0, _paint.disableCanvas)(); // hide canvas controls

  (0, _paint.hideControls)();
};

exports.handleGameStarted = handleGameStarted;

var handlePainterNotif = function handlePainterNotif(_ref2) {
  var word = _ref2.word;
  (0, _paint.enableCanvas)();
  (0, _paint.showControls)();
  notifs.innerText = "You are the leader, paint: ".concat(word);
};

exports.handlePainterNotif = handlePainterNotif;

var handleGameEnded = function handleGameEnded() {
  setNotifs("Game Ended.");
  (0, _paint.disableCanvas)();
  (0, _paint.hideControls)();
  (0, _paint.resetCanvas)();
};

exports.handleGameEnded = handleGameEnded;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXllcnMuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibm90aWZzIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lckhUTUwiLCJmb3JFYWNoIiwicGxheWVyIiwicGxheWVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJuaWNrbmFtZSIsInBvaW50cyIsImFwcGVuZENoaWxkIiwic2V0Tm90aWZzIiwidGV4dCIsImhhbmRsZVBsYXllclVwZGF0ZSIsInNvY2tldHMiLCJoYW5kbGVHYW1lU3RhcnRlZCIsImhhbmRsZVBhaW50ZXJOb3RpZiIsIndvcmQiLCJoYW5kbGVHYW1lRW5kZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFRQSxJQUFNQSxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFkO0FBQ0EsSUFBTUMsTUFBTSxHQUFHRixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZjs7QUFFQSxJQUFNRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxPQUFELEVBQWE7QUFDOUJMLEVBQUFBLEtBQUssQ0FBQ00sU0FBTixHQUFrQixFQUFsQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsVUFBQ0MsTUFBRCxFQUFZO0FBQzFCLFFBQU1DLGFBQWEsR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLE1BQXZCLENBQXRCO0FBQ0FELElBQUFBLGFBQWEsQ0FBQ0UsU0FBZCxhQUE2QkgsTUFBTSxDQUFDSSxRQUFwQyxlQUFpREosTUFBTSxDQUFDSyxNQUF4RDtBQUNBYixJQUFBQSxLQUFLLENBQUNjLFdBQU4sQ0FBa0JMLGFBQWxCO0FBQ0QsR0FKRDtBQUtELENBUEQ7O0FBU0EsSUFBTU0sU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsSUFBRCxFQUFVO0FBQzFCYixFQUFBQSxNQUFNLENBQUNRLFNBQVAsR0FBbUIsRUFBbkI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDUSxTQUFQLEdBQW1CSyxJQUFuQjtBQUNELENBSEQ7O0FBS08sSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUdDLE9BQUgsUUFBR0EsT0FBSDtBQUFBLFNBQWlCZCxVQUFVLENBQUNjLE9BQUQsQ0FBM0I7QUFBQSxDQUEzQjs7OztBQUNBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUNyQ0osRUFBQUEsU0FBUyxDQUFDLEVBQUQsQ0FBVCxDQURxQyxDQUVyQzs7QUFDQSw4QkFIcUMsQ0FJckM7O0FBQ0E7QUFDRCxDQU5NOzs7O0FBT0EsSUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixRQUFjO0FBQUEsTUFBWEMsSUFBVyxTQUFYQSxJQUFXO0FBQzlDO0FBQ0E7QUFDQWxCLEVBQUFBLE1BQU0sQ0FBQ1EsU0FBUCx3Q0FBaURVLElBQWpEO0FBQ0QsQ0FKTTs7OztBQUtBLElBQU1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUNuQ1AsRUFBQUEsU0FBUyxDQUFDLGFBQUQsQ0FBVDtBQUNBO0FBQ0E7QUFDQTtBQUNELENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBkaXNhYmxlQ2FudmFzLFxuICBoaWRlQ29udHJvbHMsXG4gIGVuYWJsZUNhbnZhcyxcbiAgc2hvd0NvbnRyb2xzLFxuICByZXNldENhbnZhcyxcbn0gZnJvbSBcIi4vcGFpbnRcIjtcblxuY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUEJvYXJkXCIpO1xuY29uc3Qgbm90aWZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmc1wiKTtcblxuY29uc3QgYWRkUGxheWVycyA9IChwbGF5ZXJzKSA9PiB7XG4gIGJvYXJkLmlubmVySFRNTCA9IFwiXCI7XG4gIHBsYXllcnMuZm9yRWFjaCgocGxheWVyKSA9PiB7XG4gICAgY29uc3QgcGxheWVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHBsYXllckVsZW1lbnQuaW5uZXJUZXh0ID0gYCR7cGxheWVyLm5pY2tuYW1lfTogJHtwbGF5ZXIucG9pbnRzfWA7XG4gICAgYm9hcmQuYXBwZW5kQ2hpbGQocGxheWVyRWxlbWVudCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0Tm90aWZzID0gKHRleHQpID0+IHtcbiAgbm90aWZzLmlubmVyVGV4dCA9IFwiXCI7XG4gIG5vdGlmcy5pbm5lclRleHQgPSB0ZXh0O1xufTtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZVBsYXllclVwZGF0ZSA9ICh7IHNvY2tldHMgfSkgPT4gYWRkUGxheWVycyhzb2NrZXRzKTtcbmV4cG9ydCBjb25zdCBoYW5kbGVHYW1lU3RhcnRlZCA9ICgpID0+IHtcbiAgc2V0Tm90aWZzKFwiXCIpO1xuICAvLyBkaXNhYmxlIGNhbnZhcyBldmVudHNcbiAgZGlzYWJsZUNhbnZhcygpO1xuICAvLyBoaWRlIGNhbnZhcyBjb250cm9sc1xuICBoaWRlQ29udHJvbHMoKTtcbn07XG5leHBvcnQgY29uc3QgaGFuZGxlUGFpbnRlck5vdGlmID0gKHsgd29yZCB9KSA9PiB7XG4gIGVuYWJsZUNhbnZhcygpO1xuICBzaG93Q29udHJvbHMoKTtcbiAgbm90aWZzLmlubmVyVGV4dCA9IGBZb3UgYXJlIHRoZSBsZWFkZXIsIHBhaW50OiAke3dvcmR9YDtcbn07XG5leHBvcnQgY29uc3QgaGFuZGxlR2FtZUVuZGVkID0gKCkgPT4ge1xuICBzZXROb3RpZnMoXCJHYW1lIEVuZGVkLlwiKTtcbiAgZGlzYWJsZUNhbnZhcygpO1xuICBoaWRlQ29udHJvbHMoKTtcbiAgcmVzZXRDYW52YXMoKTtcbn07XG4iXX0=
},{"./paint":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _notifications = require("./notifications");

var _chat = require("./chat");

var _paint = require("./paint");

var _players = require("./players");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMsg);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
  socket.on(events.playerUpdate, _players.handlePlayerUpdate);
  socket.on(events.gameStarted, _players.handleGameStarted);
  socket.on(events.painterNotif, _players.handlePainterNotif);
  socket.on(events.gameEnded, _players.handleGameEnded);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01zZyIsImJlZ2FuUGF0aCIsImhhbmRsZUJlZ2FuUGF0aCIsInN0cm9rZWRQYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJmaWxsZWQiLCJoYW5kbGVGaWxsZWQiLCJwbGF5ZXJVcGRhdGUiLCJoYW5kbGVQbGF5ZXJVcGRhdGUiLCJnYW1lU3RhcnRlZCIsImhhbmRsZUdhbWVTdGFydGVkIiwicGFpbnRlck5vdGlmIiwiaGFuZGxlUGFpbnRlck5vdGlmIiwiZ2FtZUVuZGVkIiwiaGFuZGxlR2FtZUVuZGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBT0EsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFBQSxnQkFDbkJDLE1BRG1CO0FBQUEsTUFDOUJDLE1BRDhCLFdBQzlCQSxNQUQ4QjtBQUV0Q0wsRUFBQUEsTUFBTSxHQUFHRyxPQUFUO0FBQ0FILEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNFLE9BQWpCLEVBQTBCQyw0QkFBMUI7QUFDQVIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0ksWUFBakIsRUFBK0JDLGlDQUEvQjtBQUNBVixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDTSxNQUFqQixFQUF5QkMsa0JBQXpCO0FBQ0FaLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNRLFNBQWpCLEVBQTRCQyxzQkFBNUI7QUFDQWQsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1UsV0FBakIsRUFBOEJDLHdCQUE5QjtBQUNBaEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1ksTUFBakIsRUFBeUJDLG1CQUF6QjtBQUNBbEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2MsWUFBakIsRUFBK0JDLDJCQUEvQjtBQUNBcEIsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ2dCLFdBQWpCLEVBQThCQywwQkFBOUI7QUFDQXRCLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNrQixZQUFqQixFQUErQkMsMkJBQS9CO0FBQ0F4QixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDb0IsU0FBakIsRUFBNEJDLHdCQUE1QjtBQUNELENBYk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyLCBoYW5kbGVEaXNjb25uZWN0ZWQgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XG5pbXBvcnQgeyBoYW5kbGVOZXdNc2cgfSBmcm9tIFwiLi9jaGF0XCI7XG5pbXBvcnQgeyBoYW5kbGVCZWdhblBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoLCBoYW5kbGVGaWxsZWQgfSBmcm9tIFwiLi9wYWludFwiO1xuaW1wb3J0IHtcbiAgaGFuZGxlUGxheWVyVXBkYXRlLFxuICBoYW5kbGVHYW1lU3RhcnRlZCxcbiAgaGFuZGxlUGFpbnRlck5vdGlmLFxuICBoYW5kbGVHYW1lRW5kZWQsXG59IGZyb20gXCIuL3BsYXllcnNcIjtcblxubGV0IHNvY2tldCA9IG51bGw7XG5cbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XG5cbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XG4gIHNvY2tldCA9IGFTb2NrZXQ7XG4gIHNvY2tldC5vbihldmVudHMubmV3VXNlciwgaGFuZGxlTmV3VXNlcik7XG4gIHNvY2tldC5vbihldmVudHMuZGlzY29ubmVjdGVkLCBoYW5kbGVEaXNjb25uZWN0ZWQpO1xuICBzb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TXNnKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5iZWdhblBhdGgsIGhhbmRsZUJlZ2FuUGF0aCk7XG4gIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcbiAgc29ja2V0Lm9uKGV2ZW50cy5maWxsZWQsIGhhbmRsZUZpbGxlZCk7XG4gIHNvY2tldC5vbihldmVudHMucGxheWVyVXBkYXRlLCBoYW5kbGVQbGF5ZXJVcGRhdGUpO1xuICBzb2NrZXQub24oZXZlbnRzLmdhbWVTdGFydGVkLCBoYW5kbGVHYW1lU3RhcnRlZCk7XG4gIHNvY2tldC5vbihldmVudHMucGFpbnRlck5vdGlmLCBoYW5kbGVQYWludGVyTm90aWYpO1xuICBzb2NrZXQub24oZXZlbnRzLmdhbWVFbmRlZCwgaGFuZGxlR2FtZUVuZGVkKTtcbn07XG4iXX0=
},{"./chat":1,"./notifications":4,"./paint":5,"./players":6}]},{},[2])