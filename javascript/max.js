var first = prompt('please enter the first number');
var second = prompt('please enter the second number');
var third = prompt('please enter the third number');


var max;
var a=Number(first);
var b=Number(second);
var c=Number(third);


if (a>b && a>c){
  max = a;
}else if(b>a && b>c){
  max = b;
}else if(c>a && c>b){
  max = c;
}

document.write('maximum number is ' + max);

// if (first >= second) {
//   if (first >= third) {
//     max = first;
//   }
// }else{
//   if(second>=third){
//     max=second;
//   }
// }

