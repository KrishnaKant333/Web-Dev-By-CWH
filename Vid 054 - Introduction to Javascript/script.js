alert("Hello world");

console.log("Your code is running...")
console.log("Your code is also running...")
console.log("Your code is looking like a wow...")

var a = prompt("Enter your number ")
console.log("Your number is " + a)

var isTrue = confirm("Are u sure u want to leave this page and blast your pc?")

if (isTrue) {
	console.log("Your computer is blasting")
}
else {
	console.log("Your computer is not blasting")
}

//  using node.js we can run this js code in vs code terminal and need not require a website unless used commands such as prompt, confirm,..
document.title = "Hey I am good"

document.body.style.backgroundColor = "red"
// this code adds inline css
// npm is also installed along with node.js, npm is node package manager
// npm is used to include packages to our js file
