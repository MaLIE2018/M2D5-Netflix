const url = 'https://striveschool-api.herokuapp.com/api/movies/';

const insertData = async (event) => {
	event.preventDefault(); //for html form
	const payLoad = payLoadGenerator();
	//console.log(payLoad);
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDZhMGIxZjBmYjAwMTVkOTE2ZmIiLCJpYXQiOjE2MTkwMDMwNDEsImV4cCI6MTYyMDIxMjY0MX0.BUjunefP1cqV1viZCRo9wZf_AWri7aeJAYeJILezuJA',
				'Content-Type': 'application/json',
			},

			body: JSON.stringify(payLoad),
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		window.alert(error);
	}
};
const payLoadGenerator = () => {
	const name = document.querySelector('#input_name').value;
	const description = document.querySelector('#input_description').value;
	const category = document.querySelector('#input_category').value;
	const url = document.querySelector('#input_url').value;
	//const showType = document.querySelector('#input_showtype').value;
	const payLoad = {
		name: name,
		description: description,
		category: category,
		imageUrl: url,
	};
	return payLoad;
};

const editData = async (event) => {
	event.preventDefault();
};
