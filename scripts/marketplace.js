import marketplaceData from "../data/marketplaceData.js";

const marketplaceItemsDiv = document.getElementById("marketplaceItems");

marketplaceData.forEach((item) => {
  const itemDiv = document.createElement("div");
  itemDiv.className = "marketplace-item";
  itemDiv.innerHTML = `
    <h3>${item.name}</h3>
    <p><strong>Price:</strong> ${item.price}</p>
    <p><strong>ROI:</strong> ${item.roi}</p>
    <p><strong>Pieces Available:</strong> ${item.piecesAvailable}</p>
    <button onclick="buyItem(${item.id})">Buy Now</button>
  `;
  marketplaceItemsDiv.appendChild(itemDiv);
});

function buyItem(itemId) {
  alert(`You purchased Item ${itemId}`);
}
