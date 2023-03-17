const validateForm = (event) => {
    const firstName = document.getElementById("fn");
    let error = 0;
//
    let firstnameError = document.getElementById("fnErr")
//

if(firstName.value == ""){
firstName.style.border = "2px solid Red"
error++
firstnameError.innerHTML = "Please fill in the first name"
}
if(error > 0){
    event.stopImmediatePropagation()
    event.preventDefault()
}





}