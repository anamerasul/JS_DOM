console.log("sumary");


const blogs=document.getElementsByTagName('p');
console.log(blogs);

for(const blog of blogs){
                    console.log(blog);
blog.style.backgroundColor="steelblue";
blog.style.color="white";
}

const Incidunt=document.getElementById("special-blog");

// Incidunt.innerText="new incident";
Incidunt.innerHTML=`<h4>gfkjhd</h4>
<div>
<ul>
<li>ami</li>
<li>ami2</li>
</ul>
</div>`

const friends =document.getElementById('friends');
console.log(friends);
console.log(friends.childNodes);
console.log(friends.children);

const fifth =friends.children[4];
console.log(fifth);

friends.removeChild(fifth);
console.log(fifth);

//create element
const friend= document.createElement('li');
friend.innerText="friends 9";
friends.appendChild(friend);