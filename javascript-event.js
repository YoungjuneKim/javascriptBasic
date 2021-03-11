//Ex4 : 서로다른기능의 여러버튼을 가진화면에서 이벤트처리하기
window.addEventListener("load", function(){
    var section = document.querySelector("#section4");
    var tbody = section.querySelector(".notice-list tbody");
 
    tbody.onclick = function(e) {
        var target = e.target ;
        if(target.nodeName!="INPUT") return ;
       
        if(target.classList.contains("sel-button")) {
            var tr = target.parentElement ;
            for(;tr.nodeName!="TR";tr=tr.parentElement);
            tr.style.background="yellow" ;
        } else if (target.classList.contains("edit-button")) {

        } else if (target.classList.contains("del-button")) {
            var tr = target.parentElement.parentElement;
            tr.remove() ;
        }
    }
}); 

// Ex3 : 이벤트 버블링 멈추기
window.addEventListener("load", function(){

    var section = document.querySelector("#section3");
    
    var imgListDiv = section.querySelector(".img-list"); 
    var addButton = section.querySelector(".add-button");
    var currentImg = section.querySelector(".current-img");
    
    imgListDiv.onclick = function(e){
        if(e.target.nodeName!="IMG") return ;
        currentImg.src = e.target.src ;
    };

    addButton.onclick = function(e){
        e.stopPropagation(); // imgListDiv.onclick 이벤트발생을 방지함
        var img = document.createElement("img") ;
        img.src =  "images/img1.jpg" ;
        currentImg.insertAdjacentElement("afterend", img) ;
    };

}); 

//Ex2 : 이벤트 버블링을 이용해 사용자 이벤트 처리하기:event Bubbling
window.addEventListener("load", function(){

    var section = document.querySelector("#section2");
    var imgListDiv = section.querySelector(".img-list"); 
    var currentImg = section.querySelector(".current-img");
    
    imgListDiv.onclick = function(e){
        console.log(e.target.nodeName) ;
        if(e.target.nodeName!="IMG") return ;
        currentImg.src = e.target.src ;
    };
}); 


//연습문제1 : 선택된 레코드 삭제하기:event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section1-1");
    var noticeList = section.querySelector(".notice-list");
    var delButtons = section.querySelectorAll(".del-button");

    /** 
    for (let i=0; i<delButtons.length; i++) {
        delButtons[i].onclick = function(e) {
            //console.log("e : ", e.target) ;
            var tr = e.target.parentElement.parentElement;
            tr.remove() ;
            //delButtons[i].parentElement.parentElement.remove()  ;
        };
    }
    **/   

    noticeList.onclick = function(e) {
        if(e.target.nodeName!="INPUT") return ;
        var tr = e.target.parentElement.parentElement;
        tr.remove() ;
    }
}); 


//Ex1 : 선택된 이미지 보여주기:event target
window.addEventListener("load", function(){
    var section = document.querySelector("#section1");
   
    var imgs = section.querySelectorAll(".img");
    var currentImg = section.querySelector(".current-img");

    for (let i=0; i<imgs.length; i++) 
        imgs[i].onclick = function(e) {
            currentImg.src = e.target.src ;
        };
}); 