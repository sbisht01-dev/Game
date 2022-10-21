function generate(){
    let b = Math.floor(Math.random()*3)
    return b
  }
  
  function check(user,bot){
    if (user == bot) {
      console.log("No one wins")
    } else if (user == 1 && bot == 2) {
       console.log("Bot wins")
    } else if (user == 2 && bot == 0) {
      console.log("Bot wins")
    } else if (user == 1 && bot == 0){
      console.log("User wins")
    } else if (user == 2 && bot == 1){
      console.log("User wins")
    } else if (user == 0 && bot == 2){
      console.log("User wins")
    } else if (user == 0 && bot == 1){ 
      console.log("Bot wins")
    } else {
      console.log("Wrong Units")
    }
  }
  
  function userinput(){
    let a = prompt("Enter your value")
    return a 
  }
  
  let user = userinput()
  
  if(user>=0 && user<=2){
    let bot = generate()
    let game = ["Rock","Paper","Scissors"]
    console.log("User chooses:"  + game[user])
    console.log("Bot chooses:"  + game[bot])
   check(user,bot)
    
  }else{
    console.log("Enter Valid Range")
  }
  