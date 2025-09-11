function btnClicky() {
    console.log('Button was clicked!');
}
// ...existing code...
console.log('welcome to my page');

document
    .addEventListener("DOMContentLoaded", () => {
        console.log("document succesfully loaded")

        document.getElementById('btnClicky').addEventListener('click', btnClicky)
    }
    )

