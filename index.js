let div = document.querySelectorAll(".form-group .form-control");
function changeType(e) {

    if (e.target.value === "-") {
        div[2].innerHTML = "<option>Shopping</option>\n" +
            "            <option>Travel</option>\n" +
            "            <option>Tuition1</option>\n" +
            "            <option>Other...</option>"
    } else if (e.target.value === "+") {
        div[2].innerHTML = "<option>Salary1</option>\n" +
            "            <option>Salary2</option>\n" +
            "            <option>Salary3</option>\n" +
            "            <option>Salary4</option>\n" +
            "            <option>Other...</option>"
    }
}

let sum  = 0 ;

function myFunction(){

let amount = +document.getElementById('FormControlInput1').value
    sum = amount
    document.getElementById("FormControlInput6").value = sum
    let money = +document.getElementById('FormControlInput4').value;
}
function myFunction1(sum, money){
    if(document.getElementById('FormControlSelect1').value == "-") {
        sum -= money
    } else if(document.getElementById('FormControlSelect1').value == "+"){
        sum += money
    }
}
