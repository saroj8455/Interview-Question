const laptop = {
  brand: "Apple",
  year: 2017,
};

console.log(laptop);

/**
 * @Saroj
 * Fetch api
 */

const usersDetils = () => {
  let users = fetch("https://jsonplaceholder.typicode.com/users")
    .then((userResp) => userResp.json())
    .then((data) => data);
  console.log(users);
};

usersDetils();

function status(response) {
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function json(response) {
  return response.json();
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(status)
  .then(json)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
