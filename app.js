import get from "./Utils/getElement.js";
import displayUser from "./Utils/displayUser.js";
import getUser from "./Utils/fetchUser.js";

const btn = get(".btn");
// This is copying all of the values that are coming back from the document.querySelectorAll(".icon"). Whenever we use the document.querySelectorAll(".icon") we are getting a Nodelist on which we can use forEach function but map function is not possible but with the use of the spread operator we have converted this Nodelist into an proper array so any array function can be used on this. To transform out Nodelist into a proper array, so we can run all of the array methods we simply need to use the spread operator here. We are just copying the values in spread operator. It is a proper array now.
// const btns = [...document.querySelectorAll(".icon")];
// console.log(btns);

const showUser = async () => {
  // Get User from API
  const data = await getUser();
  //   getUser();
  //   console.log(data);
  // display user
  displayUser(data);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
