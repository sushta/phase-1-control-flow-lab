

function scuberGreetingForFeet(ride){
  let result;
  if ( ride <= 400){
    result = 'This one is on me!'
  }
  else if(ride > 400 && ride <= 2000){
   result = 'That will be twenty bucks.'
  }
  else if(ride > 2000 && ride <= 2500){
    result = 'I will gladly take your thirty bucks.'
  }
  else {
    result = 'No can do.'
  }
  return result;


}

function ternaryCheckCity(city){
  
  let message = (city === 'NYC') ? ('Ok, sounds good.') : ('No go.');
  return message;
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  let response = '';
switch (tip) {
  case 'generous':
    response = 'Thank you so much.'
    break;

  case 'not as generous':
    response = 'Thank you.'
    break;
  

  default:
    response = 'Bye.'
}
return response;
}