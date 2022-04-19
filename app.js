// while and do  while loop
// while loop is faster then for loop in big projects
/*var b=0;
while(b<10)
{
    document.write("you are <br>");
    b++;
}
var c=0;
do
{
    document.write(c);
    c++;
}
while (c<10);
*/

//*********** Events in JavaScript */
//calling function in html
// function hy(a)
// {
//     alert(a);
// }
// function getName()
// {
//     var name=document.getElementById("name").value;
//     alert(name);
//     //also name.value b kr sktay hyn
//     name.value =""
// }

// //set value
// function setName()
// {
//     var name=document.getElementById("name");
//     name.value="hello";
//     var para=document.getElementById("par");
//     para.innerHTML="a quick brown fox jumps over the lazy dog "
// }
// setName()

function getNumber(num)
{
    // console.log(num);
var number=document.getElementById("result");
 number.value +=num;
}

function clearResult()
{
var number=document.getElementById("result");
    number.value="";
}

function getResult()
{
var result=document.getElementById("result");
// console.log(result.value);
// eval. it is a function that calculate the answer
result.value=eval(result.value);
}
