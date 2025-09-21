export const appendProducts = () => {
  fetch("http://localhost:5000/api/products")
    .then((res) => res.json())
    .then((body) => {
      // result er { succes: true, data: [...] }
      const products = body.data;

      const productsContainer = document.querySelector(".products");
      // ryd containeren først
      productsContainer.innerHTML = "";
      // loop gennem alle produkter og lav et card for hver document -
      // - vi har i vores databse

      //produkterne kaldes for p inde i data som vi fik fra fetch
      products.forEach((p) => {
        //vi laver en articcle til hvert produkt
        const card = document.createElement("article");
        card.className = "card";

        //inde her er bruger vi image, name og price til at lave et element
        card.innerHTML = `
          <div class="thumb">
            <img src="${p.image}" alt="${p.name}" />
          </div>
          <div class="card-body">
            <div class="title">
              <span>${p.name}</span>
              <span class="price">${p.price} $</span>
            </div>
            <span id="idOnProduct">ID: ${p._id}</span>
          </div>
          <div class="card-actions">
              <button id="icon-btn-edit" class="icon-btn edit">Edit</button>
              <button id="icon-btn-delete" class="icon-btn delete">Delete</button>
            </div>
        `;
        //appendChild er en js metode til at tage det her card vi lige -
        //lige - har lavet til at sætte ind i class="products"
        productsContainer.appendChild(card);
        console.log("data is appended now!");
      });
    })
    //fang alle fejl der kommer
    .catch((err) => console.error("Error:", err));
};

//Delete
export const deleteProductByID = () => {
  const id = document.getElementById("id-delete").value;

  const request = new Request(`http://localhost:5000/api/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  fetch(request)
    .then((res) => res.json())
    .then((data) => console.log("Product deleted:", data))
    .catch((err) => console.error("POST error:", err));
};

export const postProduct = () => {
  const productName = document.getElementById("name-add").value;
  const productPrice = document.getElementById("price-add").value;
  const imgURL = document.getElementById("pic-url").value;

  if (!productName || !productPrice || !imgURL) {
    return;
  }

  const request = new Request("http://localhost:5000/api/products", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: productName,
      price: Number(productPrice),
      image: imgURL,
    }),
  });

  fetch(request)
    .then((res) => res.json())
    .then((data) => console.log("Product added:", data))
    .catch((err) => console.error("POST error:", err));
};

export const deleteProductOnCard = () => {
  const id = document.getElementById("idOnProduct");

  const request = new Request(`http://localhost:5000/api/products/${id}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  fetch(request)
    .then((res) => res.json())
    .then((data) => console.log("Product deleted:", data))
    .catch((err) => console.error("POST error:", err));
};
