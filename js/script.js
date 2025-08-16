document.addEventListener("DOMContentLoaded", () => {
  const welcomeButton = document.getElementById("welcomeButton"); // <— id correcto
  const changeBackgroundButton = document.getElementById("changeBackgroundButton");

  welcomeButton.addEventListener("click", () => {
    alert("¡Bienvenido al perfil de usuario!");
  });

  // Mantener color guardado
  const savedBackgroundColor = localStorage.getItem("backgroundColor");
  if (savedBackgroundColor) {
    document.body.style.backgroundColor = savedBackgroundColor;
  }

  changeBackgroundButton.addEventListener("click", () => {
    const current = getComputedStyle(document.body).backgroundColor;
    const next = current === "rgb(224, 224, 224)" ? "#c7f8c2ff" : "rgb(224, 224, 224)";
    document.body.style.backgroundColor = next;
    localStorage.setItem("backgroundColor", next);
  });

  const profileImage = document.getElementById("foto");
  profileImage.style.transition = "transform .2s ease";
  profileImage.addEventListener("mouseover", () => {
    profileImage.style.transform = "scale(1.2)";
  });
  profileImage.addEventListener("mouseout", () => {
    profileImage.style.transform = "scale(1)";
  });

  
});
