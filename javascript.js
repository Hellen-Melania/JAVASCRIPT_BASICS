//task 1

var name = prompt('Please, enter your name '),
    place = prompt('Please, enter the party  '), 
    time = prompt('Please, enter time '),
    party = prompt('Please, enter the place ');

console.log(name + ' is going to ' + place + ' at ' + time + ' in ' + party + '!');
//ex: Hellen is going to club at 23.00 in Lviv!

//task 2

var x1 = 0, 
	y1 = 0,
	result,
	X2 = prompt('Please enter X2 '),
	Y2 = prompt('Please enter Y2 '),
	xdiff = X2 - x1,
	ydiff = Y2 - y1;

	result = Math.pow((xdiff * xdiff + ydiff * ydiff), 0.5);
	console.log('The distance between points A(' + x1 + ',' + y1 +') and B(' + X2 + ',' + Y2 +') is ' + result +'.');	

//task 3

var sharp = '#', space = '';

for( var i = 0; i < 9; i++){
	space += sharp;
	console.log(space);  
}

//task 4

var i = 0;
	while(i != 7){
		var line = '', j = 0;

		while(j != 7){
			if(i % 2 == 0){
				line = line + ' #';
			}
			else{
				if(i % 2 == 1){
					line = line +'# ';
				}
			}
			j++;
		}
		i++;
		console.log(line);
	}

//task 5 Guess number

var randomNunber = parseInt(Math.random() * 100, 10 );
console.log('Random number is ' + randomNunber);
var userGessNum = prompt('Please enter your number');


while(randomNunber){
// check if not empty 
	if (userGessNum == ''){
 		alert('You have not enered the number. Please, enter your number.');
 		userGessNum = prompt('Please, enter your number again');
 	}
	if (userGessNum < randomNunber ){
		alert('Our number is higher, try again');
		userGessNum = prompt('Please, enter your number again');

		if(userGessNum === randomNunber){
			alert('You are right, the number is ' + randomNunber + '!');
			break;
		}
	} 
	else if(userGessNum > randomNunber ){
		alert('Our number is lower, try again');
		userGessNum = prompt('Please, enter your number again');
		if(userGessNum === randomNunber){
			alert('You are right, the number is ' + randomNunber + '!');
			break;
		}
	}
	else{
		alert('You are right, the number is ' + randomNunber + '!');
		break;
	}
}
