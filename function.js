function generate(){
    let b = Math.floor(Math.random()*3)
    return b
  }
  
  function check(user,bot){
    if (user == bot) {
      // console.log("No one wins")
      let print = 'No one wins'
      let text = document.createElement('h2')
      text.innerText = print
      document.body.appendChild(text)
    } else if (user == 1 && bot == 2) {
      // console.log("Bot wins")
      let print = 'Bot wins'
      let text = document.createElement('h2')
      text.innerText = print
      document.body.appendChild(text)
    } else if (user == 2 && bot == 0) {
      // console.log("Bot wins")
      let print = 'Bot wins'
      let text = document.createElement('h2')
      text.innerText = print
      document.body.appendChild(text)
    } else if (user == 1 && bot == 0){
      // console.log("User wins")
      let print = 'User wins'
      let text = document.createElement('h2')
      text.innerText = print
      document.body.appendChild(text)
    } else if (user == 2 && bot == 1){
      // console.log("User wins")
      let print = 'User wins'
      let text = document.createElement('h2')
      text.innerText = print
      document.body.appendChild(text)
    } else if (user == 0 && bot == 2){
      // console.log("User wins")
      let print = 'User wins'
      let text = document.createElement('h2')
      text.innerText = print
      document.body.appendChild(text)
    } else if (user == 0 && bot == 1){ 
      // console.log("Bot wins")
      let print = 'Bot wins'
      let text = document.createElement('h2')
      text.innerText = print
      document.body.appendChild(text)
    } else {
      // console.log("Wrong Units")
      let print = 'Wrong Units'
      let text = document.createElement('h2')
      text.innerText = print
      document.body.appendChild(text)
    }
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

  function start(n){
    let user = n 
    Valid(user)
  }

  // function myFunction() {
  //   const element = document.getElementById("demo");
  //   element.remove();
  // }

