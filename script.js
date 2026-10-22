function calculateTotal() {
    let quantityInput = document.getElementById("calc-quantity");
    let productSelect = document.getElementById("calc-product");
    let resultDiv = document.getElementById("calc-result");
    let errorDiv = document.getElementById("calc-error");

    // Очищаем предыдущие сообщения
    resultDiv.innerHTML = "";
    errorDiv.innerHTML = "";

    let quantityStr = quantityInput.value.trim();

    // Проверка правильности ввода регулярным выражением (только цифры)[cite: 3, 6]
    let matchResult = quantityStr.match(/^\d+$/);

    if (matchResult === null) {
        errorDiv.innerHTML = "Ошибка: введите корректное целое число (только цифры)!";
        return;
    }

    let quantity = parseInt(quantityStr, 10);
    let price = parseInt(productSelect.value, 10);

    let total = quantity * price;

    resultDiv.innerHTML = "Стоимость заказа: " + total + " руб.";
}

window.addEventListener("DOMContentLoaded", function () {
    let calcButton = document.getElementById("calc-button");
    if (calcButton) {
        calcButton.addEventListener("click", calculateTotal);
    }
});