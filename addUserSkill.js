var users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	]

	function updateUser(users,str,newSkill){

		for(let i=0;i<users.length;i++){
		
			if(users[i].name===str){
		
				let newUpdate=Object.assign({},users[i],{skills:[...['HTM', 'CSS', 'JS'], newSkill]})
		
				console.log(users[i])
		
				console.log("")
		
				console.log(newUpdate)
			}
		}
	}
	updateUser(users,'Thomas','cde')