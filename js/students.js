var Student = function(name, formerly){
	{
	this.name = name;
	this.formerly = formerly;
	}
}

console.log(typeof(Student));
console.log(Student);

var students = [];

students.push(new Student("Tristan", "Stock Guy"));
students.push(new Student("Joshua", "iOS Student"));
students.push(new Student("Bogdan", "Mechanic"));
students.push(new Student("Lazlo", "KGB"));
students.push(new Student("Keith", "Geologist"));
students.push(new Student("Will", "Skiing Ninja"));
students.push(new Student("Curtis", "IT Master"));
students.push(new Student("Joe", "The Controller"));
students.push(new Student("Kochan", "Demon Deacon"));
students.push(new Student("Patrick", "Outlaw"));
students.push(new Student("Jonathan", "Boring Linguist"));
students.push(new Student("Jeremy", "Magnum PI"));