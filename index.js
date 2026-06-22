/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;



// QUESTION #1

function makeFreelancer() {
    const name = random(NAMES);
    const occupation = random(OCCUPATIONS);
    const rate =
        PRICE_RANGE.min +
        Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min));

    return {name, occupation, rate};
}

// QUESTION #2 

const freelancers = Array.from({ length: NUM_FREELANCERS}, makeFreelancer);

//QUESTION #3 (function: returns average rate of all freelancers)

function getAverageRate() {
    const total = freelancers.reduce((total, freelancer) => total + freelancer.rate,0);

    return total / freelancers.length;
}

// QUESTION #4 (function: average rate of all freelancers)

const averageRate = getAverageRate();

// QUESTION #5 (function: single freelancer)

function FreelancerRow({name, occupation, rate}) {
    const $tr = document.createElement("tr");
    $tr.innerHTML= `
        <td>${name}</td>
        <td>${occupation}</td>
        <td>$${rate}</td>
    `;

    return $tr;
}

// QUESTION #6 (function: array of freelancers)

function FreelancerRows() {
    const $tbody = document.createElement("tbody");
    $tbody.replaceChildren(...freelancers.map(FreelancerRow));

    return $tbody;
}

// QUESTION 7 function: average rate

function AverageRate() {
    const $p = document.createElement("p");
    $p.textContent = `The average rate is $${averageRate.toFixed(2)}.`;

    return $p;
}

// RENDERING part so I can visualize my code

function render() {
    const $app = document.querySelector("#app");

$app.innerHTML = `
    <h1>Freelancer Forum</h1>
    <AverageRate></AverageRate>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Occupation</th>
                <th>Rate</th>
            </tr>
        </thead>
    <tbody id="FreelancerRows"></tbody>
    </table>
  `;
  $app.querySelector("AverageRate").replaceWith(AverageRate());
  $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());
}

render();



function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}
