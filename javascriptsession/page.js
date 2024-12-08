alert("wlcome to the page") 
let promp = prompt("enter your first name");
alert("wlcome " + promp)
let mul = (x) => x;
let tempreture = +(prompt("enter tempreture"));

let temp = (tempreture) =>{
    if(tempreture  >= 30 ){
        return "hot";
    }else{
        return "cold";
    }
}
console.log(temp(tempreture))
alert(temp(tempreture))
function getName() {
    let name;
    while (true) {
        name = prompt("Please enter your name:");
        if (name && isNaN(name)) { 
            break; 
        } else {
            alert("Invalid name! Please enter a valid string.");
        }
    }
    return name;
}
function getBirthYear() {
    let birthYear;
    while (true) {
        birthYear = prompt("Please enter your birth year:");
        birthYear = parseInt(birthYear); 
        if (!isNaN(birthYear) && birthYear < 2010 ) {
            break; 
        } else {
            alert("Invalid year! Please enter a valid birth year less than 2010.");
        }
    }
    return birthYear;
}
function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear(); 
                return currentYear - birthYear;
}
function getUserInfo() {
    
    let name = getName();
    let birthYear = getBirthYear();
    let age = calculateAge(birthYear);

    
    let userInfo = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Birth Year:</strong> ${birthYear}</p>
        <p><strong>Age:</strong> ${age}</p>
    `;
    document.getElementById("userInfo").innerHTML = userInfo;
} 
getUserInfo();
for (let i = 1; i <= 6; i++) {
    document.write(`<h${i}>Welcome to my page</h${i}>`);
}








