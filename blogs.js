// declaring variable s
var body = document.querySelector('body');
var ham = document.querySelector('.ico2');
var cross = document.querySelector('.ico3');
var sort_button = document.querySelector('.sort');

// drop angle for arrow of sortby
var angle_drop = {
    value: 0
}
sort_button.addEventListener('click', () => {
    document.querySelector('.sorting_method').classList.toggle('expand_sort')
    angle_drop.value += 180

    document.querySelector('.drop_icon').style.cssText = `transform:rotate(${angle_drop.value}deg)`
})





// for nav
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


// sorting algo







// passing components
function pass_blog(blog_index,image,category,likes,Title,blog_discription,author,Date){
    var blog_container=document.querySelector('.blog_container')
    var date_attribute = string_to_date(Date)
    var blog_content = `<div Date=${date_attribute} class="blog_${blog_index} blog" category=${category} likes=${likes}>
<div class="background bg${blog_index}" style="background-image:url(${image})">
    ${Title}
</div>
<div class="blog_disc">
    <div class="overview">Overview</div>
    <div class="blog_discription">${blog_discription}
    </div>
    <div class="Read">
        <a class="author" style="color:#ffc700;text-decoration:none;" href="./author_data.html">Written By: ${author}</a>
        <div class="caetogry">
            ${category}
        </div>
        <a class="Read_blog" href="./blogRead.html" style="color:#000000;text-decoration:none;" > Read</a>
        <div class="likes">Likes:  <span class="likes_blog_1">${likes}</span></div>
        <div class="date" >Date: ${Date}</div>
    </div>
</div>
</div>`
blog_container.innerHTML+=blog_content;
let blog_list=document.querySelectorAll('.blog');
var body_height= parseInt(getComputedStyle(document.querySelector('body')).getPropertyValue('height'),10);
var screen_height = window.innerHeight;

if(blog_list.length>6){
    let new_height = body_height + screen_height;
    body.style.cssText=`height:${new_height}px`;
}; 
}
var response_array =[
    {
        image:'./assets/blog1.jpg',
        blog_index:1,
        category:"Technology",
        Likes:64,
        Title:" Latest headphones",
        blog_discription:"The latest headphones redefine auditory excellence. Meldingtop-tier noise cancellation, immersive soundscapes, and ergonomic design, they cater toaudiophiles and professionals alike. Bluetooth connectivity streamlines device linking, andextended battery life ensures uninterrupted listening. A symphony of cutting-edge featuresand sonic brilliance, these headphones stand as a testament to the evolution of audiotechnology.",
        author:"ritu raj",
        Date:"12-05-2023"
    },
    {
        image:'./assets/blog2.jpg',
        blog_index:2,
        category:"Technology",
        Likes:64,
        Title:" Mechatrons ",
        blog_discription:">Mechatrons refer to mechanical or electromechanical systems thatcombine mechanical engineering, electronics, and computing to create sophisticated andversatile robotic systems. These systems often involve intricate designs, precise controlmechanisms, and intelligent programming to perform various tasks. Mechatrons findapplications in industries like manufacturing, healthcare, aerospace, and more, showcasingthe integration of mechanics and electronics for innovative and efficient automationsolutions.",
        author:"ritu raj",
        Date:"02-02-2023"
    },
    {
        image:'./assets/blog3.jpg',
        blog_index:3,
        category:"architectural",
        Likes:144,
        Title:" The Pyramids of Giza",
        blog_discription:"The latest headphones redefine auditory excellence. Meldingtop-tier noise cancellation, immersive soundscapes, and ergonomic design, they cater toaudiophiles and professionals alike. Bluetooth connectivity streamlines device linking, andextended battery life ensures uninterrupted listening. A symphony of cutting-edge featuresand sonic brilliance, these headphones stand as a testament to the evolution of audiotechnology.",
        author:"ritu raj",
        Date:"12-05-2023"
    },
    {
        image:'./assets/blog4.jpg',
        blog_index:4,
        category:"science-fiction",
        Likes:20,
        Title:" Colonizing Mars ",
        blog_discription:"Colonizing Mars involves establishing human settlements on the RedPlanet. This ambitious idea envisions creating self-sustaining habitats, utilizing localresources, and addressing challenges like radiation, low gravity, and extreme temperatures.Achieving this would require advanced technology, life support systems, and internationalcooperation. While it remains a complex and distant goal, the concept sparks discussionsabout humanity's potential to become a multi-planetary species and the innovation requiredto make interplanetary colonization a reality.",
        author:"ritu raj",
        Date:"04-03-2022"
    },
    {
        image:'./assets/blog5.jpg',
        blog_index:5,
        category:"Entertainment",
        Likes:50,
        Title:"Darkseids",
        blog_discription:"Darkseid is a powerful fictional supervillain in the DC Comicsuniverse. Created by writer-artist Jack Kirby, Darkseid is the ruler of the planet Apokolipsand seeks to conquer the universe by obtaining the Anti-Life Equation, a concept that grantscontrol over all living beings. He's known for his immense strength, advanced technology,and control over an army of Parademons. Darkseid often clashes with iconic DC superheroeslike Superman, Batman, and the Justice League, making him one of the most iconic andformidable adversaries in the DC Comics canon.",
        author:"ritu raj",
        Date:"01-09-2022"
    },
    {
        image:'./assets/blog6.jpg',
        blog_index:6,
        category:"Technology",
        Likes:64,
        Title:" Silicon valley",
        blog_discription:"Silicon Valley, located in the southern part of the San FranciscoBay Area in California, USA, is a renowned global hub for technology, innovation, andentrepreneurship. Home to numerous tech giants, startups, and venture capital firms, it hasplayed a pivotal role in shaping the digital age. Silicon Valley's ecosystem fosterscollaboration, attracting top talent and investment, driving advancements in fields such assoftware, semiconductors, artificial intelligence, and biotechnology, influencing industries worldwide.",
        author:"ritu raj",
        Date:"12-09-2023"
    }

]
let disc =" The latest headphones redefine auditory excellence. Meldingtop-tier noise cancellation, immersive soundscapes, and ergonomic design, they cater toaudiophiles and professionals alike. Bluetooth connectivity streamlines device linking, andextended battery life ensures uninterrupted listening. A symphony of cutting-edge featuresand sonic brilliance, these headphones stand as a testament to the evolution of audiotechnology.";
pass_blog(response_array[0].blog_index,response_array[0].image,response_array[0].category,response_array[0].Likes,response_array[0].Title,response_array[0].blog_discription,response_array[0].author,response_array[0].Date);
pass_blog(response_array[1].blog_index,response_array[1].image,response_array[1].category,response_array[1].Likes,response_array[1].Title,response_array[1].blog_discription,response_array[1].author,response_array[1].Date);
pass_blog(response_array[2].blog_index,response_array[2].image,response_array[2].category,response_array[2].Likes,response_array[2].Title,response_array[2].blog_discription,response_array[2].author,response_array[2].Date);
pass_blog(response_array[3].blog_index,response_array[3].image,response_array[3].category,response_array[3].Likes,response_array[3].Title,response_array[3].blog_discription,response_array[3].author,response_array[3].Date);
pass_blog(response_array[4].blog_index,response_array[4].image,response_array[4].category,response_array[4].Likes,response_array[4].Title,response_array[4].blog_discription,response_array[4].author,response_array[4].Date);
pass_blog(response_array[5].blog_index,response_array[5].image,response_array[5].category,response_array[5].Likes,response_array[5].Title,response_array[5].blog_discription,response_array[5].author,response_array[5].Date);
pass_blog(response_array[5].blog_index,response_array[5].image,response_array[5].category,response_array[5].Likes,response_array[5].Title,response_array[5].blog_discription,response_array[5].author,response_array[5].Date);
pass_blog(response_array[5].blog_index,response_array[5].image,response_array[5].category,response_array[5].Likes,response_array[5].Title,response_array[5].blog_discription,response_array[5].author,response_array[5].Date);



