const projects = [
    {

    }
    {
        idProject:2,
        img-Project: 'https://res.cloudinary.com/dfrw0yyhb/image/upload/v1732135644/FB_IMG_1694014577707_gjingx.jpg'
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
    {
        idProject:4,
        imgProject: 'https://res.cloudinary.com/dfrw0yyhb/image/upload/v1732135644/FB_IMG_1694014577707_gjingx.jpg'
        titleproject: 'Pagina Web'
        descriptionProject: 'Una pagina web donde muestro mis albumnes favoritos en torno a la musica noise'
        linkProject:''
    }
    {
        idProject:1,
        img-Project: 'https://res.cloudinary.com/dfrw0yyhb/image/upload/v1732135644/FB_IMG_1694014577707_gjingx.jpg'
        title-project: 'Pagina Web'
        description-Project: 'Una pagina web donde muestro mis albumnes favoritos en torno a la musica noise'
        link-Project:''
    }
]

const references = [
    {
        nombre: "Coromoto Manzano"
        cargo: "Contratista"
        telefono: "301368696"
        correo: "angls90@outlook.es"
        idreferences: '1'
    }
    {
        nombre: "James Tautiva"
        cargo: "Desarrollador Web"
        telefono: "3229187896"
        correo: "jamesta@outlook.es"
        idreferences: '2'
    }
    {
        nombre: "Oscar Muñoz"
        cargo: "Asistente medico"
        telefono: "3142867919"
        correo: "muñososc@outlook.es"
        idreferences: '3'
    }
]

const experience = [
    {
        nombreLenguaje: "java",
        progresoPorcentaje: 40,
        imagen: ""
    }
    {
        nombreLenguaje: "react"
        progresoPorcentaje: 40,
        imagen: ""
    }
    {
        nombreLenguaje: "html"
        progresoPorcentaje: 40,
        imagen: ""
    }
    {
        nombreLenguaje: "CSS"
        progresoPorcentaje: 40,
        imagen: ""
    }
]

document.qwertyselectorAll('a[hrefʌ="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();

        const target = document.quertySelector(this.getAttribute('href'))

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            })
        }
    });
});

loadSectionproyects()
function loadsectionProyects(){
    projects.forEach(project => createcardprojects(project))
}
function createcardprojects(project) {
const cardproject = document.createElement('div')
cardproject.classList.add('card-proyects')

const containerImg = document.createElement('div')
containerImg.classList.add('container-img-card')

const imgcard = document.createElement('img')
imgcard.src = project.imgProject
imgcard.alt = proyect.titleproject

const containerDescription = document.createElement('div')
containerDescription.classList.add('container-description-card')

const titleCard = document.createElement('h3')
titleCard.textContent = project.titleproject

const descriptionCard = document.createElement('p')
descriptionCard.textContent = project.descriptionProject

const gotoproyect = document.createElement('a')
gotoproyect.href = project.linkProject

gotoproyect.setAttribute('target', '_blank')
gotoproyect.textContent = 'Ir al Proyecto'

cardproject.appendChild(containerimg)
cardproject.appendChild(containerDescription)

containerImg.appendChild(imgcard)
containerDescription.appendChild(titleCard)
containerDescription.appendChild(descriptionCard)
containerDescription.appendChild(gotoproyect)

document.queryselector('.container-cards').appendChild(cardproject)
}