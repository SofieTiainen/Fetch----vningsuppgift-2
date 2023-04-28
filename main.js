let getData = async (url) => {
    let response = await fetch(url);
    let json = await response.json();
    return json;
};

let profileList = document.querySelector("#profileList");

let createProfileCard = (user, element) => {
    const { name: companyName, bs } = user.company;
    let profileDiv = document.createElement("div");
    profileDiv.style.border = "2px solid black";
    profileDiv.innerHTML = `<p>Name: ${user.name}</p><p>Email: ${user.email}</p><p>Adress: ${user.address.street}, ${user.address.city}</p><p>${companyName} - ${bs}</p>`;
    element.append(profileDiv);
}

//Om vi vill skriva ut alla users från API:et
// let renderUsers = async () => {
//     let users = await getData("https://jsonplaceholder.typicode.com/users")
//     profileList.innerHTML = "";
//     users.forEach((user) => {
//         createProfileCard(user, profileList)
//     });
// }

//Om vi vill skriva ut user beroende på input-value
let renderProfile = async () => {
    let userId = document.querySelector("#userId").value;
    let user = await getData(`https://jsonplaceholder.typicode.com/users/${userId}`);
    profileList.innerHTML = "";
    createProfileCard(user, profileList);
};

let btn = document.querySelector("#getProfiles");
btn.addEventListener("click", renderProfile);