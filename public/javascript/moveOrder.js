document.getElementById("upcomingOrders").addEventListener("click", function onClick(event) {
    if (event.target.classList.contains("ready-btn")) {
        event.target.textContent = "Picked Up";
        event.target.setAttribute("class", "picked-up-btn p-1 text-stone-200 bg-stone-800 rounded-md hover:bg-stone-700 dark:bg-stone-100 dark:hover:bg-stone-300 dark:text-stone-800");
        moveOrder(event.target.parentElement.id);
    }
});

function moveOrder(readyId) {
    const completedOrdersEl = document.querySelector("#completedOrders");
    var orderMoved = document.getElementById(readyId);
    completedOrdersEl.appendChild(orderMoved);
};

document.getElementById("completedOrders").addEventListener("click", function onClick(event) {
    if (event.target.classList.contains("picked-up-btn")) {
        orderPickedUp(event.target.parentElement.id);
    };
});

function orderPickedUp(comletedId) {
    const completedOrdersEl = document.querySelector("#completedOrders");
    var pickedUpOrder = document.getElementById(comletedId);
    completedOrdersEl.removeChild(pickedUpOrder);
};