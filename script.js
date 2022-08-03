const solarSystem = document.getElementById("solarSystem");

const planets = [
  {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey"
  },
  {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow"
  },
  {
    "name": "Earth",
    "diameter": 12742,
    "color": "green"
  },
  {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink"
  },
  {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow"
  },
  {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange"
  },
  {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey"
  },
  {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue"
  },
  {
    "name": "Pluto",
    "diameter": 2370,
    "color": "white"
  }
];

function renderPlanets(planet) {
  for (let i = 0; i < planets.length; i++) {
    const planet = document.createElement("div");
    const info = document.createElement("p");

    const moons = [0, 0, 1, 2, 67, 62, 27, 14];

    planet.style.minHeight = `${planets[i].diameter / 600}px`;
    planet.style.minWidth = `${planets[i].diameter / 600}px`;
    planet.style.background = `conic-gradient( 
            black 0deg 180deg, 
            var(--${planets[i].color}) 180deg 360deg)`;
    planet.style.color = `var(--${planets[i].color})`;
    planet.classList.add("planet");
    solarSystem.appendChild(planet);

    info.innerHTML = `<strong>${planets[i].name}</strong><br>Diameter: ${planets[i].diameter} km<br>Moons: ${moons[i]}<br>${planets[i].hasRings ? "Has rings" : ""}`;
    info.classList.add("info");
    planet.appendChild(info);
  }
}

planets.pop();

planets.push({
  "name": "Web Dev",
  "diameter": 6371,
  "color": "green",
  "hasRings": true,
  "moons": 0
});

renderPlanets();