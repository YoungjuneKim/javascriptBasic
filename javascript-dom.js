//Ex11 : 클릭한 컬럼을 기준으로 레코드 정렬하기 #1
window.addEventListener("load", function(){
    var notices = [
        {"id":1, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2021-02-05", "writerId":"newlec", "hit":2},
        {"id":2, "title":"자바스크립트란..", "regDate":"2021-02-02", "writerId":"newlec", "hit":0},
        {"id":3, "title":"기본기가 튼튼해야....", "regDate":"2021-03-01", "writerId":"newlec", "hit":1},
        {"id":4, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2021-03-20", "writerId":"newlec", "hit":0}
    ];

    var section = document.querySelector("#section11");
    var noticeList =section.querySelector(".notice-list");
    var titldTd = section.querySelector(".title");
    var tbodyNode = noticeList.querySelector("tbody");

    var bindData = function(){
        var template = section.querySelector("template");

        for(var i=0; i<notices.length; i++){
            var cloneNodeTr = document.importNode(template.content, true);
            var tds = cloneNodeTr.querySelectorAll("td");
            tds[0].textContent = notices[i].id;            

            var aNode = tds[1].children[0];
            aNode.href=notices[i].id;
            aNode.textContent = notices[i].title;

            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writerId;
            tds[4].textContent = notices[i].hit;

            tbodyNode.appendChild(cloneNodeTr);
        }
    };

    bindData();
 
    var titleSorted = false;

    titldTd.onclick = function(){
       tbodyNode.innerHTML = "" ; //이게 없으면 데이타 쌓임

       if(!titleSorted) 
            notices.sort( function(a,b) {
                titleSorted = true;
                if(a.title<b.title)
                    return -1 ;
                else if(a.title>b.title)
                    return 1 ;
                else 
                    return 0;
            }) ;
        else
            notices.reverse();

       bindData();
       
    };
});


//Ex 10 : 다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load", function(){
    var section = document.querySelector("#section10");
    var noticeList =section.querySelector(".notice-list"); 
    var tbody = noticeList.querySelector("tbody");
    var allCheckbox = section.querySelector(".overall-checkbox");
    var delButton = section.querySelector(".del-button");
    var swapButton = section.querySelector(".swap-button");

    allCheckbox.onchange = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']") ;
        for(var i=0; i<inputs.length;i++) {
            inputs[i].checked = allCheckbox.checked ;
        }
    };

    delButton.onclick = function(){
        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked") ;
        for(var i=0; i<inputs.length;i++) {
            //if(inputs[i].checked)
            inputs[i].parentElement.parentElement.remove() ;
        }
    };

    swapButton.onclick = function(){
        /** 
        var inputs = tbody.querySelectorAll("input[type='checkbox']") ;
        for(var i=0; i<inputs.length;i++) {
             if(inputs[i].checked)
                inputs[i].checked = false ;
             else 
                inputs[i].checked = true ;
        }
        **/

        var inputs = tbody.querySelectorAll("input[type='checkbox']:checked") ;
        if(inputs.length!=2) {
            alert("노드는 두개를 선택해야합니다.") ;
            return ;
        }

        var trs = [] ;
        for(var i=0; i<inputs.length;i++) {
            trs.push(inputs[i].parentElement.parentElement) ;
        }

        var cloneNodeTr = trs[0].cloneNode(true) ;
        trs[1].replaceWith(cloneNodeTr) ;
        trs[0].replaceWith(trs[1]) ;
    };
});

