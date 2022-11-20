const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url).then((data)=>{
   return data.json()

}).then((res)=>{
    return res;
}).then((element)=>{

    element.forEach((output)=>{
const { userId, id,title,body}=output;

let tbody = document.querySelector("tbody");
let create_tr = document.createElement("tr")
let create_td_1 =document.createElement("td")
let create_td_2 =document.createElement("td")
let create_td_3 =document.createElement("td")
let create_td_4 =document.createElement("td")

create_td_1.innerText=userId;
create_td_2.innerText=id;
create_td_3.innerText=title;
create_td_4.innerText = body;
create_tr.append(create_td_1,create_td_2,create_td_3,create_td_4);

tbody.appendChild(create_tr);


    })
})