var blogContainer = document.querySelector('.blog_container')
var blog_nodelist = document.querySelectorAll('.blog')
var Category_sort = document.querySelector('.sorting_meth1');
var Like_sort = document.querySelector('.sorting_meth2');
var blogs = document.querySelectorAll('.blog');
var array_of_objects = [];
var sortDateLatest = document.querySelector('.sorting_meth3');
var sortDateOldest = document.querySelector('.sorting_meth4');

for(let i=0;i<blog_nodelist.length;i++){
    array_of_objects.push(blog_nodelist[i]);
}

function sort_by_likes() {
    array_of_objects.sort((a, b) => {
        return parseInt(b.getAttribute("likes"))-parseInt(a.getAttribute("likes"));
    });
     
    blogContainer.innerHTML='';
    array_of_objects.forEach(element => {
        blogContainer.appendChild(element);
    });
    console.log(array_of_objects)
}
function sort_by_category() {
    array_of_objects.sort((a, b) => {
        a.setAttribute("category",a.getAttribute("category").toUpperCase())
        b.setAttribute("category",b.getAttribute("category").toUpperCase())
       return    a.getAttribute("category").charCodeAt(0)-b.getAttribute("category").charCodeAt(0)
    }
    )
    blogContainer.innerHTML='';
    array_of_objects.forEach(element => {
        blogContainer.appendChild(element);
    });
    console.log(array_of_objects)
}
function sort_by_date_latest(){
    array_of_objects.sort((a, b) => {
       return    b.getAttribute("Date")-a.getAttribute("Date")
    }
    )
    blogContainer.innerHTML='';
    array_of_objects.forEach(element => {
        blogContainer.appendChild(element);
    });
    console.log(array_of_objects)
}
function sort_by_date_oldest(){
    array_of_objects.sort((a, b) => {
       return    a.getAttribute("Date")-b.getAttribute("Date")
    }
    )
    blogContainer.innerHTML='';
    array_of_objects.forEach(element => {
        blogContainer.appendChild(element);
    });
    console.log(array_of_objects)
}
Category_sort.addEventListener('click',sort_by_category);
Like_sort.addEventListener('click',sort_by_likes);
sortDateLatest.addEventListener('click',sort_by_date_latest);
sortDateOldest.addEventListener('click',sort_by_date_oldest);
 // expect that date is in the form dd-mm-yyyy as string 
function string_to_date(str){
    var [day_str,month_str,year_str] = str.split('-');
    let day=parseInt(day_str);
    let month=parseInt(month_str);
    let year=parseInt(year_str);
    let date_uploaded = new Date();
    date_uploaded.setDate(day)// from api we will set the date
    date_uploaded.setMonth(month)// from api 
    date_uploaded.setYear(year)// from api
    var datime = date_uploaded.getTime()
    return datime;
}

