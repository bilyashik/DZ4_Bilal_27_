const wrapper = document.querySelector(".wrapper");

const createCard = (user) => {
    const userCard = document.createElement("div");
    userCard.setAttribute("class", "userCard");
    userCard.innerHTML = `
        <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" alt="user"/>
        <h2>${user.name}</h2>
        <span>Age: ${user.age}</span>
      `;
    return userCard;
};

const renderUserCards = (data) => {
    data.forEach((user) => {
        const userCard = createCard(user);
        wrapper.append(userCard);
    });
};

const xhr = new XMLHttpRequest();
xhr.open("GET", "peoples.json");
xhr.setRequestHeader("Content-type", "application/js");
xhr.send();

xhr.addEventListener('load', () => {
    if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        renderUserCards(data);
    } else {
        console.error("Ошибка!", xhr.status);
    }
});
