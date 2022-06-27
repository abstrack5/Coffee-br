const readyBtns = document.getElementsByClassName("ready-btn");

for (const readyBtn of readyBtns) {
    readyBtn.addEventListener("click", function onClick(event) {
        //console.log(readyBtns);
        readyBtn.textContent = "Picked Up";
        readyBtn.setAttribute("class", "picked-up-btn p-1 text-stone-200 bg-stone-800 rounded-md hover:bg-stone-700 dark:bg-stone-100 dark:hover:bg-stone-300 dark:text-stone-800");
        moveOrder(event.target.parentElement.id);
        //console.log(pickedUpBtns);
        //console.log(readyBtns);
    });
};

function moveOrder(readyId) {
    const completedOrdersEl = document.querySelector("#completedOrders");
    var orderMoved = document.getElementById(readyId);
    completedOrdersEl.appendChild(orderMoved);
};

const pickedUpBtns = document.getElementsByClassName("picked-up-btn");

for (const pickedUpBtn of pickedUpBtns) {
    pickedUpBtn.addEventListener("click", function onClick(event) {
        console.log(pickedUpBtns);
        orderPickedUp(event.target.parentElement.id);
    });
};

function orderPickedUp(comletedId) {
    const completedOrdersEl = document.querySelector("#completedOrders");
    var pickedUpOrder = document.getElementById(comletedId);
    completedOrdersEl.removeChild(pickedUpOrder);
};