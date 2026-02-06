function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute("data-" + lang);
  });
}

function chooseLang(lang) {
  localStorage.setItem("siteLang", lang);
  setLang(lang);
  document.getElementById("langPopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("siteLang");
  if (savedLang) {
    setLang(savedLang);
  } else {
    document.getElementById("langPopup").style.display = "flex";
  }
});

