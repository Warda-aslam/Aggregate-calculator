function calculate() {
    let mat = document.getElementById("mat").value;
    let fmat = document.getElementById("fmat").value;
    let fsc = document.getElementById("fsc").value;
    let ffsc = document.getElementById("ffsc").value;
    let ec = document.getElementById("ec").value;
    let fec = document.getElementById("fec").value;
    let calcagg= ((mat/fmat)*25) + ((fsc/ffsc)*45) + ((ec/fec)*30)
    document.getElementById("calcagg").innerHTML = `<h2> Your Calculated Aggregate is ${calcagg} </h2>` ;
}; 