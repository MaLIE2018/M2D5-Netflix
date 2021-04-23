const url = 'https://striveschool-api.herokuapp.com/api/movies/' + category; //API URL

const fetchProduct = async () => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Authorization:
					'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDgwMDZhMGIxZjBmYjAwMTVkOTE2ZmIiLCJpYXQiOjE2MTkwMDMwNDEsImV4cCI6MTYyMDIxMjY0MX0.BUjunefP1cqV1viZCRo9wZf_AWri7aeJAYeJILezuJA',
			},
		});
		const data = await response.json();
		console.log(data).category;
		// data.forEach((element) => {
		// 	displayData(element);
	} catch (error) {
		console.log(error);
	}
};

fetchProduct();
