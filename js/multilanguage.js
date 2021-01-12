// var dataReload = document.querySelectorAll("[data-reload]");


// //language translation 
// var language = {
//     en: {
//         intro : "You plan to study abroad"
//     },
//     fr: {
//         intro : "Vous envisagez etudier a l'etranger"
//     }
// }

// // Define language via window hash
// if(window.location.hash){
//     if(window.location.hash === "#fr"){
//         intro1.textContent = language.fr.intro;
//     }
// }


// // Define language reload onclick illiteration
// for(i = 0; i<= dataReload.length; i++){
//     dataReload[i].onClick = function () {
//       location.reload(true);  
//     };
// }

const langEl = document.querySelector('login-content');
const link = document.querySelectorAll('.l1');
const link1 =  document.querySelector('.link1');

var data = {
    "english" : {
        "link1" : "Home",
        "link2" : "About Us",
        "link3" : "Services",
        "link4" : "Contact",
        "service1" : "Online orientation",
        "intro1": "You plan to study abroad ",
        "service2": "Amazing Professional",
        "service3": "Great Support"

    },
    "french" : {
        "link1" : "Acceuil",
        "link2" : " A propos De Nous",
        "link3" : "Services",
        "link4" : "Contact",
        "service1" : "Orientations en ligne",
        "intro1": "Vous planifiez étudier à l'étranger ",
        "service2": "Professionnel Incroyable",
        "service3": "Grand Support",
    }
}

if(window.location.hash){
    if(window.location.hash === "#fr"){
        link1.textContent = data['french']['link1'];
        document.querySelector('.link2').textContent = data['french']['link2'];
        document.querySelector('.link3').textContent = data['french']['link3'];
        document.querySelector('.link4').textContent = data['french']['link4'];
        document.querySelector('.intro1').textContent = data['french']['intro1'];
        document.querySelector('.service1').textContent = data['french']['service1'];
        document.querySelector('.service2').textContent = data['french']['service2'];
        document.querySelector('.service3').textContent = data['french']['service3'];
    }
}
link.forEach(el =>{
    el.addEventListener('click', ()=>{
        const attr = el.getAttribute('language');
        link1.textContent = data[attr]['link1'];
        document.querySelector('.link2').textContent = data[attr]['link2'];
        document.querySelector('.link3').textContent = data[attr]['link3'];
        document.querySelector('.link4').textContent = data[attr]['link4'];
        document.querySelector('.service1').textContent = data[attr]['service1'];
        document.querySelector('.intro1').textContent = data[attr]['intro1'];
        document.querySelector('.service2').textContent = data[attr]['service2'];
        document.querySelector('.service3').textContent = data[attr]['service3'];
    })
});


