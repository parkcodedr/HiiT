

// const form = document.forms;
// console.log(form["registerForm"]);

// const newForm = document.registerForm;
// console.log(newForm);

// const selectForm = document.querySelector("form");
// console.log(selectForm);

const validateForm = () => {
    const form = document.registerForm;

    const fname = form.fname;
    const lname = form.lname;
    const email = form.email;
    const gender = form.gender;
    if (!fname.value) {
        fname.style.borderColor = "red";
        document.getElementById("fNameError").innerText = "Please provide a name"
        return false
    } else {
        fname.style.borderColor = "blue";
    }

    if (!lname.value) {
        lname.style.borderColor = "red";
        return false;
    }


    return false;

}


