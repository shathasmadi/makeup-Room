var userName = prompt('what is your name ?');
var herPudget = prompt('How much the budget?');
var typeName = prompt('what do you want to do?');
var favStyle = prompt('what is your favourite style!','hairstyle,makeupstyle,nailstyle');
if(favStyle === 'hairstyle'){
    document.write('<img src="https://i.pinimg.com/originals/45/66/64/456664558f369066dd330a7f485f0fb3.jpg"width=200pxheight=200px />')
}else if(favStyle === 'makeupstyle'){
    document.write('<img src="https://i.pinimg.com/originals/17/b6/30/17b630ef56af1c1c955c544d4a39f4cc.jpg"width=200pxheight=200px/>')
}else if (favStyle === 'nailstyle'){
    document.write('<img src="https://www.cutemanicure.com/wp-content/uploads/2020/03/Untitled-1.jpg"width=200pxheight=200px/>')
}else {
    alert('Welcome to my saloon website')
}