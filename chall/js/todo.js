
const PENDING_LS = "pending";

const form = document.querySelector("#todoform");
const input = form.querySelector("#todoinput");

let pendingList = [];


const addPendingItem = (id, value) => {
  const list = document.querySelector("#pending");
  const item = document.createElement("li");
  item.id = id;

  const deleteBtn = document.createElement("Button");
  deleteBtn.innerText = "Del";
  deleteBtn.addEventListener("click", removePendingItem);

  const span = document.createElement("span");
  span.innerText = value;

  item.append(span);
  item.append(deleteBtn);

  list.append(item);
};

const savePendingItem = (id, value) => {
    // set user id
  pendingList.push({ id: id, text: value });
  const storageValue = JSON.stringify(pendingList);
  localStorage.setItem(PENDING_LS, storageValue);
};

const removePendingItem = (event) => {
  const list = document.querySelector("#pending");
  const item = event.target.parentNode;

  list.removeChild(item);

  const value = pendingList.find(function (i) {
    return i.id === item.id;
  });
  const id = pendingList.indexOf(value);
  pendingList.splice(id, 1);
  const storageValue = JSON.stringify(pendingList);
  localStorage.setItem(PENDING_LS, storageValue);
};

const restorePendingItem = () => {
  const pending = localStorage.getItem(PENDING_LS);

  if (pending != null) {
    pendingList = JSON.parse(pending);
  }

  if (pendingList.length > 0) {
    console.log("restorePendingItem : ", pendingList);
  }
  pendingList.forEach(function (e) {
    addPendingItem(e.id, e.text);
  });
};



const clearInputTetxt = (text) => {
  text.value = "";
};
const setInputText = (event) => {
  event.preventDefault();

  const value = input.value;

  clearInputTetxt(input);
  addPendingItem(pendingList.length + 1, value);
  savePendingItem(pendingList.length + 1, value);
};

const initTodo = () => {
  restorePendingItem();

  form.addEventListener("submit", setInputText);
};

initTodo();
