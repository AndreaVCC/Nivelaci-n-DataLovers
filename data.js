
const filterTags = (data, condition) => {
  const filteredTags = data.filter(element => {
    return element.tags.indexOf(condition) > -1
  })
  return filteredTags;
   };
  window.filterTags=filterTags;

  
 const sortOrderer = (data, condition) => {
  //console.log(condition);
  const sorted = data.sort((a, b) => (a[condition] > b[condition]) ? 1 : -1);
  return sorted;
 }
 window.sortOrderer=sortOrderer;
 




/*

const filterTags = (data, condition) => {
    const filteredTags = data.filter(element => {
      return element.tags === condition
    })
    return filteredTags;
  };
*/

/*
EJEMPLO CODEPEN mostrando en consola

let perros = {
data:{
 Vladimiro:{
   Nombre: "Vladimiro",
   Edad: 4,
   Color:"Negro",
   Apodos: ["Vladi","Mono"],
   Genero: "Macho"
 },
 Dominga:{
   Nombre: "Dominga",
   Edad: 4,
   Color: "Beige",
   Apodos: ["Domi","Malula"],
   Genero: "Hembra"
 },
 Malu: {
   Nombre:"Malu",
   Edad: 4,
   Color: "Gris",
   Apodos: ["Malula","Negra"],
   Genero: "Hembra"
 }

 }};

const perritos = Object.values(perros.data);

const filtradoApodo = (perritos) => {
  const resultado = perritos.filter((elemento) => {
    return elemento.Apodos.includes("Malula") === true;
  })
	return resultado
}





*/
