import "./app-footer.css";

export function AppFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("app-footer");

    const row = document.createElement("div");
    row.classList.add("app-footer-row");

    const column = document.createElement("div");
    column.classList.add("app-footer-column-center");

    const copyright = document.createElement("div");
    copyright.classList.add("app-footer-copyright");
    copyright.textContent = `© ${new Date().getFullYear()} All Rights Reserved!`;

    column.appendChild(copyright);
    row.appendChild(column);
    footer.appendChild(row);
    return footer;
}
