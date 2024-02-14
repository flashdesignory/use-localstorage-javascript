import "./styles/variables.css";
import "./styles/global.css";
import "./styles/button.css";

import { AppLayout } from "./partials/app-layout";
import { useLocalStorage } from "./hooks/useLocalStorage";

const { getItem, setItem } = useLocalStorage({ key: "playground", initialValue: "basket" });

const app = document.createElement("div");
app.classList.add("app");
document.body.appendChild(app);

const { layout, main } = AppLayout();
app.appendChild(layout);

// build page
const content = document.createElement("div");
content.classList.add("page-content", "flex-center");

const row = document.createElement("div");
row.classList.add("page-row");

const column = document.createElement("div");
column.classList.add("page-column");

const getButton = document.createElement("button");
getButton.classList.add("button", "secondary-button", "dark");
getButton.style.width = "200px";
getButton.textContent = "get";
getButton.addEventListener("click", function() { console.log(getItem()) });
column.appendChild(getButton);

const setButton = document.createElement("button");
setButton.classList.add("button", "secondary-button", "dark");
setButton.style.width = "200px";
setButton.textContent = "set";
setButton.addEventListener("click", function() { setItem("ball") });
column.appendChild(setButton);

row.appendChild(column);
content.appendChild(row);
main.appendChild(content);

