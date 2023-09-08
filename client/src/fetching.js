const api_root = "http://localhost:8080/api";

//Book fetches

export async function getAllBooks() {
  const resp = await fetch(`${api_root}/books`);
  const json = await resp.json();
  return json;
}

export async function getAllAvailableBooks() {
  const resp = await fetch(`${api_root}/books/available`);
  const json = await resp.json();
  return json;
}

export async function getBookById(id) {
  const resp = await fetch(`${api_root}/books/${id}`);
  const json = await resp.json();
  return json;
}

export async function createBook(book) {
  const resp = await fetch(`${api_root}/books`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const json = await resp.json();
  return json;
}

export async function deleteBook(id) {
  const resp = await fetch(`${api_root}/books/${id}`, { method: "DELETE" });
  const json = await resp.json();
  return json;
}

//User Fetches

export async function getAllUsers() {
  const resp = await fetch(`${api_root}/users`);
  const json = await resp.json();
  return json;
}

export async function getUserById(id) {
  const resp = await fetch(`${api_root}/users/${id}`);
  const json = await resp.json();
  return json;
}

export async function createUser(user) {
  const resp = await fetch(`${api_root}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  const json = await resp.json();
  return json;
}

export async function deleteUser(id) {
  const resp = await fetch(`${api_root}/users/${id}`, { method: "DELETE" });
  const json = await resp.json();
  return json;
}

//Checkout Fetches

export async function getAllCheckouts() {
  const resp = await fetch(`${api_root}/checkouts`);
  const json = await resp.json();
  return json;
}

export async function getCheckoutById(id) {
  const resp = await fetch(`${api_root}/checkouts/${id}`);
  const json = await resp.json();
  return json;
}

export async function createCheckout(checkout) {
  const resp = await fetch(`${api_root}/checkouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(checkout),
  });
  const json = await resp.json();
  return json;
}
