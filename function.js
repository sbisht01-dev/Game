let flag = 0

function start(n){
  flag = flag + 1
  let user = n 
  Valid(user)
}

function Valid(user){
  if(user>=0 && user<=2){
    let bot = generate()
    let game = ["Rock","Paper","Scissors"]
    console.log("User chooses:"  + game[user])
    console.log("Bot chooses:"  + game[bot])
   check(user,bot)
  }else{
    console.log("Enter Valid Range")
  }
}

function generate(){
      let b = Math.floor(Math.random()*3)
      return b
    }
    
  function check(user,bot,flag){
    if (user == bot) {
        
      // console.log("No one wins")

      let div = document.createElement('div')
      div.id = 'result'
      div.innerHTML = '<p>Oops its a Tie</p>'
      document.body.appendChild(div)
    } else if (user == 1 && bot == 2) {
      
      // console.log("Bot wins")

      let div = document.createElement('div')
      div.id = 'result'
      div.innerHTML = '<p>Sorry, Bot Wins</p>'
      document.body.appendChild(div)
    } else if (user == 2 && bot == 0) {
      
      // console.log("Bot wins")

      let div = document.createElement('div')
      div.id = 'result'
      div.innerHTML = '<p>Sorry, Bot Wins</p>'
      document.body.appendChild(div)
    } else if (user == 1 && bot == 0){
      
      // console.log("User wins")

      let div = document.createElement('div')
      div.id = 'result'
      div.innerHTML = '<p>Congratulations, you won</p>'
      document.body.appendChild(div)
    } else if (user == 2 && bot == 1){
      
      // console.log("User wins")

      let div = document.createElement('div')
      div.id = 'result'
      div.innerHTML = '<p>Congratulations, you won</p>'
      document.body.appendChild(div)
    } else if (user == 0 && bot == 2){
      // flag[1]++
      // console.log("User wins")

      let div = document.createElement('div')
      div.id = 'result'
      div.innerHTML = '<p>Congratulations, you won</p>'
      document.body.appendChild(div)
    } else if (user == 0 && bot == 1){ 

      // console.log("Bot wins")
      
      let div = document.createElement('div')
      div.id = 'result'
      div.innerHTML = '<p>Sorry, Bot Wins</p>'
      document.body.appendChild(div)
    } else {
      // console.log("Wrong Units")

      let div = document.createElement('div')
      div.id = 'result'
      div.innerHTML = '<p>Wrong Units</p>'
      document.body.appendChild(div)
    }
  }
  
 
  function remove() {
    for(let i= 0; i<flag ; i++){
      const element = document.getElementById("result");
      element.remove();
    }
  }

