/*  PSEUDO CODE 
Randomly change the color of the body element
by clicking the button.

Need - 
 An array to hold colors
 An onclick event handler for button
 A way to randomly mix the colors
*/

let colors = ["red", "blue", "green", "grey", "yellow", "white", "purple", "cyan", "orange"];


function changeColor() {
    for (let i=0; i < colors.length; i++);
    document.getElementbyId("change").style.color = colors[i]; 
}
  