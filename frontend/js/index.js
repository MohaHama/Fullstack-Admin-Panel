import {
  appendProducts,
  deleteProductByID,
  postProduct,
} from "./productMethods.js";

//Fetch all products
document
  .getElementById("btn-fetch-all")
  .addEventListener("click", appendProducts);

// POST
document.getElementById("btn-add").addEventListener("click", postProduct);

//Delete
document
  .getElementById("btn-delete")
  .addEventListener("click", deleteProductByID);

/* 
  
//delete product in card
document.getElementById("icon-btn-delete").addEventListener("click");

//Edit
document.getElementById("icon-btn-edit").addEventListener("click");

*/
