const formData= document.querySelector('#myform');

const newPerson = async(obj)=>{
    const req = await fetch('./php/new-data.php',{
        body: obj,
        method:'POST',
    });
    const res = req.status
    console.log(res)
}

formData.addEventListener('submit',async (e)=>{
    e.preventDefault();
    const obj = {
        person_name: e.target.nombre.value,
        last_name_1: e.target.apellidop.value,
        last_name_2: e.target.apellidom.value,
        adress: e.target.direccion.value,
        nbhd: e.target.colonia.value,
        post_code: e.target.postal.value,
        cellphone: e.target.tel.value,
        email: e.target.correo.value
    }

    await newPerson(JSON.stringify(obj));
    getData();
    e.target.reset()
})