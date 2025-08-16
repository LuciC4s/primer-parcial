document.addEventListener("DOMContentLoaded", () => {
const welcomeButton = document.getElementsByClassName("welcomeClass")[0];
    const changeBackgroundButton = document.getElementById("changeBackgroundButton");

welcomeButton.addEventListener("click", () => {
        alert("¡Bienvenido al perfil de usuario!");
    });

// Guardar y cargar el estado del color de fondo
    const savedBackgroundColor = localStorage.getItem("backgroundColor");
    if (savedBackgroundColor) {
        document.body.style.backgroundColor = savedBackgroundColor;
    }

    changeBackgroundButton.addEventListener("click", () => {
        //const newColor = document.body.style.backgroundColor === "rgb(224, 224, 224)" ? "#C0CCD9" : "#2B5A8B";
		var newColor = "rgb(224, 224, 224)";
		console.log(document.body.style.backgroundColor);
		if(document.body.style.backgroundColor == "rgb(224, 224, 224)") {
			newColor = "#4498f2";
		}else{
			newColor = "rgb(224, 224, 224)"
		}
		console.log(newColor);
        document.body.style.backgroundColor = newColor;
        localStorage.setItem("backgroundColor", newColor);
    });

    const Image = document.getElementById("foto");
    Image.addEventListener("mouseover", () => {
        Image.style.transform = "scale(1.2)";
    });

    Image.addEventListener("mouseout", () => {
        Image.style.transform = "scale(1)";
    });
});
