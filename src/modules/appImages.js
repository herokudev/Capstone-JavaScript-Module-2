// Instantiating EasyHTTP
const http = new EasyHTTP;
const showList = [];

// Get prototype method
http.get('https://api.tvmaze.com/shows')

	// Resolving promise for response data
	.then(data => popuplateList(data))

	// Resolving promise for error
	.catch(err => console.log(err));

function popuplateList(items) {
    console.log("start ---> " + items.length);    
    items.forEach((item) => {
        let tvShow = { id: '', title: '', rating: '', image: '' };
        tvShow.id = item.id;
        tvShow.title = item.name;
        tvShow.rating = item.rating.average;
        if (item.image !== null) {
            tvShow.image = item.image.medium;
        }           
        if (item.rating.average < 6.5) {
            showList.push(tvShow);
        }
    });  
    console.log(showList);  
    console.log("finish ---> ");
    
}
    