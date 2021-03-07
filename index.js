//window.onload =  function () {
window.addEventListener("load", function() {   
    btn4.onclick = function () {     // btn4.onclick = () => {
        btn4.value="함수콜변경" ;
    } ;

    var btnPrint = document.getElementById("btn-print") ; 
    btnPrint.onclick = function() {   // btnPrint.onclick = () => {
        //var btnPrint = document.getElementById("btn-print") ;
        btnPrint.value="아이디" ;
    } ;
});
//}

//Fuction
function btnPrint1() {
    btn1.value="Output.." ;
}
function btnPrint2() {
    btn2.value="Input.." ;
}
function btnPrint3() {
    btn3.type="text" ;
}

function spanPrint() {
    span1.innerText="This is span.." ;
}
