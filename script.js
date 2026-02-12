const smileBtn = document.getElementById("smileBtn");
const face = document.querySelector(".face");

if (smileBtn && face) {
  smileBtn.addEventListener("click", () => {
    face.classList.toggle("smile");
  });
}
