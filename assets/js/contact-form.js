function submitForm(event){
    event.preventDefault()
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let subject = document.getElementById("subject").value
    let phonenum = document.getElementById("phonenum").value
    let skill = document.getElementById("skill").value
    let message = document.getElementById("message").value

    // alert(`name : ${name}\n
    //         email : ${email}\n
    //         phonenum : ${phonenum}\n
    //         subject : ${subject}\n
    //         skill : ${skill}\n
    //         message : ${message}\n
    //         `)

    let emailTujuan ='febyrahz@gmail.com'
     
    let a = document.createElement('a')
    a.href = `mailto:${emailTujuan}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Halo, nama saya ${name}. Silakan hubungi saya di ${email}, ${phonenum}. Skill saya adalah ${skill}. Berikut ini yang ingin saya sampaikan:\n${message}`)}`;

    a.click() 
}