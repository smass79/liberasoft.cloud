// s***************** FUNCION PARA ABRIR MODAL DE PRECIOS EN CLOUD *************************
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("contratarModal");
  const planInput = document.getElementById("planInput");
  const closeBtn = document.querySelector(".modal-close");
  const contratarBtns = document.querySelectorAll(".contratar-btn");

  // abrir modal
  contratarBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const plan = btn.dataset.plan;
      planInput.value = plan;
      modal.classList.add("active");
    });
  });

  // cerrar modal
  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  // cerrar haciendo click afuera
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

  // enviar form
  document.getElementById("contratarForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario enviado (simulado)");
    modal.classList.remove("active");
  });
});

// s***************** FUNCION PARA ABRIR MODAL DE TEXTO EN WMS *************************
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("globalModal");
  const modalContent = document.getElementById("modalContent");
  const modalTitle = document.getElementById("modalTitle");
  const closeBtn = modal.querySelector(".modal-close");

  document.querySelectorAll(".btn-saber-mas").forEach((btn) => {
    btn.addEventListener("click", () => {
      const textDiv = btn.previousElementSibling;
      const fullText = textDiv.dataset.fulltext;

      const section = btn.closest("section");
      const subTitle =
        section.querySelector(".sub-title")?.innerText || "Más información";

      modalTitle.innerText = subTitle;
      modalContent.innerText = fullText;
      modal.classList.add("active");
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
  });
});

// s***************** FUNCION PARA VALIDAR FORMULARIO DE CONTACTO (WEB Y WMS) *************************
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  const label = document.getElementById("label");

  function toggleCheckbox() {
    checkbox.classList.toggle("checked");
  }

  checkbox.addEventListener("click", toggleCheckbox);
  label.addEventListener("click", toggleCheckbox);
});
