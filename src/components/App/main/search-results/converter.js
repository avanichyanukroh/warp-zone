	let genreMap = {};

for (let i = 0; i <= 33; i ++) {

	const settings = {

		url: "https://cors-anywhere.herokuapp.com/https://api-endpoint.igdb.com/genres/" + i + "?fields=name",
		type: 'GET',
		dataType: 'json',
		header: {
			"user-key": "15870042b514b393825fc09f6b04056b",
			"accept": "application/json"
		},
		contentType: 'application/json; charset= utf-8',
		success: function(data) {
			genreMap[i] = data.name;
		}
	};

	$.ajax(settings);
};

console.log(genreMap);