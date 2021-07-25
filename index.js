const div = document.getElementById("div")
const button = document.getElementById('button')
button.addEventListener('click', () =>{
    html2pdf()
    .from(div)
    .save()
})
    