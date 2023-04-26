const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.querySelector("#enter").addEventListener("click", () => {
  const item = document.querySelector("#item")
  createItem(item)
})

document.querySelector("#item").addEventListener("keypress", (e) => {
  if(e.key === "Enter"){
    const item = document.querySelector("#item")
    createItem(item)
  }
})

function displayDate(){
  let date = new Date()
  date = date.toString().split(" ")
  date = date[1] + " " + date[2] + " " + date[3] 
  document.querySelector("#date").innerHTML = date 
}

function displayItems(){
  let items = ""
  for(let i = 0; i < itemsArray.length; i++){
    items += `<div class="item">
                <div class="input-controller">
                  <textarea disabled>${itemsArray[i]}</textarea>
                  <div class="edit-controller">
                  <i class="deleteBtn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/></svg>             </div>
  </i>             
  </div>
                </div>
              </div>`
  }
  document.querySelector(".to-do-list").innerHTML = items
  activateDeleteListeners()

}

function activateDeleteListeners(){
  let deleteBtn = document.querySelectorAll(".deleteBtn")
  deleteBtn.forEach((dB, i) => {
    dB.addEventListener("click", () => { deleteItem(i) })
  })
}


function createItem(item){
  itemsArray.push(item.value)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}

function deleteItem(i){
  itemsArray.splice(i,1)
  localStorage.setItem('items', JSON.stringify(itemsArray))
  location.reload()
}



window.onload = function() {
  displayDate()
  displayItems()
};

let leter = 0;
const text = "Silahkan Isi My Toddo List...."
function typetext(){
          if (leter < text.length) {
                    document.getElementById('typing').innerHTML += text.charAt(leter);
                    leter++;
                    let speed = Math.floor(Math.random() * 200) + 1;
                    setTimeout(typetext, speed);
          }
}
typetext()