const projects = [
    {
        idProject:1,
        img-Project: 'https://res.cloudinary.com/dfrw0yyhb/image/upload/v1732135644/FB_IMG_1694014577707_gjingx.jpg'
        titleproject: 'Pagina Web'
        descriptionProject: 'Una pagina web donde muestro mis albumnes favoritos en torno a la musica noise'
        linkProject:''
    }
    {
        idProject:2,
        imgProject: 'https://res.cloudinary.com/dfrw0yyhb/image/upload/v1732135644/FB_IMG_1694014577707_gjingx.jpg'
        titleproject: 'Pagina Web'
        descriptionProject: 'Una pagina web donde muestro mis albumnes favoritos en torno a la musica noise'
        linkProject:''
    }
    {
        idProject:3,
        imgProject: 'https://res.cloudinary.com/dfrw0yyhb/image/upload/v1732135644/FB_IMG_1694014577707_gjingx.jpg'
        titleproject: 'Pagina Web'
        descriptionProject: 'Una pagina web donde muestro mis albumnes favoritos en torno a la musica noise'
        linkProject:''
    }
]

const references = [
    {
        name: "Coromoto Manzano"
        ocupation: "Contratista"
        phone: "301368696"
        email: "angls90@outlook.es"
        idreferences: '1'
    }
    {
        name: "James Tautiva"
        ocupation: "Desarrollador Web"
        phone: "3229187896"
        email: "jamesta@outlook.es"
        idreferences: '2'
    }
    {
        nombre: "Oscar Muñoz"
        cocupation: "Asistente medico"
        phone: "3142867919"
        email: "muñososc@outlook.es"
        idreferences: '3'
    }
]

const experience = [
    {
        langueageName: "java",
        percentprogress: 40,
        image: ""
    }
    {
        langueageName: "Css",
        percentprogress: 40,
        image: ""
    }
    {
        langueageName: "Html",
        percentprogress: 40,
        image: ""
    }

]

document.querySelectorAll('a[href^="#"]').forEach( anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
        const target = document.querySelector(event.currentTarget('href'));

        if(target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

loadSectionProyects()
function loadSectionProyects(){
    projects.forEach(proyect=> createCardsProyects(proyect))
}
function createCardsProyects(proyect) {
    const cardProyect = document.createElement('div')
    cardProyect.classList.add('card-proyects')

    const containerImg = document.createElement('div')
    containerImg.classList.add('container-img-card')

    const imgCard = document.createElement('img')
    imgCard.src = proyect.imgProject
    imgCard.alt = proyect.titleproject

    const containerdescription = document.createElement('div')
    containerdescription.classList.add('container-description-card')

    const titlecard = document.createElement('dh3')
    titlecard.textContent = proyect.titleproject

    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = proyect.descriptionProject

    const goToproyect = document.createElement('a')
    goToproyect.href = proyect.linkProject

    goToproyect.setAttribute('target','_blank')
    goToproyect.textContent = 'Ir al Proyecto'


    cardProyect.appendChild(containerImg)
    cardProyect.appendChild(containerdescription)

    cardProyect.appendChild(imgCard)
    containerdescription.appendChild(titlecard)
    containerdescription.appendChild(descriptionCard)
    containerdescription.appendChild(goToproyect)

    document.querySelector('container-cards').appendChild(cardProyect)

}
