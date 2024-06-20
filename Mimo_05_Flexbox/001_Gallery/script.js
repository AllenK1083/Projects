const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const showModal = (thumbnail) => {
  modal.style.display = "block";
  modalContent.src = thumbnail.src;
};

const hideModal = () => {
  modal.style.display = "none";
};
