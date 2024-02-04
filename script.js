const game_object = ( function(){
   let current_state_array = ["","","","","","","","",""]  
   function get_array(){
      return current_state_array;
   }   
   function set_array(marker ,possition){
         current_state_array[possition]=marker;
   }
   function reset(){
      // some logic here
   }
   function object_creator( name, marker){
          name =name
          marker= marker
          return {
            name,marker
          }
   }
   return {
      get_array,set_array,reset,object_creator
   }
   
})() ;
// check up

const player1 = game_object.object_creator( "player1","X");
const player2 = game_object.object_creator( "player2","0");
let current_player;
let  game_over;
let  counter;


function startup(){
  current_player=player1
  game_over=false
  counter=0
 
}
function game_flow(event) {
   let button_value =event.target.value;
   
   
  
     
   if (game_over) {
      return;
   } else {
      
      if (counter === 9) {
         game_over = true;
         counter++;
      }
      else{
       current_array=game_object. get_array()
       if(current_array[button_value]==="")
        current_array[button_value]=current_player.marker
        event.target.textContent= current_player.marker
        event.target.disabled= true
      //  console.log(current_array)
      }
   }
}

let buttons = document.querySelectorAll(".buttons");
buttons.forEach((element)=>{
   element.addEventListener("click",game_flow)
}) 

let btn_play=document.querySelector(".play");
 btn_play.addEventListener("click" , startup)


// let current =game_object.get_array()
// console.log(current)
// game_object.set_array("X",0)
// console.log(game_object.get_array())


