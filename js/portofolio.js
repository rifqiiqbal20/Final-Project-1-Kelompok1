const myForm = document.getElementById('my-form')
const fname = document.getElementById('fname-text')
const pname = document.getElementById('pname-text')
const availability = document.getElementById('availability')
const usia = document.getElementById('usia')
const lokasi = document.getElementById('lokasi')
const pengalaman = document.getElementById('pengalaman')
const email = document.getElementById('email')


const buttonSubmit = document.getElementById('my-button')
const myBox = document.getElementById('my-box')

let isLowerBracketShow = true

myForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const currentName = myForm.elements.fname.value
  const currentProfession =  myForm.elements.pname.value
  const currentProfession1 = myForm.elements.availability.value
  const currentProfession2 = myForm.elements.usia.value
  const currentProfession3 = myForm.elements.lokasi.value
  const currentProfession4 = myForm.elements.pengalaman.value
  const currentProfession5 = myForm.elements.email.value

  // console.log(currentName, currentProfession)
  fname.innerHTML = currentName
  pname.innerHTML = currentProfession
  availability.innerHTML = currentProfession1
  usia.innerHTML = currentProfession2
  lokasi.innerHTML = currentProfession3
  pengalaman.innerHTML = currentProfession4
  email.innerHTML = currentProfession5

  toggleBox()
})

function toggleBox () {
  if(isLowerBracketShow) {
    isLowerBracketShow = false
    myBox.classList.remove('hide')
  } else {
    isLowerBracketShow = true
    myBox.classList.add('hide')
  }
}

buttonSubmit.addEventListener('click', (event) => {
  event.preventDefault()
  toggleBox()
})

btn =document.getElementById('submit');
btn.addEventListener('click', function(){
      let timerInterval
      Swal.fire({
      title: 'Terima kasih',
      html: 'I will close in <b></b> milliseconds.',
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
      }, 100)
      },
      willClose: () => {
      clearInterval(timerInterval)
      }
      }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
      }
      })
})

//android--------------------------------
const myForm2 = document.getElementById('my-form2')
const fname2 = document.getElementById('fname-text2')
const pname2 = document.getElementById('pname-text2')
const availability2 = document.getElementById('availability2')
const usia2 = document.getElementById('usia2')
const lokasi2 = document.getElementById('lokasi2')
const pengalaman2 = document.getElementById('pengalaman2')
const email2 = document.getElementById('email2')


const buttonSubmit2 = document.getElementById('my-button2')
const myBox2 = document.getElementById('my-box2')

let isLowerBracketShow2 = true

myForm2.addEventListener('submit', (event) => {
  event.preventDefault()

  const currentName2 = myForm2.elements.fname2.value
  const currentProfession2 =  myForm2.elements.pname2.value
  const currentProfession12 = myForm2.elements.availability2.value
  const currentProfession22 = myForm2.elements.usia2.value
  const currentProfession32 = myForm2.elements.lokasi2.value
  const currentProfession42 = myForm2.elements.pengalaman2.value
  const currentProfession52 = myForm2.elements.email2.value

  // console.log(currentName, currentProfession)
  fname2.innerHTML = currentName2
  pname2.innerHTML = currentProfession2
  availability2.innerHTML = currentProfession12
  usia2.innerHTML = currentProfession22
  lokasi2.innerHTML = currentProfession32
  pengalaman2.innerHTML = currentProfession42
  email2.innerHTML = currentProfession52

  toggleBox2()
})

function toggleBox2 () {
  if(isLowerBracketShow2) {
    isLowerBracketShow2 = false
    myBox2.classList.remove('hide2')
  } else {
    isLowerBracketShow2 = true
    myBox2.classList.add('hide2')
  }
}

buttonSubmit2.addEventListener('click', (event) => {
  event.preventDefault()
  toggleBox2()
})
