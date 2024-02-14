import "./page-title.css";

export function PageTitle(value: string) {
    const title = document.createElement("div");
    title.textContent = value;
    title.classList.add("page-title");
    return title;
}
