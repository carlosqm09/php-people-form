const body = document.querySelector('#tbody');
const name = document.getElementById("nombre");
const app = document.getElementById("apellidop");
const apm = document.getElementById("apellidom");
const dir = document.getElementById("direccion");
const col = document.getElementById("colonia");
const post = document.getElementById("postal");
const tel = document.getElementById("tel");
const email = document.getElementById("correo");

name.pattern="[A-Za-z]{3,20}"
app.pattern="[a-zA-Z]{3,20}"
apm.pattern="[a-zA-Z]{3,20}"
post.pattern="[0-9]{1,5}"
tel.pattern = "[0-9]{10}";
email.pattern = "[A-Za-z0-9._%+-]{2,}@[a-zA-Z]{1,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Ingrese una dirección de email valida");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

const getData = async()=>{
  body.innerHTML="";
    const req = await fetch('./php/get-data.php');
    const res = await req.json()
    res.forEach(function(key) {
        body.innerHTML+=`
        <td>${key.person_name}</td>
        <td>${key.last_name_1}</td>
        <td>${key.last_name_2}</td>
        <td>${key.adress}</td>
        <td>${key.nbhd}</td>
        <td>${key.post_code}</td>
        <td>${key.cellphone}</td>
        <td>${key.email}</td>
        `
        console.log(key);
      
      });

}

getData();
