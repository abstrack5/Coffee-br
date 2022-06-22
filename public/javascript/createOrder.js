async function createNewOrder(event) {
  event.preventDefault();

  const coffeeBase = document
    .querySelector('input[name="coffee_base"]:checked')
    .value.trim();
  const milkType = document
    .querySelector('input[name="milk_type"]:checked')
    .value.trim();
  const sweetenerType = document
    .querySelector('input[name="sweetener_type"]:checked')
    .value.trim();
  const customerName = document.querySelector("#customername").value.trim();

  const flavorType = document
    .querySelector('input[name="flavor_type"]:checked')
    .value.trim();

  if (customerName && coffeeBase && milkType && sweetenerType && flavorType) {
    const response = await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        customerName,
        coffeeBase,
        milkType,
        sweetenerType,
        flavorType,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert(
        `Order Create with ${coffeeBase} ,${milkType} and ${sweetenerType}`
      );
    }
  }
}

document
  .querySelector(".createOrder-form")
  .addEventListener("submit", createNewOrder);
