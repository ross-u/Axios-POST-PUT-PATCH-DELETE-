const createForm = document.querySelector("#create-form");
const getCharacterForm = document.querySelector("#get-char-form");
const updateForm = document.querySelector("#update-form");
const getIdSection = document.querySelector("#get-char-section");
const updateSection = document.querySelector("#update-section");

createForm.addEventListener("submit", function (e) {
  e.preventDefault();    //stop form from submitting

  const inputNodes = createForm.querySelectorAll('input');
  const inputElements = [...inputNodes];

  let newCharacter = {};
  inputElements.forEach((inputField) => newCharacter[inputField.name] = inputField.value);

  // Make a POST request
  axios.post('https://ih-crud-api.herokuapp.com/characters', newCharacter)
    .then(() => createForm.reset())
    .catch((err) => console.log('Oh No! Error is: ', err));
});


getCharacterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.querySelector('#character-id').value;
  if (!id) return;

  // Make a GET request
  axios.get(`https://ih-crud-api.herokuapp.com/characters/${id}`)
    .then((character) => {
      const inputNodes = updateForm.querySelectorAll('input');
      const inputElements = [...inputNodes];

      console.log('INPUT ELEMENTS ARE', inputElements);

      // Populate each empty update `inputField.value` with coressponding data from `character.data`
      inputElements.forEach((inputField) => inputField.value = character.data[inputField.name]);

      getCharacterForm.reset();
      updateSection.style.display = 'block';
      getIdSection.style.display = 'none';
    })
    .catch((err) => console.log(err));
});


updateForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const id = document.querySelector('#character-id-input').value;

  const inputNodes = updateForm.querySelectorAll('input');
  const inputElements = [...inputNodes];
  let updatedCharacter = {};

  inputElements.forEach((inputField) => updatedCharacter[inputField.name] = inputField.value);

  // Make a PATCH request 
  axios.patch(`https://ih-crud-api.herokuapp.com/characters/${id}`, updatedCharacter)
    .then((data) => {
      console.log('CHARACTER UPDATED', data);
      updateForm.reset();
      updateSection.style.display = 'none';
      getIdSection.style.display = 'block';
    })
    .catch((err) => console.log(err));
})