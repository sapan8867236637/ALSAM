function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute("data-" + lang);
  });
}

/* ✅ AUTO-LOAD ENGLISH ON PAGE LOAD */
document.addEventListener("DOMContentLoaded", function () {
  setLang("en");
});
