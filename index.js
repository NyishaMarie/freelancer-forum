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

//QUESTION #3

function getAverageRate() {
    const total = freelancers.reduce((sum, f) => sum + f.rate,0);

    return total / freelancers.length;
}

// QUESTION #4

const averageRate = getAverageRate();