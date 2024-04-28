const ticketNumber = document.getElementById('lbl-new-ticket')
const button = document.querySelector('button')


async function getLastNumber () {
  const response = await fetch('http://localhost:4321/api/ticket/last')
    .then(res => res.json())

  ticketNumber.innerHTML = response

}


async function postNumber () {
  const newTicket = await fetch('http://localhost:4321/api/ticket/', {
    method: 'POST'
  }).then(res => res.json())
  console.log(newTicket.number)
  ticketNumber.innerHTML = newTicket.number
}

button.addEventListener('click', postNumber)

getLastNumber()