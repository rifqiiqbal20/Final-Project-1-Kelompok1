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
                    <i class="fa-solid fa-check deleteBtn"></i>
                  </div>
                </div>
                <div class="update-controller">
                 
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
