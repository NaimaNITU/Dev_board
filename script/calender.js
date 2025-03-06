

const calenderAndDate = document.getElementById('calenderDate');

// Finding out today's date
let date = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let day = days[date.getDay()];
let month = months[date.getMonth()];
let dayNum = date.getDate();
let year = date.getFullYear();
//
// Formatting the date with the date part in bold
let today = `${day},<br><strong>${month} ${dayNum} ${year}</strong>`;

// Create a new paragraph element
const p = document.createElement('p');
p.innerHTML = today;

// Append the paragraph to the container
calenderAndDate.appendChild(p);













/* const calenderAndDate = document.getElementById('calenderDate');

//finding out today's date
let date = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let day = days[date.getDay()];
let month = months[date.getMonth()];
let dayNum = date.getDate();
let year = date.getFullYear();
let today = `
${day} ,\n${month} ${dayNum} ${year}
`
// console.log(today);

// creating new paragraph
const p = document.createElement('p');
p.innerText = today;
calenderAndDate.appendChild(p);
// console.log(p); */