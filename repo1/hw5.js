var services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  "Миття голови": "100 грн",
  maxPrice: function () {
    let max = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let price = parseInt(this[key]);
        if (price > max) {
          max = price;
        }
      }
    }
    return max;
  },
  minPrice: function () {
    let min = Infinity;
    for (let key in this) {
      if (typeof this[key] === "string") {
        let price = parseInt(this[key]);
        if (price < min) {
          min = price;
        }
      }
    }
    return min;
  },
  averagePrice: function () {
    let total = 0;
    let count = 0;
    for (let key in this) {
      if (typeof this[key] === "string") {
        total += parseInt(this[key]);
        count++;
      }
    }
    return count ? total / count : 0;
  },
};
var services = {
  стрижка: "60 грн",
  гоління: "80 грн",
  "Миття голови": "100 грн",
  price() {
    let totalPrice = 0;
    for (const key in this) {
      if (typeof this[key] !== "function") {
        totalPrice += Number.parseFloat(this[key].split(" ")[0]); // Можна через спліт наприклад
      }
    }
    return totalPrice;
  },
};
services["Масаж"] = "150 грн";
console.log(services.price());
