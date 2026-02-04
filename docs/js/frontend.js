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

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  });

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
// document.addEventListener("DOMContentLoaded", () => {
//   const checkbox = document.getElementById("checkbox");
//   const label = document.getElementById("label");

//   function toggleCheckbox() {
//     checkbox.classList.toggle("checked");
//   }

//   checkbox.addEventListener("click", toggleCheckbox);
//   label.addEventListener("click", toggleCheckbox);
// });

// s***************** FUNCION PARA ENVIAR DATOS EN FORMULARIO DE CONTACTO (WEB Y WMS) *************************
document.addEventListener("DOMContentLoaded", () => {
  const checkbox = document.getElementById("checkbox");
  const label = document.getElementById("label");
  const form = document.getElementById("contact-form");

  function toggleCheckbox() {
    checkbox.classList.toggle("checked");
  }

  checkbox.addEventListener("click", toggleCheckbox);
  label.addEventListener("click", toggleCheckbox);

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (!checkbox.classList.contains("checked")) {
      alert("Confirmá que no sos un robot.");
      return;
    }

    const formData = new FormData(form);

    fetch("https://api.dev.liberasoft.cloud/mail/SEND_contact", {
      method: "POST",
      body: formData,
    })
      .then((r) => r.json())
      .then((data) => {
        // console.log("Respuesta:", data);
        alert("Mensaje enviado");
        form.reset();
        checkbox.classList.remove("checked");
      })
      .catch((e) => {
        // console.error(e);
        alert("Error al enviar");
      });
  });
});
