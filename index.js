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

function myFunction() {
    let e = document.getElementById('FormControlSelect1')
    let current = +document.getElementById('FormControlInput6').value;
    let amount = +document.getElementById('FormControlInput1').value;


    if (e.options[e.selectedIndex].text === 'Pay') {
        if (current < amount) {
            alert('Not enough money');
        } else {
            current -= amount;
            document.getElementById('FormControlInput6').value = current
        }
    } else if (e.options[e.selectedIndex].text === 'Collect') {
        current += amount;
        document.getElementById('FormControlInput6').value = current
    } else {
        document.getElementById('FormControlInput6').value = amount;
    }
    let d = new Date();

    document.getElementById("FormControlInput7").innerHTML = `Date: ${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
}








