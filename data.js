const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'fruit',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'fruit',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'fruit',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'fruit',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

icons.forEach((element) => element.color = randomColor());

select();





// 00000000 FUNZIONI 00000000

// serve per generare dinamicamente le icone all'interno del container in base al valore del select
function select() {
	const main = document.querySelector('main');
	const mySelect = document.getElementById('type-select').value;

	switch (mySelect) {
		case 'animals':
			main.innerHTML = '';
			icons.filter((element) => {
				if (element.type == 'animal') {
					main.innerHTML += `
					<div class="card">
						<div class="icon-container">
							<i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color};" ></i>
							<span class="icon-label">${element.name}</span>
						</div>
					</div>`
				}
			});
			break;

		case 'fruits':
			main.innerHTML = '';
			icons.filter((element) => {
				if (element.type == 'fruit') {
				main.innerHTML += `
				<div class="card">
					<div class="icon-container">
						<i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color};" ></i>
						<span class="icon-label">${element.name}</span>
					</div>
				</div>`
				}
			});
			break;

		case 'people':
			main.innerHTML = '';
			icons.filter((element) => {
				if (element.type == 'user') {
				main.innerHTML += `
				<div class="card">
					<div class="icon-container">
						<i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color};" ></i>
						<span class="icon-label">${element.name}</span>
					</div>
				</div>`
				}
			});
			break;

		default:
			main.innerHTML = '';
			icons.forEach((element) => {
				main.innerHTML += `
					<div class="card">
						<div class="icon-container">
							<i class="${element.family} ${element.prefix}${element.name}" style="color: ${element.color};" ></i>
							<span class="icon-label">${element.name}</span>
						</div>
					</div>
				`
			});
			break;
	}
}

// serve per generare un codice colore HEX a caso
function randomColor() {
	const character = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
	let newColor = '#';
	for (let i = 0; i < 6; i++) {
		newColor += character[Math.floor(Math.random() * (character.length))]; 
	}
	return newColor;
}