//Ex10 : Draggable 설정
window.addEventListener("load", function(){
    var section = document.querySelector("#section10");
    var container = section.querySelector(".container10");
    var dragging = false ;
    var offset = {x:0, y:0} ;
    var currentBox = null ;

    var cleft = container.offsetLeft ;
    var ctop = container.offsetTop ;

    container.onmousedown = function(e) {
    //document.onmousedown = function(e) {
            if(e.target.classList.contains("box10") ) {
            dragging = true ;
            currentBox = e.target ;
            offset.x= e.offsetX ;
            offset.y= e.offsetY ;
        }
    } ;

    container.onmouseup = function(e) {
    //document.onmouseup = function(e) {
        dragging = false ;    
    } ;

    container.onmousemove = function(e) {
    //document.onmousemove = function(e) {
            if(!dragging) return ;
        //console.log(e.x, e.y) ; e.offsetX/Y, e.clientX/Y, e.pageX/Y
        var x = e.pageX-offset.x -cleft ;
        var y = e.pageY-offset.y -ctop ;  
        //var x = e.offsetX -offset.x ;
        //var y = e.offsetY-offset.y ;  
        currentBox.style.left = x+"px" ;
        currentBox.style.top = y+"px" ;
    } ;
});

//Ex9 : 박스의 옵셋 좌표 이용하기
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
    var container = section.querySelector(".container9");
    var status = section.querySelector(".status");
    var dragging = false ;
    var offset = {x:0, y:0} ;
    var currentBox = null ;

    var cleft = container.offsetLeft ;
    var ctop = container.offsetTop ;

    //container.onmousedown = function(e) {
    document.onmousedown = function(e) {
            if(e.target.classList.contains("box9") ) {
            dragging = true ;
            currentBox = e.target ;
            offset.x= e.offsetX ;
            offset.y= e.offsetY ;
        }
    } ;

    //container.onmouseup = function(e) {
    document.onmouseup = function(e) {
            dragging = false ;    
    } ;

    //container.onmousemove = function(e) {
    document.onmousemove = function(e) {
            if(!dragging) return ;
        //console.log(e.x, e.y) ; e.offsetX/Y, e.clientX/Y, e.pageX/Y
        var x = e.pageX-offset.x -cleft ;
        var y = e.pageY-offset.y -ctop ;  
        //var x = e.offsetX -offset.x ;
        //var y = e.offsetY-offset.y ;  
        currentBox.style.left = x+"px" ;
        currentBox.style.top = y+"px" ;

        status.innerText = "(x,y) : ("+x+","+y+")"  ;
    } ;
});

//Ex8 : 여러 개의 박스 드래그하기
window.addEventListener("load", function(){
    var section = document.querySelector("#section8");
    var container = section.querySelector(".container8");
    //var box = section.querySelector(".box8");
    var dragging = false ;
    var offset = {x:0, y:0} ;
    var currentBox = null ;

    container.onmousedown = function(e) {
        if(e.target.classList.contains("box8") ) {
            dragging = true ;
            currentBox = e.target ;
            offset.x= e.offsetX ;
            offset.y= e.offsetY ;
        }
    } ;

    container.onmouseup = function(e) {
        dragging = false ;    
    } ;

    container.onmousemove = function(e) {
        if(!dragging) return ;
        //console.log(e.x, e.y) ; e.offsetX/Y, e.clientX/Y, e.pageX/Y
        currentBox.style.left = e.pageX-offset.x+"px" ;        
        currentBox.style.top = e.pageY-offset.y+"px" ;        
    } ;
});

//Ex7 : 드래그 방식으로 박스 옮기기
window.addEventListener("load", function(){
    var section = document.querySelector("#section7");
    var container = section.querySelector(".container7");
    var box = section.querySelector(".box7");
    var dragging = false ;
    var offset = {x:0, y:0} ;

    container.onmousedown = function(e) {
        if(e.target==box) //===???
            dragging = true ;
    } ;

    container.onmouseup = function(e) {
        dragging = false ;    
    } ;

    container.onmousemove = function(e) {
        if(!dragging) return ;
        //console.log(e.x, e.y) ; e.offsetX/Y, e.clientX/Y, e.pageX/Y
        //box.style.position="absolute";
        box.style.left = e.pageX-offset.x+"px" ;        
        box.style.top = e.pageY-offset.y+"px" ;        
    } ;

    box.onmousedown = function(e) {
        offset.x= e.offsetX ;
        offset.y= e.offsetY ;
    }
});

//Ex6 : 마우스 좌표 #1 - 클릭 위치에 박스 옮기기 
window.addEventListener("load", function(){
    var section = document.querySelector("#section6");
    var container = section.querySelector(".container6");
    var box = section.querySelector(".box6");

    container.onclick = function(e) {
        //console.log(e.x, e.y) ; e.offsetX/Y, e.clientX/Y, e.pageX/Y
        box.style.position="absolute";
        box.style.left = e.pageX+"px" ;        
        box.style.top = e.pageY+"px" ;        
    } ;

});

//Ex5 : Trigger
window.addEventListener("load", function(){
    var section = document.querySelector("#section5");
    var fileButton = section.querySelector(".file-button");
    var fileTriggerButton = section.querySelector(".file-trigger-button");

    fileTriggerButton.onclick = function() {
        var event = new MouseEvent("click", {
            'view': window,
            'bubbles':true,
            'cancelable':true
        });

        fileButton.dispatchEvent(event) ;
    }
}); 


//Ex4 : 서로다른기능의 여러버튼을 가진화면에서 이벤트처리하기
window.addEventListener("load", function(){
    var section = document.querySelector("#section4");
    var tbody = section.querySelector(".notice-list tbody");
 
    tbody.onclick = function(e) {
        e.preventDefault() ; //<a href=""> 리프레쉬를 막음
        var target = e.target ;
        //if(target.nodeName!="INPUT") return ;
        if(target.nodeName!="A") return ;
       
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
        e.stopPropagation(); // imgListDiv.onclick 이벤트발생을 방지함(bubbling방지)
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