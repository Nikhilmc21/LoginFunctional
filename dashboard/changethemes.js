let root = document.querySelector(':root');
let body = document.querySelector("body");
let darkIcon = document.getElementById("darkToggle");
let lightIcon = document.getElementById("lightToggle");
let theme = "dark";

const themes = {
  dark: {
    "--bg-primary": "#23232e",
    "--bg-secondary": "#141418",
    "--text-primary": "lightgray",
    "--text-secondary": "white",
    "--bg-color": "#11151C",
    "--text-color": "white",
    "--svg-primary": "#ff7eee",
    "--svg-secondary": "#df49a6"
  },
  light: {
    "--bg-primary": "#B9FFFC",
    "--bg-secondary": "#D2E9E9",
    "--text-primary": "gray",
    "--text-secondary": "black",
    "--bg-color": "white",
    "--text-color": "black",
    "--svg-primary": "#7579E7",
    "--svg-secondary": "#9AB3F5"
  }
};

applyTheme(themes.dark);

function changeTheme() {
  if (theme === "dark") {
    applyTheme(themes.light);
    darkIcon.style.display = "block";
    lightIcon.style.display = "none";
    theme = "light";
    body.style.setProperty("transition", "background 500ms ease-in-out, color 1s ease");
  } else {
    applyTheme(themes.dark);
    darkIcon.style.display = "none";
    lightIcon.style.display = "block";
    theme = "dark";
    body.style.setProperty("transition", "background 500ms ease-in-out, color 1s ease");
  }
}

function applyTheme(selectedTheme) {
  for (const property in selectedTheme) {
    root.style.setProperty(property, selectedTheme[property]);
  }
}
