import "./style.css";
import { io } from "socket.io-client";
import router from "./router";

function returnApp() : HTMLDivElement {
  const el = document.querySelector<HTMLDivElement>("#app");
  if (!el) throw new Error("App container not found");
  return el;
}

const main = () => {

  const socket = io("http://localhost:3000/");

  socket.on("connect", () => {
    console.log("Connected, this is the socket id: " + socket.id);
  });

  socket.on("disconnect", () => {
    console.log("Disconnected");
  });

  const route = window.location.pathname;
  
  router(returnApp(), route);

  return 0;
}


main();
