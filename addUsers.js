var users = [
	{
		name: 'Brook',
		scores: 75,
		skills: ['HTM', 'CSS', 'JS'],
		age: 16
	},
	{
		name: 'Alex',
		scores: 80,
		skills: ['HTM', 'CSS', 'JS'],
		age: 18
	},
	{
		name: 'David',
		scores: 75,
		skills: ['HTM', 'CSS'],
		age: 22
	},
	{
		name: 'Sara',
		scores: 95,
		skills: ['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name: 'Martha',
		scores: 80,
		skills: ['HTM', 'CSS', 'JS'],
		age: 18
	},
	{
		name: 'Thomas',
		scores: 90,
		skills: ['HTM', 'CSS', 'JS'],
		age: 20
	},
	{
		name: 'John',
		scores: 85,
		skills: ['HTM'],
		age: 25
	}
]
// Function to addUser
function addUser(users, newUser) {

	var a = users.every(value => Object.is(value.name, newUser.name)) //Comparing two objects property name
	
	if (!a) {
		users.push(newUser);
		return users;
	}
	else {
		return 'user Exist'
	}
}
newUser = {
	name: 'Jon',
	scores: 85,
	skills: ['HTM'],
	age: 25
}
console.log(addUser(users, newUser));