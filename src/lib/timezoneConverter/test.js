let d = new Date();
console.log(d);
console.log(d.toString());

// another toLocaleString to convert to user's selected primary location

let userSelectedLoc = d.toLocaleString('en-US', {
	timeZone: 'Europe/Rome'
});
console.log(userSelectedLoc);

// converts from user's local time to selected final destination
let usTime = d.toLocaleString('en-US', {
	timeZone: 'America/New_York' // input of the user
});
console.log(usTime);

// using a different format
let intlDateObj = new Intl.DateTimeFormat('en-US', {
	timeZone: 'America/New_York',
	hour12: false, // can change clock style
	timeZoneName: 'shortOffset' // either timeZoneName or dateStyle and timeStyle. doesnt work together
});

let usTimeDiff = intlDateObj.format(d);
console.log(usTimeDiff);

let intlDateObj2 = new Intl.DateTimeFormat('en-US', {
	timeZone: 'America/New_York',
	hour12: false, // can change clock style
	dateStyle: 'short', // full/ long / medium / short
	timeStyle: 'medium' // full/ long / medium / short
});
let usTimeDiff2 = intlDateObj2.format(d);
console.log(usTimeDiff2);
