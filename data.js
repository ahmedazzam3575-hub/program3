let people = [
    { name: "Ahmed", age: 22, city: "Cairo" },
    { name: "Sara", age: 20, city: "Giza" },
    { name: "Omar", age: 25, city: "Alex" },
    { name: "Mona", age: 19, city: "Cairo" }
];

function displayData() {
    let searchValue = document.getElementById("searchBox").value.toLowerCase();
    let tableBody = document.getElementById("tableBody");
    tableBody.innerHTML = "";

    for (let i = 0; i < people.length; i++) {
        if (people[i].name.toLowerCase().includes(searchValue)) {
            let row = "<tr>" +
                        "<td>" + people[i].name + "</td>" +
                        "<td>" + people[i].age + "</td>" +
                        "<td>" + people[i].city + "</td>" +
                      "</tr>";
            tableBody.innerHTML += row;
        }
    }
}

function sortByName() {
    people.sort(function(a, b) {
        return a.name.localeCompare(b.name);
    });
    displayData();
}

function sortByAge() {
    people.sort(function(a, b) {
        return a.age - b.age;
    });
    displayData();
}

displayData();