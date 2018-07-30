var number=6;

var colors=generate(number);

var squares=document.querySelectorAll(".square");

var picked=pick();

var colordis=document.getElementById("colordis");

colordis.textContent=picked;

var message=document.querySelector("#message");

var h1=document.querySelector("h1");

var reset=document.querySelector("#reset");

var mode=document.querySelectorAll(".mode");

for(var i=0;i<mode.length;i++)
{
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent==="EASY"){
			number=3;
		}
		else{
			number=6;
		}
		resetll();

	});
}

function resetll(){
	colors=generate(number);
	picked=pick();
	colordis.textContent=picked;
	reset.textContent="new colors";
	message.textContent="";
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];		
		}
		else{
			squares[i].style.display="none";
		}
		squares[i].style.background=colors[i];
	}
	h1.style.background="steelblue";
}


reset.addEventListener("click",function(){
	colors=generate(number);
	picked=pick();
	colordis.textContent=picked;
	this.textContent="new colors";
	message.textContent="";
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];

	}
	h1.style.background="steelblue";
});


for(var i=0;i<squares.length;i++)
{
	
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var cc=this.style.background;
		if(cc===picked){
			message.textContent="CORRECT!!";
			changecolor(cc);
			h1.style.background=cc;
			reset.textContent="PLAY AGAIN???";

		}
		else{
			this.style.background="#232323";
			message.textContent="TRY AGAIN!!!"
		}
	});

}

function changecolor(color)
{
	for(var i=0;i<colors.length;i++)
	{
		squares[i].style.background=color;
	}
}

function pick(){
	var random =Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generate(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor())
	}

	return arr;
}

function randomcolor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
