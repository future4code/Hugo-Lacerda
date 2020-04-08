let postSect = document.getElementById('posts-sect');
let title = document.getElementById('title');
let author = document.getElementById('author');
let content = document.getElementById('content');
let img = document.getElementById('img');
let submit = document.getElementById('submit-post');
let postArray = new Array();

function createObject(title, author, content, img){
    const post = {
        title: title.value,
        author: author.value,
        image: img.value,
        content: content.value
    }

    storePost(post);

    publishPost(post);
}

function storePost(post){
    postArray.push(post);
}

function publishPost(post){
    let haveImage = false;
    let article = document.createElement('article');
    let h1 = document.createElement('h1');
    let image;
    if(img.value !== '' && (img.value.includes('.jpg') || img.value.includes('.jpeg') || img.value.includes('.png'))){
        image = document.createElement('img');
        image.src = img.value;
        haveImage = true;
    }
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    h1.innerText = post.title;
    h3.innerText = post.author;
    p.innerText = post.content;
    article.appendChild(h1);
    article.appendChild(h3);
    if(haveImage){
    article.appendChild(image);
    }
    article.appendChild(p);
    postSect.appendChild(article);
    haveImage = false;
}

function postIt(){

    if(author.value !== '' && title.value !== '' && content.value !== ''){
        createObject(title, author, content, img);
    }

    title.value = '';
    author.value = '';
    img.value = '';
    content.value = '';

}