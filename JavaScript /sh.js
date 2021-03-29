var userName = prompt('what is your name ?');
console.log(userName);
var herPudget = prompt('How much the budget?');
console.log(herPudget);
var typeName = prompt('what do you want to do?');
console.log(typeName);



var favStyle = prompt('what is your favourite style!','hairstyle,makeupstyle,nailstyle');
while(favStyle!=="hairstyle"&&favStyle!=="makeupstyle"&&favStyle!=="nailstyle"){
    favStyle=prompt("please enter the type")
}
var nuNum=prompt("How many style do you want to show?")
for(var i=0; i<nuNum ;i++){
if(favStyle === 'hairstyle'){
    document.write('<img src="https://i.pinimg.com/originals/45/66/64/456664558f369066dd330a7f485f0fb3.jpg"width=200pxheight=200px />')
}else if(favStyle === 'makeupstyle'){
	if(favStyle === 'hairstyle'){
    document.write('<img src="https://www.cutemanicure.com/wp-content/uploads/2020/03/Untitled-1.jpg"width=200pxheight=200px/>')
}else {
    alert('Welcome to my saloon website')
}}
console.log(nuNum);}