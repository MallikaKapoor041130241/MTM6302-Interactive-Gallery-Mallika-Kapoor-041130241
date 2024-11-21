const galleryData = [
    {
      src: "images/grafitti-alley.jpg",
      title: "Graffiti Alley",
      description: "A vibrant stretch of street art and murals in Toronto's downtown core.",
    },
    {
      src: "images/pic1.jpg",
      title: "Art Gallery of Ontario",
      description: "Explore iconic artwork at the renowned Art Gallery of Ontario.",
    },
    {
      src: "images/sculpture-garden.jpg",
      title: "Toronto Sculpture Garden",
      description: "A unique spot featuring innovative sculptures in a public setting.",
    },
    {
      src: "images/DistilleryDistrict.jpg",
      title: "Distillery District",
      description: "Historic area known for its art galleries and installations.",
    },
    {
      src: "images/torontosign.jpg",
      title: "Toronto Sign",
      description: "A symbol of the city, often creatively lit for different events.",
    },
    {
      src: "images/elgin-and-winter-garden-theatre.jpg",
      title: "Elgin & Winter Garden Theatre",
      description: "The Elgin & Winter Garden Theatres are a pair of stacked theatres in Toronto, Ontario, Canada. The Winter Garden Theatre is seven storeys above the Elgin Theatre. They are the last surviving Edwardian stacked theatres in the world.",
    },
    {
      src: "images/mca.jpg",
      title: "Museum of Contemporary Art",
      description: "The Museum of Contemporary Art Toronto Canada (MOCA), is a museum and art gallery in Toronto, Ontario. It is an independent, registered charitable organization.",
    },
    {
      src: "images/tfs.jpg",
      title: "Toronto Film School",
      description: "The school offers creative diploma programs in the areas of film, entertainment, fashion, design, and video games.",
    },
    {
      src: "images/Casa-Loma.jpg",
      title: "Casa Loma",
      description: "Casa Loma is a magnificent 1914 castle located in Toronto, Canada. It stands out for its impressive Gothic architecture and picturesque gardens that are only open during certain seasons.",
    },
    {
      src: "images/Gardiner-Museum.jpg",
      title: "Gardiner Museum",
      description: "The Gardiner Museum is not just a ceramics museum, but also offers various activities such as classes, lectures, and tours.",
    },
    {
      src: "images/Roy-Thomson-Hall.jpg",
      title: "Roy Thomson Hall",
      description: "Roy Thomson Hall is a renowned concert venue in Toronto, famous for its exceptional acoustics. It serves as the home to the Toronto Symphony Orchestra.",
    },
    {
      src: "images/Textile-Museum-of-Canada.jpg",
      title: "Textile Museum of Canada",
      description: "The Textile Museum of Canada is a unique institution in Canada that showcases historical and cultural fabrics, contemporary art, and interactive exhibits.",
    }
  ];
  
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
 
  // Get the gallery container from the DOM (this is where images will be inserted)
  const galleryContainer = document.getElementById("gallery-container");
  
  // Loop through the array of images
  images.forEach((image) => {
    // Create a new img element for each image
    const imgElement = document.createElement("img");
  
    // Set the src and alt attributes of the img element
    imgElement.src = image.src;
    imgElement.alt = image.title;
  
    // Optionally, add a title or description when clicked (as an example)
    imgElement.addEventListener("click", () => {
      alert(`Title: ${image.title}\nDescription: ${image.description}`);
    });
  
    // Append the img element to the gallery container in the HTML
    galleryContainer.appendChild(imgElement);
  });
  