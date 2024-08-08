let freelancers = []

const name = ["Ms Ranch", "Ms Dooly", "Steve", "Clark Kent", "Accula", "Cleaver", "Ms. Ranch", "Madonne", "Sleeping Beauty", "Rotissery"]
const price = [10.50, 50, 40, 117.25, 15, 36.50, 10.50, 10.50, 200.40, 2.50, 86]
const occupation = ["dressing", "PC Building", "Battling demigorgons", "Newspaper Office Job", "Baker", "Butcher", "Animal Handler", "Singer", "Guest Bed Occupier", "Chicken Herder"]

const names = [
  "Ms Ranch",
  "Ms Dooly",
  "Steve",
  "Clark Kent",
  "Accula",
  "Cleaver",
  "Ms. Ranch",
  "Madonne",
  "Sleeping Beauty",
  "Rotissery",
];
const prices = [10.5, 50, 40, 117.25, 15, 36.5, 10.5, 200.4, 2.5, 86];
const occupations = [
  "Dressing",
  "PC Building",
  "Battling Demigorgons",
  "Newspaper Office Job",
  "Banker",
  "Butcher",
  "Animal Handler",
  "Singer",
  "Guest Bed Occupier",
  "Chicken Herder",
];

function randomFreelance(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomMember() {
  return {
    name: randomFreelance(names),
    price: randomFreelance(prices),
    occupation: randomFreelance(occupations),
  };
}

function renderFreelance() {
  const table = document.querySelector("#table tbody");
  table.innerHTML = ""; 

  freelancers.forEach((member) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${member.name}</td>
            <td>${member.occupation}</td>
            <td>${member.price.toFixed(2)}</td>
        `;
    table.appendChild(row);
  });

  updateAveragePrice();
}

function updateAveragePrice() {
  if (freelancers.length === 0) {
    document.querySelector("#average-price").textContent =
      "Average Price: $0.00";
    return;
  }

  const total = freelancers.reduce((sum, member) => sum + member.price, 0);
  const average = total / freelancers.length;
  document.querySelector(
    "#average-price"
  ).textContent = `Average Price: $${average.toFixed(2)}`;
}

const intervalId = setInterval(() => {
  freelancers.push(randomMember());
  renderFreelance();
  if (freelancers.length >= 15) {
    clearInterval(intervalId);
  }
}, 1000);

renderFreelance();
