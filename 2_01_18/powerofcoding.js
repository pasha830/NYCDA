var title = document.createElement("h1"); 
document.body.appendChild(title); 
title.style.color = "red";
title.innerHTML = "The Power of Coding";

var h3 = document.createElement("h3");
document.body.appendChild(h3);
h3.innerHTML = "Introducing Kids to Coding at an Early Age";

var author = document.createElement("p");
document.body.appendChild(author);
author.style.fontStyle = "italic";
author.innerHTML = "by Jane Smith";

var date = document.createElement("p");
document.body.appendChild(date);
date.innerHTML = "Feb 1, 2018";
date.style.fontSize = "small";

var image1 = document.createElement("img");
document.body.appendChild(image1);
image1.setAttribute("src", "https://timedotcom.files.wordpress.com/2016/09/gettyimages-4975998901.jpg");
image1.style.width = "600px";

var br = document.createElement("br");
document.body.appendChild(br);

var para = document.createElement("p");
document.body.appendChild(para);
para.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
para.style.color = "grey";

var wallpaper = document.createElement("backgroundColor");
document.body.style.backgroundColor = "oldlace";