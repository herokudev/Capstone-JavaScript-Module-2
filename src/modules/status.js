const likesList = [];
const commentsList = [];

class StatusCheck {
    loadlikes = () => {
        fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6I4lFftSrdy3VTLAOHy/likes/', {
            method: 'GET',
          })
            .then((response) => response.json())
            .then((data) => popuplateLikes(data));
      }

      loadcomments = (item_id) => {
        fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/w6I4lFftSrdy3VTLAOHy/comments?item_id=' + item_id, {
            method: 'GET',
          })
            .then((response) => response.json())
            .then((data) => popuplateComments(data));
      }      
}

function popuplateLikes(items) {
  console.log("start ---> " + items.length);    
  items.forEach((item) => {
    let itemObject = { item_id: '', likes: '' };
    itemObject.item_id = item.item_id;
    itemObject.likes = item.likes;
    likesList.push(itemObject);
  });  
  console.log(likesList);
}

function popuplateComments(items) {
  console.log("start ---> " + items.length);    
  items.forEach((item) => {
    let itemObject = { username: '', comment: '', creation_date: '' };
    itemObject.username = item.username;
    itemObject.comment = item.comment;
    itemObject.creation_date = item.creation_date;
    commentsList.push(itemObject);
  });  
  console.log(commentsList);
}

const statusCheck = new StatusCheck();
export { statusCheck as default };