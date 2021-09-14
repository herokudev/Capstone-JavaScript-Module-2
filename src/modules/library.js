export default class EasyHTTP {

	// Make an HTTP GET Request
	async get(url) {

		// Awaiting for fetch response
		const response = await fetch(url);

		// Awaiting for response.json()
		const resData = await response.json();

		// Returning result data
		return resData;
	}

	// Make an HTTP POST Request
	async post(url, data) {

		// Awaiting for fetch response and
		// defining method, headers and body
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify(data)
		});

		// Awaiting response.json()
		const resData = await response.json();

		// Returning result data
		return resData;
	}
}
