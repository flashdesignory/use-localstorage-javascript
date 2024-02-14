import { AppFooter } from "../app-footer";
import { AppHeader } from "../app-header";

import "./app-layout.css";

export function AppLayout() {
    const layout = document.createElement("div");
    layout.classList.add("app-layout");

    layout.appendChild(AppHeader());
    const main = document.createElement("main");
    main.classList.add("app-main");
    layout.appendChild(main);
    layout.appendChild(AppFooter());

    return ({ layout, main })
}
