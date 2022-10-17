document.querySelector(".shuffleNewDeck").addEventListener("click", shuffle);




const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'


function shuffle() {

  
    fetch(url)
    .then(res => res.json()) 
    .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data.remaining
     const deckname = deck_id.value
    fetch (`https://www.deckofcardsapi.com/api/deck/${deckname}/draw/?count=1`)
   document.querySelector('img').src = data.image
    
    })
    

 
    .catch(err => {
        console.log('error ${err}')

    });
 }
   

   

 