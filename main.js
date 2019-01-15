

const data = Object.values(LOL.data) 
//console.log(data); 
//Object.value = Devuelve un array que contiene los valores de las propiedades enumerables de un objeto dado.
const containerRoot = document.getElementById('root');
const selecTags = document.getElementById('tags'); //llamar al select de filtrar x tags
    
    
    /*
    Object.keys(data).forEach(key => 
    console.log(key, data[key])) // Mostrar todos los objetos enumerados y separados
    */

    /*
    for (let name in data){
       //console.log(name); //Obtener todos los nombres de los objetos en CONSOLA
       //result = containerRoot.innerHTML += name; //Obtener todos los nombres de los objetos en HTML
         }
    */


    // MOSTRANDO DATA (Ejemplo de Ale)
    const showData = (data) => {
    let result = '';
    data.forEach(element => {   
      result = containerRoot.innerHTML += `
        <div>
            <div class="card">
                <div class="box">
                    <h3>${element.name}<br></h3>
                    <p>Key:${element.key}</p>
                    <div style="position: relative">
                        <div class="img">  <img src="${element.img}">  </div>
                        <div class="img2">  <img src="http://subirimagen.me/uploads/20190114151844.png">  </div>
                    </div>
                         <p>${element.tags}</p>
            </div>
        </div>`
    }
    );
    return result;
    }

 window.onload = showData(data);



/* EJEMPLO ALE
const showData = (data) => {
    let result = '';
    //console.log(DATA)
   data.forEach(element => {
     // element --> DATA[i]
     //console.log(element.house);
     
  
       result = containerRoot.innerHTML += `
       <div>
            <div class="card">
                <div class="box">
                     <h3>${element.name}<br></h3>
                     <p>${element.key}key</p>
                     <div class="img">
                        <img src="${element.img}">
                     </div>
                     <p>${element.tags}</p>
                </div>
            </div>
       
       </div>`
     } 
   );
   return result;
 }
 
 */