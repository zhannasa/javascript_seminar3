let userName = prompt("Как ваше имя?")
// alert(userName)
function showMessage() {
    let message = 'Привет, ' + userName;
    alert(message);
}

showMessage();



let age = prompt("Сколько вам лет?")
switch (age) {
    case '18':{
        alert('Незабываемый возраст!');
        break;
    }
    case '30':{
        alert('Замечательный возраст!');
        break;
    }
    case '40':{
        alert('Так себе возраст!');
        break;
    }
    case '50':{
        alert('Хотелось бы 18!');
        break;
    }
    default:{
        alert('Хороший возраст!')
    }
}



// let el = document.getElementById("el");
// console.log(el);

// el.classList.add('ice');
// //el.classList.remove('ice'); 

function changedColorText(){
    let el = document.getElementById("el");
    el.classList.add('ice');
}

let btn1 = document.getElementById("btn1");
console.log(btn1);

btn1.addEventListener('click', changedColorText)




function changedColorList(){
    let list = document.getElementById("list");
    list.classList.add('newice');
}

let btn2 = document.getElementById("btn2");
console.log(btn2);

btn2.addEventListener('click', changedColorList)