//Ex9 : 노드 삽입과 바꾸기
window.addEventListener("load", function(){
    var section = document.querySelector("#section9");
   
    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");
    var upButton = section.querySelector(".up-button");
    var downButton = section.querySelector(".down-button");

    var currentNode = tbodyNode.firstElementChild;

    upButton.onclick = function(){
        var prevElementNode = currentNode.previousElementSibling ;
        if(prevElementNode==null) {
            alert("더이상 이동할수 없습니다.") ;
            return ;
        }
        //tbodyNode.removeChild(currentNode) ;
        //tbodyNode.insertBefore(currentNode, prevElementNode) ;

        currentNode.insertAdjacentElement("afterend", prevElementNode) ; //-->google
    };

    downButton.onclick = function(){
        var nextElementNode = currentNode.nextElementSibling ;
        if(nextElementNode==null) {
            alert("더이상 이동할수 없습니다.") ;
            return ;
        }
        //tbodyNode.removeChild(nextElementNode) ;
        //tbodyNode.insertBefore(nextElementNode, currentNode) ;

        currentNode.insertAdjacentElement("beforebegin", nextElementNode) ; //-->google
    };
});

//Ex8 : 노드 복제와 템플릿 태그
window.addEventListener("load", function(){
    var notices = [
        {id:5, title:"퐈이야~~~", regDate:"2019-01-26", writerId:"newlec", hit:0},
        {id:6, title:"나 좀 복제해줘~", regDate:"2019-01-26", writerId:"newlec", hit:17}
    ];

    var section = document.querySelector("#section8");
    
    var noticeList =section.querySelector(".notice-list"); 
    var tbodyNode = noticeList.querySelector("tbody");
    var cloneButton = section.querySelector(".clone-button");
    var templateButton = section.querySelector(".template-button");

    cloneButton.onclick = function(){
        //var trNode = noticeList.querySelector("tbody tr") ;
        //var cloneNodeTr = trNode.cloneNode(true) ;
        //tbodyNode.append(cloneNodeTr) ; //tbodyNode.appendChild(cloneNodeTr) 

        var trNode = noticeList.querySelector("tbody tr") ;
        var cloneNodeTr = trNode.cloneNode(true) ;
        var tds = cloneNodeTr.querySelectorAll("td") ;
        tds[0].textContent = notices[0].id;
        tds[1].innerHTML = '<a href="'+ notices[0].id +'">' + notices[0].title + '</a>';
        tds[2].textContent = notices[0].regDate;
        tds[3].textContent = notices[0].writeId;
        tds[4].textContent = notices[0].hit ;

        tbodyNode.append(cloneNodeTr) ; //tbodyNode.appendChild(cloneNodeTr) 
    };

    templateButton.onclick = function(){
        var template =section.querySelector("template") ;

        for (let i=0; i < notices.length; i++) {
            var cloneNode = document.importNode(template.content, true) ;
            var tds = cloneNode.querySelectorAll("td") ;

            tds[0].textContent = notices[i].id;
            //tds[1].innerHTML = '<a href="'+ notices[0].id +'">' + notices[0].title + '</a>';
            var aNode = tds[1].children[0];
            aNode.href=notices[i].id ;
            aNode.textContent = notices[i].title;
    
            tds[2].textContent = notices[i].regDate;
            tds[3].textContent = notices[i].writeId;
            tds[4].textContent = notices[i].hit;
            tbodyNode.appendChild(cloneNode) ; //tbodyNode.append(cloneNode) 
        }
    };
});

//Ex7.Node 조작 : 메뉴추가(createTextNode, Element)
window.addEventListener("load", function() {   
    var section7 = document.querySelector("#section7") ; //id selector
    
    var titleInput = section7.querySelector(".title-input") ;  //class selector
    var btnAdd = section7.querySelector(".add-btn") ;
    var btnDel = section7.querySelector(".del-btn") ;
    var menuListUl = section7.querySelector(".menu-list") ;
    
    btnAdd.onclick = function() {   // btnAdd.onclick = () => {
        var title =  titleInput.value;
        // 1번째방법
        //var txtNode = document.createTextNode(title) ;
        //menuListUl.appendChild(txtNode) ;


        /** 2번째방법
        var txtNode = document.createTextNode(title) ;
        var aNode = document.createElement("a") ;
        aNode.href=""; 
        aNode.appendChild(txtNode) ;

        var liNode = document.createElement("li") ;
        liNode.appendChild(aNode) ;
        menuListUl.appendChild(liNode) ;
        **/

        // 3번째방법
        //menuListUl.innerHTML+='<li><a href="">'+title+'</a></li>' ; //성능에문제있음

        //4번째방법
        var alink = '<a href ="">'+title+'</a>' ;
        var li = document.createElement("li") ;
        li.innerHTML = alink ;
        //menuListUl.appendChild(li) ; // menuListUl.appendChild(title) -> error
        
        menuListUl.append(li) ; //textNode가 아니어도 OK
    } ;

    btnDel.onclick = function() {   // btnDel.onclick = () => {
        //var txtNode = menuListUl.childNodes[0] ;
        //var liNode = menuListUl.children[0] ;
        //menuListUl.removeChild(liNode) ;

        var liNode = menuListUl.children[0] ;
       liNode.remove() ;
     } ;
});

