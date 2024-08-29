// Задание 1
import { fetchUsers } from "./functions";
fetchUsers();

// Задание 2

import { form } from "./vars";
import { input } from "./vars";
import { FetchUser } from "./functions";

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (input.value !== "") {
    FetchUser(input.value);
  }
});
