let value= 0; 
document.getElementById("plus").addEventListener("click", function (){
 const pragraph = document.getElementById("para")
 value = value +=1;
 pragraph.innerText = value;
} );
document.getElementById("minus").addEventListener("click", function (){
  const pragraph = document.getElementById("para")
if(value <= 0) {
  alert("you enterd a wrong value");
}
else{
  value-=1;
  pragraph.innerText = value;
} } );

// add unorder list from Javascript
document.getElementById("submit").addEventListener("click", function(){
  const input = document.getElementById("input");
  const ul = document.getElementById("unorder");
  const li = document.createElement("li")
  const inputValue = input.value;
  li.setAttribute("id",inputValue);
  li.innerText = inputValue;
  ul.appendChild(li)
  input.value = ""

});
document.getElementById("delete").addEventListener("click", function (){
  const ul = document.getElementById("unorder");
  const input = document.getElementById("input");
  const inputValue = input.value;
  const list = document.getElementById(inputValue)
  ul.removeChild(list);
  input.value = ""

});
// calculetor
let valueF = 0;
let valueL = 0;
document.getElementById("sum").addEventListener("click", function(){
  // const paragph = document.getElementById("sum");
  const pragraph = document.getElementById("parah")
  const inputF = document.getElementById("inputF");
  const inputL = document.getElementById("inputL");
  const ValueF = inputF.value;
  const valueL = inputL.value;
  const sumvalue = ValueF + valueL;
  pragraph.innerText = sumvalue;

})