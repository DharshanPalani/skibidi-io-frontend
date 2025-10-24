import "./css/style.css";
import router from "./router";
import { returnApp } from "./hooks/returnApp";
const main = () => {
  router(returnApp(), "/");
  return 0;
};

main();
