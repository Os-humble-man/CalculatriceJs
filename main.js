const inputData = document.getElementById('inputData');
let expression ='';
function FbntClick(num){
    expression +=num;
    inputData.value = expression;
}

function egal(){
    inputData.value = eval(expression);
    expression = '';
}

function sup(){
    expression ='';
    inputData.value = expression;
}