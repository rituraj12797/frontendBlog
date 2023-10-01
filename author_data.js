var ham = document.querySelector('.ico2');
var cross = document.querySelector('.ico3');
var follow_button = document.querySelector('.follow')
var blog_data = document.querySelector('.blog_data');
var follower_data = document.querySelector('.followers_data');
var blogs = document.querySelector('.blogs');
var followers = document.querySelector('.followers');
var follower_object = {
    follower_number: 0,
}
blog_data.classList.add('expand');
follower_data.classList.add('collapse');
function expand() {
    follower_data.classList.toggle('collapse');
    follower_data.classList.toggle('expand');
    blog_data.classList.toggle('collapse');
    blog_data.classList.toggle('expand');
}
blogs.addEventListener('click', () => {
    if (!blog_data.classList.contains('expand')) {
        expand();
        active_button();
    }
});
followers.addEventListener('click', () => {
    if (!follower_data.classList.contains('expand')) {
        expand();
        active_button();
    }
});
blogs.classList.add('active_button');
function active_button() {
    followers.classList.toggle('active_button')
    blogs.classList.toggle('active_button')
}

follow_button.addEventListener('click', (event) => {
    event.preventDefault;

    if (follower_object.follower_number == 0) {
        follow_button.textContent = "Following";
        event.target.style.cssText = "background-color:#383838;color:#ffc700"
        follower_object.follower_number = 1;
    }
    else if (follower_object.follower_number == 1) {
        alert(" you really want to unfollow ?")
        follow_button.textContent = "Follow+";
        event.target.style.cssText = "background-color:#ffc700;color:black"
        follower_object.follower_number = 0;
    }
})

function switches() {

    var ham = document.querySelector('.ico2');
    var cross = document.querySelector('.ico3');
    ham.classList.toggle('wrap');
    cross.classList.toggle('wrap');
    hide_nav();
}
function hide_nav() {
    document.querySelector('.vertical_navbar').classList.toggle('visible_verticle_navbar');
}
ham.addEventListener('click', switches);
cross.addEventListener('click', switches);

var translate = {
    value: 0
}

/* initially setting the value o finput */
var username = document.querySelector('#name_input');
var slug = document.querySelector('#slug');
var bio = document.querySelector('#bio');
var link = document.querySelector('#la');

link.disabled = true;
slug.disabled = true;
username.disabled = true;
bio.disabled = true;

link.textContent = "https://www.linkedin.com/in/ritu-raj-67b378175/"
bio.defaultValue = " hey world i am jp morgan from california i love blogging and coding stuff";
slug.defaultValue = "/morgan-2004";
username.defaultValue = "J P Morgan";
console.log(" hello world")


function follower() {
    // async function image() {
    //     data = 
    // }
    var follower_no = 1;
    var username = "ritu raj";
    var user_slug = "/morgan_2005";
    var user_blog_count = 64;
    var follower_container = document.querySelector('.follower_container');
    var follower_component = `<div class="${follower_no} follower">
<div class="logo">
    <i class="fa-solid fa-circle-user     user_logo" style="color: #ffc700;"></i>
</div>
<div class="info">
    <div class="name_user">${username}</div>
    <div class="follower_data">
        <div class="slug_tag"> <span class="slug_text_small">Slug:</span> ${user_slug}</div>
        <div class="blog_no">
            <span>Blogs: </span> <span id="blog_count"> ${user_blog_count} </span>
        </div>
    </div>
</div>
<a class="follow" style="color:#000000;text-decoration:none;display:flex;justify-content:center;align-items:center;" href="author_data.html">view</a>

</div>`
    follower_container.innerHTML += follower_component;
}

follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();
follower();


function blog_component() {
    var title = "mecha";
    var discription = "rhbcxxhjvbhvhjvbcxhx hxch vitae deserunt adipisci reiciendis quia sint quasi, architecto voluptatum quis! vitae deserunt adipisci reiciendis quia sint quasi, architecto voluptatum quis! cxhjxhjgzghjbvb hjz vj";
    var genre = "Technology";
    var like_count = 64;
    var blog_count = 1;
    var blog_container = document.querySelector('.blogs_container');
    var blog_component = ` <div class="user_blog ${blog_count}">

<div class="blog_image">
</div>
<div class="blog_desc">
    <div class="title">${title}</div>

    <div class="blog_cat_and_like">
        <div class="caetogry">${genre}</div>
        <div class="likes">Likes: <span class="like">${like_count}</span> </div>
    </div>
    <div class="Brief">${discription}
    </div>
    <div class="view">
        <div id="view_text">
           <a href="./blogRead.html" id="read_more_button"> Read more </a>
        </div>
    </div>
</div>
</div>`
    blog_container.innerHTML += blog_component;
}
blog_component();
blog_component();

blog_component();

blog_component();

blog_component();

blog_component();

blog_component();

blog_component();
blog_component();
blog_component();


