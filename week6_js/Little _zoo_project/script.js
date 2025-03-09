const animalSimple = ["Fox", "Eagle", "Shark", "Wolf", "Panda"];
const animals = [
  { name: "Fox", type: "Mammal", age: 4, color: "White" },
  { name: "Dog", type: "Mammal", age: 6, color: "Black" },
  { name: "Eagle", type: "Bird", age: 2, color: "White" },
  { name: "Panda", type: "Amphibian", age: 3, color: "Black and White" },
  { name: "Shark", type: "Fish", age: 1, color: "Brown" },
  { name: "Wolf", type: "Reptile", age: 4, color: "white" },
];

const animalList = document.querySelector("#animalList");
const addAnimalButton = document.querySelector("#addAnimal");
const searchInput = document.querySelector("#searchAnimal");
const sortButton = document.querySelector("#sortAnimals");
const animalType = document.querySelector("#newAnimalType");
const filterType = document.querySelector("#filterType");

const displayAnimals = (animalArray) => {
  animalList.innerHTML = "";
  for (const animal of animalArray) {
    const li = document.createElement("li");
    //li.textContent = `${animal}`;
    li.textContent = `${animal.name},(${animal.type}),${animal.age},${animal.color}`;
    animalList.appendChild(li);
  }
};

const addAnimal = () => {
  const nameInput = document.querySelector("#newAnimalName").value.trim();
  animals.push(nameInput);
  displayAnimals(animals);
  document.querySelector("#newAnimalName").value = "";
};

const searchAnimal = () => {
  const searchText = searchInput.value.toLowerCase();

  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchText)
  );

  displayAnimals(filteredAnimals);
};

const filterByTypeAnimal = () => {
  const selectedType = filterType.value;

  if (selectedType === "All") {
    displayAnimals(animals);
  } else {
    const filteredAnimals = animals.filter(
      (animal) => animal.type === selectedType
    );
    displayAnimals(filteredAnimals);
  }
};

const sortAnimal = () => {
  animals.sort((a, b) => a.name.localeCompare(b.name));
  displayAnimals(animals);
};

addAnimalButton.addEventListener("click", addAnimal);
searchInput.addEventListener("input", searchAnimal);
sortButton.addEventListener("click", sortAnimal);
filterType.addEventListener("change", filterByTypeAnimal);

displayAnimals(animals);
