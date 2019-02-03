// task 1
function  Recurs(el) {
    function drawBorder(el) {
        el.style.borderBottom = "17 px solid red";
    }
    function decParent(el) {
        drawBorder(el);
        var parent = el.parentNode;
        var id = el.getAttribute("id");
        if(!id) {
            setTimeout(() => {
                drawBorder(parent);
                decParent(parent);
                blockName.textContent += " " + parent.table },300);
        }
    }

    decParent(el);
}
var deepChild = document.querySelector(".deepChild");
var blockName = document.querySelector(".blockName");
Recurs(deepChild);

//task 2
function  rec2(el) {
    function drawRed(el) {
        el.style.borderBottom = "5px solid red"
    }
    function drawGreen(el) {
        el.style.border = '5px solid green';
    }
    function firstSibling(el){
        var tempObj=el.parentNode.firstChild;
        while(tempObj.nodeType!=1 && tempObj.nextSibling!=null){
            tempObj=tempObj.nextSibling;
        }
        return (tempObj.nodeType==1)?tempObj:false;
    }
    function nextSibling(firstSibling){
        var tempObj = firstSibling.nextSibling;
        while(tempObj.nodeType!=1 && tempObj.nextSibling!=null){
            tempObj = tempObj.nextSibling;
        }
        return (tempObj.nodeType==1)?tempObj:false;
    }
    function firstChild(nextSibling){
        var tempObj = nextSibling.firstChild;
        while(tempObj.nodeType!=1 && tempObj.nextSibling!=null){
            tempObj = tempObj.nextSibling;
        }
        return (tempObj.nodeType==1)?tempObj:false;
    }

}

//task 3
const dataTable = [
    {
        name: 'name1',
        value: '1'
    },
    {
        name: 'name2',
        value: '2'
    },
    {
        name: 'name3',
        value: '3'
    },
    {
        name: 'name4',
        value: '4'
    },
];

let table = '';

dataTable.forEach(() => {
    var cell = document.getElementById(x).rows[0].cells;
    document.write(cell[0].innerHTML);

})
