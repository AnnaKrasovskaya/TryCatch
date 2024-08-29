// Задание 1
import { url } from "./vars";
export async function fetchUsers() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("Error");
    }
    const users = await response.json();
    const userListDiv = document.getElementById("user-list");
    users.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `<p class="name">Имя пользователя: ${user.name}</p>
        <p class = "email"> Email: ${user.email}</p>
        <p class=""phone>Контактный телефон: ${user.phone} </p>`;
      userListDiv.appendChild(userDiv);
    });
  } catch (error) {
    console.error("Пользователи не получены:", error);
  }
}

// Задание 2
import { userListDiv } from "./vars";
export async function FetchUser(userName) {
  const urlGit = `https://api.github.com/users/${userName}`;
  try {
    const response = await fetch(urlGit);
    const user = await response.json();
    renderUser(user);
  } catch (error) {
    console.error("Пользователи не получены:", error);
  }
}

export function renderUser(user) {
  const userElement = document.createElement("div");
  userElement.innerHTML = `<img src = "${user.avatar_url}">
    <h2>Имя пользователя: ${user.login}</h2>
    <a href = "${user.html_url}">Ссылка на страницу Github</a>
    <p class = "first">Дата регистрации на github: ${user.created_at}</p>
    <p>Количество репозиториев: ${user.public_repos}</p>
    `;
  userListDiv.innerHTML = "";
  userListDiv.append(userElement);
}
