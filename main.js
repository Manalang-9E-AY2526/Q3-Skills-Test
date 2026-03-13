function total(){

const FEE = 50.00;
const TICKETP = 250.00;

    let qty = document.getElementById("qty").value;
    let subt = qty * TICKETP;
    let total = subt + FEE;

document.getElementById("subt").value = subt.toFixed(2);
document.getElementById("total").value = total.toFixed(2);

}