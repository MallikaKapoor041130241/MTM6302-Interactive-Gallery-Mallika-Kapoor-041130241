// Data for the gallery images
const galleryData = [
    {
      src: "C:\Users\HP\Downloads\MPP Midterm\IMAGE.GRAFFITI.jpg",
      title: "Graffiti Alley",
      description: "A vibrant stretch of street art and murals in Toronto's downtown core.",
    },
    {
      src: "C:\Users\HP\Downloads\MPP Midterm\IMAGE.ART GALLERY.jpg",
      title: "Art Gallery of Ontario",
      description: "Explore iconic artwork at the renowned Art Gallery of Ontario.",
    },
    {
      src: "images/sculpture.jpg",
      title: "Toronto Sculpture Garden",
      description: "A unique spot featuring innovative sculptures in a public setting.",
    },
    {
      src: "images/distillery.jpg",
      title: "Distillery District",
      description: "Historic area known for its art galleries and installations.",
    },
    {
      src: "images/toronto_sign.jpg",
      title: "Toronto Sign",
      description: "A symbol of the city, often creatively lit for different events.",
    },
  ];
  
  // Function to dynamically create the gallery
  const gallery = document.getElementById("gallery");
  
  galleryData.forEach((item) => {
    const imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.alt = item.title;
    imgElement.addEventListener("click", () => openModal(item));
    gallery.appendChild(imgElement);
  });
  
  // Modal Functionality
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeModal = document.getElementById("close-modal");
  
  function openModal(item) {
    modal.classList.remove("hidden");
    modalImage.src = item.src;
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
  }
  
  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
  });
  
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
    }
  });
  