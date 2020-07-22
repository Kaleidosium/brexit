const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const text = urlParams.get("text") === null ? "blank" : urlParams.get("text");

window.onload = function () {
  const span = document.querySelector("span");
  const matches = document.querySelectorAll("x-word");

  for (const index in matches) {
    if (matches[index].textContent === "blank") {
      matches[index].textContent = text;
      if (span) {
        span.textContent = text
          .replace(/\s/g, "-")
          .normalize("NFKD")
          .replace(/[\u0300-\u036F]/g, "");
      }
    }
  }
};
