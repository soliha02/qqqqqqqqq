async function getComments() {
    await fetch("")
    .then(res=> res.json("https://jsonplaceholder.typicode.com/comments"))
    .then(json=> console.log(json));
    
} 
getComments()

function commentsView(commentlar){
    for (let i = 0; i< commentlar.length; i++) {

        const box = document.createElement('box')
        const comment = document.createElement('div')
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const email = document.createElement('h3')
        const nomi= document.createElement('h3')
        const p = document.createElement('p')
        img.src="https://cdn-icons-png.flaticon.com/512/2593/2593482.png"
    
    h2.textContent="id: "+commentlar[i].id;
    email.textContent="Email: "+commentlar[i].email;
    nomi.textContent="Name: "+commentlar[i].name;
    p.textContent=commentlar[i].body;
    comment.classList.add("comment")
    comment.appendChild(img)
    comment.appendChild(h2)
    comment.appendChild(email)
    comment.appendChild(p)
    
    box.appendChild(comment)
    
    }

}