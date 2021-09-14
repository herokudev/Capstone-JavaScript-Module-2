const showList = [];
const tasksList = document.querySelector('#show-card-holder');

class AppData {
    loadImages = () => {
        fetch('https://api.tvmaze.com/shows', {
            method: 'GET',
          })
            .then((response) => response.json())
            .then((data) => popuplateList(data));
      }
}

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
    const element = document.createElement('img');
    element.src = showList[0].image;
    tasksList.appendChild(element);
    console.log(showList);    
}

const appdata = new AppData();
export { appdata as default };