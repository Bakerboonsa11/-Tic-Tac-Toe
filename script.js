const game_object = ( function(){
   let current_state_array = ["","","","","","","","",""]  
   function get_array(){
      return current_state_array;
   }   
   function set_array(marker ,possition){
         current_state_array[possition]=marker;
        check.player1_input.style.opacity="100%"
         check.player2_input.style.opacity="100%"
   }
   function reset(){
     current_state_array=[]
     location.reload();
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
 let  player2_input= document.querySelector(".uni_in");
 let player1_input = document.querySelector(".uni_in2"); 
  let value_1 = player1_input.value;
  let value_2 = player2_input.value;
   const player1 = game_object.object_creator( value_1,"X");
   const player2 = game_object.object_creator( value_2,"0");
   
   let current_player;
   let  game_over;
   let  counter=0;
   let game_already_fineshed = false;
   console.log(`status first is ${game_already_fineshed}`)
   
   
   function startup(){
      player1_input.style.opacity="0"
      player2_input.style.opacity="0"
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
         if (counter === 9) {
            
           
            event.target.textContent= current_player.marker
            event.target.disabled= true
            if(!game_already_fineshed){
               current_array=game_object. get_array()
               if(current_array[button_value]===""){
                  current_array[button_value]=current_player.marker
                  event.target.textContent= current_player.marker
                  event.target.disabled= true
              
                  check_status_and_display.status_solver()
               }
                
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
      // swap two players condition 
      if(current_player=== player1){
         current_player =player2
      }
      else{
         current_player=player1
      }
      
     
   }
     
   let buttons = document.querySelectorAll(".buttons");
   buttons.forEach((element)=>{
      element.addEventListener("click",game_flow)
   }) 
   
   let btn_play=document.querySelector(".play");
    btn_play.addEventListener("click" , startup)

    return { player1,player2,current_player,game_already_fineshed,player1_input,player2_input}
  
})(document)

const check_status_and_display = (function(document) {
   let cur_ar = game_object.get_array();
   let player_name=document.querySelector(".winner_name")
   let disply_box = document.querySelector(".winner_displayer")
   let winner_text = document.querySelector(".text");
   let img = document.querySelector(".img")
   let grid_container= document.querySelector(".grid_container")
   let replay = document.querySelector(".replay");

   replay.addEventListener("click", game_object.reset);
   function status_solver() {
      if (cur_ar[0] === cur_ar[1] && cur_ar[1] === cur_ar[2] && cur_ar[0] !== "") {
         if (cur_ar[0] === "X") {
            // console.log("player1 is a winner");
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
            check.game_already_fineshed=true
            grid_container.style.opacity="0";

            replay.style.opacity="100%";
            replay.style.zIndex = "9999";


         } else {
            player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
            check.game_already_fineshed=true
            grid_container.style.opacity="0";
            replay.style.opacity="100%";
            replay.style.zIndex = "9999";
             
         }
      } else if (cur_ar[3] === cur_ar[4] && cur_ar[4] === cur_ar[5] && cur_ar[3] !== "") {
         if (cur_ar[3] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         } else {
            player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         }
      } else if (cur_ar[6] === cur_ar[7] && cur_ar[7] === cur_ar[8] && cur_ar[6] !== "") {
         if (cur_ar[6] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         }
      } else if (cur_ar[0] === cur_ar[3] && cur_ar[3] === cur_ar[6] && cur_ar[0] !== "") {
         if (cur_ar[0] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         }
      } else if (cur_ar[1] === cur_ar[4] && cur_ar[4] === cur_ar[7] && cur_ar[1] !== "") {
         if (cur_ar[1] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         }
      } else if (cur_ar[2] === cur_ar[5] && cur_ar[5] === cur_ar[8] && cur_ar[2] !== "") {
         if (cur_ar[2] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         }
      } else if (cur_ar[0] === cur_ar[4] && cur_ar[4] === cur_ar[8] && cur_ar[0] !== "") {
         if (cur_ar[0] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         }
      } else if (cur_ar[6] === cur_ar[4] && cur_ar[4] === cur_ar[2] && cur_ar[6] !== "") {
         if (cur_ar[6] === "X") {
            player_name.textContent= check.player1.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         } else {
             player_name.textContent= check.player2.name;
            disply_box.style.opacity="100%"
            disply_box.style.zIndex = "9999";
             check.game_already_fineshed=true
             grid_container.style.opacity="0";
             replay.style.opacity="100%";
            replay.style.zIndex = "9999";
         }
      } 

      
   }
   // console.log(`the game_already finesh inside the other part is ${check.game_already_fineshed}`)
   function draw(){
      player_name.textContent= ""
      disply_box.style.opacity="100%"
      disply_box.style.zIndex = "9999";
      winner_text.textContent="DRAW"
      grid_container.style.opacity="0";
      replay.style.opacity="100%";
      replay.style.zIndex = "9999";
      img.style.opacity="0"

   }
   

   return {
      status_solver,draw
   };
})(document);






