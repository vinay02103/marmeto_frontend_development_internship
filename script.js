function selectBox(selectedBox) {
  var allBoxes = document.querySelectorAll(".box");
  allBoxes.forEach(function (box) {
    box.classList.remove("selected");
  });
  selectedBox.classList.add("selected");
}

var radioButtons = document.querySelectorAll('.selector input[type="radio"]');
radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function (event) {
    // Reset background color and color of all labels
    document.querySelectorAll(".selector label").forEach(function (label) {
      label.style.backgroundColor = "#f3f3f3";
      label.style.color = "#3a4980";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the elements
  var numberElement = document.querySelector(".number");
  var addButton = document.querySelector(".add");
  var substractButton = document.querySelector(".substract");

  // Function to add 1 to the quantity
  function addOne() {
    var currentValue = parseInt(numberElement.textContent);
    numberElement.textContent = currentValue + 1;
  }

  // Function to subtract 1 from the quantity
  function substractOne() {
    var currentValue = parseInt(numberElement.textContent);
    if (currentValue > 1) {
      numberElement.textContent = currentValue - 1;
    }
  }

  // Add event listeners to buttons
  addButton.addEventListener("click", addOne);

  substractButton.addEventListener("click", substractOne);
});

document.addEventListener("DOMContentLoaded", function () {
  const addToCartButton = document.querySelector(".add-to");
  const messageContainer = document.querySelector(
    ".add-to-cart-message-container"
  );

  addToCartButton.addEventListener("click", function () {
    // Toggle visibility of message container
    messageContainer.style.display =
      messageContainer.style.display === "none" ? "block" : "none";
  });
});
