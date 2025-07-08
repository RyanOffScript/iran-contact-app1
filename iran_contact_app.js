
const contacts = [
  { id: 1, name: "Maman", phone: "+98xxxxxxxxxx" },
  { id: 2, name: "Baba", phone: "+98xxxxxxxxxx" },
  { id: 3, name: "Khalayei", phone: "+98xxxxxxxxxx" }
];

function renderContacts() {
  const list = document.getElementById("contact-list");
  list.innerHTML = "";
  contacts.forEach(contact => {
    const item = document.createElement("li");
    item.innerHTML = `${contact.name}: ${contact.phone} <button onclick="call('${contact.phone}')">Call</button>`;
    list.appendChild(item);
  });
}

function addContact() {
  const number = document.getElementById("number").value;
  if (number.trim() !== "") {
    contacts.push({ id: Date.now(), name: "New Contact", phone: number });
    renderContacts();
    document.getElementById("number").value = "";
  }
}

function call(phone) {
  window.location.href = `tel:${phone}`;
}

window.onload = renderContacts;
