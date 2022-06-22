async function createNewOrder(event) {
  event.preventDefault();

  // const employee_id = document
  // .querySelector('input[id="employeeId"]')
  // .value.trim();
  const coffee_base = document
    .querySelector('input[name="coffee_base"]:checked')
    .value.trim();
  const dairy_type = document
    .querySelector('input[name="dairy_type"]:checked')
    .value.trim();
  const sweetener_type = document
    .querySelector('input[name="sweetener_type"]:checked')
    .value.trim();
  const customer = document.querySelector("#customername").value.trim();

  const flavor_type = document
    .querySelector('input[name="flavor_type"]:checked')
    .value.trim();

  if (customer && coffee_base && dairy_type && sweetener_type && flavor_type) {
    const response = await fetch("/api/orders", {
      method: "POST",
      body: JSON.stringify({
        // employee_id,
        customer,
        coffee_base,
        dairy_type,
        sweetener_type,
        flavor_type,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace('/homepage');
    }
  }
}

document.querySelector(".createOrder-form").addEventListener("submit", createNewOrder);
