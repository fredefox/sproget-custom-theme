const main = () => {
  [...document.querySelectorAll("style")]
    .filter((e) => e.textContent.match(/plone/))
    .forEach((e) => e.remove());
};

document.addEventListener("DOMContentLoaded", main);
