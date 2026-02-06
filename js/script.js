function setLang(lang) {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.innerText = el.getAttribute("data-" + lang);
  });

  document.querySelectorAll(".lang-btn button").forEach(btn => {
    btn.classList.remove("active");
  });

  const activeBtn = document.querySelector(
    `.lang-btn button[onclick="chooseLang('${lang}')"]`
  );
  if (activeBtn) activeBtn.classList.add("active");
}

function chooseLang(lang) {
  localStorage.setItem("siteLang", lang);
  setLang(lang);
  const popup = document.getElementById("langPopup");
  if (popup) popup.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const savedLang = localStorage.getItem("siteLang");
  if (savedLang) {
    setLang(savedLang);
  } else {
    document.getElementById("langPopup").style.display = "flex";
  }
});