//Ex6.elementNode의 속성변경 && CSS 속성변경하기
window.addEventListener("load", function() {   
    var section6 = document.querySelector("#section6") ; //id selector
    
    var srcInput = section6.querySelector(".src-input") ;     //class selector
    var imgSelect = section6.querySelector(".img-select") ;  
    var listInput = section6.querySelector(".list-input") ;
    var colorInput = section6.querySelector(".color-input") ;

    var btnChange = section6.querySelector(".change-btn") ;
    var img = section6.querySelector(".img") ;     //class selector
    
    btnChange.onclick = function() {   // btnChange.onclick = () => {
        //img.src= "images/"+ srcInput.value ; 
        //img.src= "images/"+ imgSelect.value ; 
        img.src= "images/"+ listInput.value ; 
        //img.style["border-color"] = colorInput.value ;
        img.style["borderColor"] = colorInput.value ; //위와같음
        console.log(img.className) ;
    } ;
});

//Ex5.elementNode의 속성변경하기
window.addEventListener("load", function() {   
    var section5 = document.querySelector("#section5") ; //id selector
    
    var srcInput = section5.querySelector(".src-input") ;     //class selector
    var imgSelect = section5.querySelector(".img-select") ;  
    var listInput = section5.querySelector(".list-input") ;

    var btnChange = section5.querySelector(".change-btn") ;
    var img = section5.querySelector(".img") ;     //class selector
    
    btnChange.onclick = function() {   // btnChange.onclick = () => {
        //img.src= "images/"+ srcInput.value ; 
        //img.src= "images/"+ imgSelect.value ; 
        img.src= "images/"+ listInput.value ; 
    } ;
});
    
//Ex4.childNode를 이용한 노드선택
//window.onload =  function () {
window.addEventListener("load", function() {   
    var section4 = document.querySelector("#section4") ; //id selector
    //var inputs = section4.querySelectorAll("input") ;  //type selector 
    var box = section4.querySelector(".box") ;           //class selector
    //var input1 = box.childNodes[0]; // box.childNodes는 배열(공백도 Node로 인식)
    //var input2 = box.childNodes[1];
    var input1 = box.children[0];
    var input2 = box.children[1];
    
    input1.value="hello" ;
    input2.value="world" ;
});
//}

//Ex3.Selector Api Level1
//window.onload =  function () {
window.addEventListener("load", function() {   
    //.getElementsByTagName();
    //.getElementsByClassName();
    var section3 = document.getElementById("section3") ;
    
    var txtX = section3.querySelector(".txt-x") ; //section3.querySelector("input[name]='x'") ; name으로 검색
    var txtY = section3.querySelector(".txt-y") ;
    var btnAdd = section3.querySelector(".btn-add") ;
    var txtSum = section3.querySelector(".txt-sum") ;
 
    btnAdd.onclick = function() {   // btnPrint.onclick = () => {
        var x =parseInt(txtX.value)  ;
        var y =parseInt(txtY.value)  ;
        txtSum.value = x+y ; 
    } ;

});
//}

//Ex2.엘리먼트선택방법개선하기
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

//Ex1.계산기 프로그램
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
