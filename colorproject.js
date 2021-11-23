var colors = generateRandomColors(6);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();//geting color from function
var colorDisplay=document.getElementById("colordisplay");
colorDisplay.textContent=pickedColor;//displaying to the picked color
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
resetButton.addEventListener("click",function()
{//generate all new colors
    colors=generateRandomColors(6);
    //pick a random color from array
    pickedColor=pickColor()
    //change colorDisplay to picked color
    colorDisplay.textContent=pickedColor;
    //change color of all squares
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=colors[i];
    }
h1.style.backgroundColor="#232323";
})
for(var i=0;i<squares.length;i++)
{
    //add initial colors to square
    squares[i].style.
    backgroundColor=colors[i] //giving colors to all the divs . div[0] will get color 0
    //add event handler to all squares
    squares[i].addEventListener("click",function()
    {
        //grab color of clicked square and check if it matches the picked color
        var clickedColor=this.style.backgroundColor;
        if(clickedColor===pickedColor){
            messageDisplay.textContent="Correct";
            changeColor(clickedColor);
            h1.style.backgroundColor=clickedColor;
            resetButton.textContent="Play Again?";
        }
        else{
            this.style.backgroundColor="#232323";
            messageDisplay.textContent="Try Again";
        }
    });
}
function changeColor(color){//changing color of all squares to clicked color
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
}
function pickColor(){
    var random=Math.floor(Math.random()* colors.length)
    return(colors[random]);
}
function generateRandomColors(num){
    //num is no. of colors
    // make an array
    // add num random colors to array
    // return array
    var arr=[];
    // repeat num times
    for(var i=0;i<num;i++)
    {//get random color and push into arr
        arr.push(randomColor());//it pushes num times random colors into our colors array
    }
    return(arr);
}
function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
