let css = document.createElement("link");
css.rel = "stylesheet";
css.href = chrome.runtime.getURL("/Plugins/hide-pfp/hide-pfp.css");
css.classList.add("profile-picture", "schooltape");
document.head.appendChild(css);