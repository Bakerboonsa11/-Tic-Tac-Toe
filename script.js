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







const check= (function(document){
   const player1 = game_object.object_creator( "player1","X");
   const player2 = game_object.object_creator( "player2","0");
   let current_player;
   let  game_over;
   let  counter;
   let game_already_fineshed = false;
   console.log(`status first is ${game_already_fineshed}`)
   
   
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
         counter++;
         if (counter === 10) {
            // game_over = true;
            console.log(`game is over and counter is reached ${game_over} `)
            console.log(`in 9 before check condition ${game_already_fineshed}`)
           
            event.target.textContent= current_player.marker
            event.target.disabled= true
            if(!game_already_fineshed){
               current_array=game_object. get_array()
               if(current_array[button_value]==="")
                current_array[button_value]=current_player.marker
                event.target.textContent= current_player.marker
                event.target.disabled= true
            
               check_status_and_display.status_solver()
               console.log(`status in the check of 9 is ${game_already_fineshed}`)
               if(!game_already_fineshed){
                  check_status_and_display.draw();
               }
              
            }
            else{
               return
            }
          
           
         }
         else{
           
          current_array=game_object. get_array()
          if(current_array[button_value]==="")
           current_array[button_value]=current_player.marker
           event.target.textContent= current_player.marker
           event.target.disabled= true
       
          check_status_and_display.status_solver()
         }
      }
      if(current_player=== player1){
         current_player =player2
      }
      else{
         current_player=player1
      }
      
      // console.log(counter)
      // console.log(`current array is ${current_array}`)
   }
     
   let buttons = document.querySelectorAll(".buttons");
   buttons.forEach((element)=>{
      element.addEventListener("click",game_flow)
   }) 
   
   let btn_play=document.querySelector(".play");
    btn_play.addEventListener("click" , startup)

    return { player1,player2,current_player,game_already_fineshed}
  
})(document)

const check_status_and_display = (function(document) {
   let cur_ar = game_object.get_array();
   let player_name=document.querySelector(".winner_name")
   let disply_box = document.querySelector(".winner_displayer")
   let winner_text = document.querySelector(".text");
   let img = document.querySelector(".img")

   function status_solver() {
      if (cur_ar[0] === cur_ar[1] && cur_ar[1] === cur_ar[2] && cur_ar[0] !== "") {
         if (cur_ar[0] === "X") {
            // console.log("player1 is a winner");
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
            check.game_already_fineshed=true
            console.log(`the condition in the row first is ${check.game_already_fineshed}`)


         } else {
            player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
            check.game_already_fineshed=true
             
         }
      } else if (cur_ar[3] === cur_ar[4] && cur_ar[4] === cur_ar[5] && cur_ar[3] !== "") {
         if (cur_ar[3] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         } else {
            player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         }
      } else if (cur_ar[6] === cur_ar[7] && cur_ar[7] === cur_ar[8] && cur_ar[6] !== "") {
         if (cur_ar[6] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         }
      } else if (cur_ar[0] === cur_ar[3] && cur_ar[3] === cur_ar[6] && cur_ar[0] !== "") {
         if (cur_ar[0] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         }
      } else if (cur_ar[1] === cur_ar[4] && cur_ar[4] === cur_ar[7] && cur_ar[1] !== "") {
         if (cur_ar[1] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         }
      } else if (cur_ar[2] === cur_ar[5] && cur_ar[5] === cur_ar[8] && cur_ar[2] !== "") {
         if (cur_ar[2] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         }
      } else if (cur_ar[0] === cur_ar[4] && cur_ar[4] === cur_ar[8] && cur_ar[0] !== "") {
         if (cur_ar[0] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         }
      } else if (cur_ar[6] === cur_ar[4] && cur_ar[4] === cur_ar[2] && cur_ar[6] !== "") {
         if (cur_ar[6] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
         }
      } 

      
   }
   // console.log(`the game_already finesh inside the other part is ${check.game_already_fineshed}`)
   function draw(){
      player_name.textContent= ""
      disply_box.style.opacity="100%"
      disply_box.style.zIndex = "9999";
      winner_text.textContent="DRAW"

   }
   

   return {
      status_solver,draw
   };
})(document);



// let current =game_object.get_array()
// console.log(current)
// game_object.set_array("X",0)
// console.log(game_object.get_array())


