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

select();

// 00000000 FUNZIONI 00000000

function select() {
	const main = document.querySelector('main');
	const mySelect = document.getElementById('type-select').value;

	switch (mySelect) {
		case 'animals':
			console.log('animals');
			main.innerHTML = '';
			icons.filter((element) => {
				if (element.type == 'animal') {
					main.innerHTML += `
					<div class="card">
						<div class="icon-container">
							<i class="${element.family} ${element.prefix}${element.name}"></i>
							<span class="icon-label">${element.name}</span>
						</div>
					</div>`
				}
			});
			break;

		case 'fruits':
			console.log('fruit');
			main.innerHTML = '';
			icons.filter((element) => {
				if (element.type == 'fruit') {
				main.innerHTML += `
				<div class="card">
					<div class="icon-container">
						<i class="${element.family} ${element.prefix}${element.name}"></i>
						<span class="icon-label">${element.name}</span>
					</div>
				</div>`
				}
			});
			break;

		case 'people':
			console.log('people');
			main.innerHTML = '';
			icons.filter((element) => {
				if (element.type == 'user') {
				main.innerHTML += `
				<div class="card">
					<div class="icon-container">
						<i class="${element.family} ${element.prefix}${element.name}"></i>
						<span class="icon-label">${element.name}</span>
					</div>
				</div>`
				}
			});
			break;

		default:
			console.log('all');
			main.innerHTML = '';
			icons.forEach((element) => {
				main.innerHTML += `
					<div class="card">
						<div class="icon-container">
							<i class="${element.family} ${element.prefix}${element.name}"></i>
							<span class="icon-label">${element.name}</span>
						</div>
					</div>
				`
			});
			break;
	}
}

