// Instantiating EasyHTTP
const http = new EasyHTTP;

// Get prototype method
http.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6I4lFftSrdy3VTLAOHy/comments?item_id=item1')

	// Resolving promise for response data
	.then(data => console.log(data))

	// Resolving promise for error
	.catch(err => console.log(err));

/*
// Data for post request
const data = 
{
    item_id: "item1",
    username: "Susy",
    comment: "Hello"
}

// Post prototype method
http.post(
	'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6I4lFftSrdy3VTLAOHy/comments/',
	data)

	// resolving promise for response data
	.then(data => console.log(data))

	// resolving promise for error
	.catch(err => console.log(err));
*/