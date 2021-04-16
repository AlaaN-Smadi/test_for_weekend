

var calculator = prompt('please enter the process you need +, -, * or /');


while (calculator !=='+' && calculator !=='*' && calculator !== '-' && calculator !== '/'){
  calculator = prompt('please enter correct process you need +, -, * or /');
}


if (calculator == "+"){
  console.log("user entered +");
}else if (calculator == "-"){
 console.log("user entered -");
}else if (calculator == "/"){
 console.log("user entered /");
}else if (calculator == "*"){
 console.log("user entered *");
}

document.write('Your sign is    ' + calculator);