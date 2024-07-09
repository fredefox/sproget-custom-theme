const main = () => {
  [...document.querySelectorAll("style")]
    .filter((e) => e.textContent.match(/(ploneCustom|base)/))
    .forEach((e) => e.remove());
  const $footer = document.getElementById("sproget-footer");
  const $elts = $footer.querySelectorAll(".footerBox");
  const $grid = document.createElement("div");
  $elts.forEach(($elt) => {
    $elt.remove();
    $grid.appendChild($elt);
  });
  $grid.classList.add("grid");
  $footer.prepend($grid);
  document.querySelector(".smallSearchButton").value = "Søg";
};

main();
