//window.onload =  function () {
window.addEventListener("load", function() {   
    //.getElementsByTagName();
    //.getElementsByClassName();

    var section2 = document.getElementById("section2") ;
    
    var txtX = section2.getElementsByClassName("txt-x")[0] ;
    var txtY = section2.getElementsByClassName("txt-y")[0] ;
    var btnAdd = section2.getElementsByClassName("btn-add")[0] ;
    var txtSum = section2.getElementsByClassName("txt-sum")[0] ;

    /** 
    var inputs = section2.getElementsByTagName("input") ;
    //var inputs = section2.getElementsByClassName("input") ;
    var txtX = inputs[0];
    var txtY = inputs[1];
    var btnAdd = inputs[2];
    var txtSum = inputs[3];
   **/ 
 
    btnAdd.onclick = function() {   // btnPrint.onclick = () => {
        var x =parseInt(txtX.value)  ;
        var y =parseInt(txtY.value)  ;
        txtSum.value = x+y ; 
    } ;

});
//}

//window.onload =  function () {
window.addEventListener("load", function() {   
    //btn4.onclick = function () {     // btn4.onclick = () => {
    //    btn4.value="함수콜변경" ;
    //} ;

    //var btnPrint = document.getElementById("btn-print") ; 
    //btnPrint.onclick = function() {   // btnPrint.onclick = () => {
    //    //var btnPrint = document.getElementById("btn-print") ;
    //    btnPrint.value="아이디" ;
    //} ;

    //.getElementsByTagName();
    //.getElementsByClassName();

    var txtX = document.getElementById("txt-x") ; 
    var txtY = document.getElementById("txt-y") ; 
    var btnAdd = document.getElementById("btn-add") ; 
    var txtSum = document.getElementById("txt-sum") ; 
    btnAdd.onclick = function() {   // btnPrint.onclick = () => {
        var x =parseInt(txtX.value)  ;
        var y =parseInt(txtY.value)  ;
        txtSum.value = x+y ; 
    } ;

    var lis = sec1.getElementsByTagName("li")  ;
    lis[0].textContent = "Hello Number1" ;
    lis[1].innerText = "Hello Number2" ;

});
//}
