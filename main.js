function createNewUser(newUser) {
  let name = prompt("Напишіть будь ласка своє їм'я");
  while (!(name && /^[a-zA-Z]+$/.test(name))) {
    name = prompt("Напишіть будь ласка своє їм'я ще раз ");
  }
  let surname = prompt("Напишіть будь ласка своє прізвище");
  while (!(surname && /^[a-zA-Z]+$/.test(surname))) {
    surname = prompt("Напишіть будь ласка своє прізвище ще раз ");
  }

  newUser = {
    firstName: name,
    lastName: surname,
    getLogin: function () {
      console.log(
        newUser.firstName[0].toLowerCase() + newUser.lastName.toLowerCase()
      );
    },
  };
  Object.defineProperty(newUser, "firstName", {
    value: name,
    writable: false,
  });
  Object.defineProperty(newUser, "lastName", {
    value: surname,
    writable: false,
  });
  newUser.getLogin();
}

createNewUser();
