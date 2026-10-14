(function () {
  var r = document.documentElement, k = "theme";
  try { var t = localStorage.getItem(k); if (t) r.setAttribute("data-theme", t); } catch (e) {}
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-toggle-theme]"); if (!b) return;
    var n = r.getAttribute("data-theme") === "dark" ? "light" : "dark";
    r.setAttribute("data-theme", n);
    b.setAttribute("aria-pressed", n === "dark");
    try { localStorage.setItem(k, n); } catch (e) {}
  });
})();
