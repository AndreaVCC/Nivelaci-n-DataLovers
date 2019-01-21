const data = Object.values(window.LOL.data) 
//console.log(data); 
//Object.value = Devuelve un array que contiene los valores de las propiedades enumerables de un objeto dado.
const containerRoot = document.getElementById('root');
const selectTags = document.getElementById('tags'); //llamar al select de filtrar x tags
const selectAz = document.getElementById('order');
    
    
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


    // MOSTRANDO DATA 
    const mostrarData = (data) => {
    let result = '';
    data.forEach(element => {   
      result = containerRoot.innerHTML += `
      <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
             <div class="img1"><img class="activator" src="${element.img}" alt=""></div>
             <div class="img2"><img class="activator" src="http://subirimagen.me/uploads/20190114151844.png"> </div>
          </div>

          <div class="card-content">
             <span class="card-title activator ">${element.name}<i class="material-icons right">more_vert</i></span>
             ${element.tags}
          </div>
   
          <div class="card-reveal">
             <span class="card-title "><i class="material-icons right">close</i></span>
             ${element.title.toUpperCase()}
             <img class="splash" src="${element.splash}" alt="">
          </div>  
      </div>
       `
 
    }
    );
    return result;
    }
    

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


 //FILTRADO CON TAGS
 selectTags.addEventListener('change', () => {
    let condition = selectTags.value
    let filtered = window.filterTags(data, condition);
    
    // limpio div
      containerRoot.innerHTML = '';
      filtered.forEach(element => {
      containerRoot.innerHTML += `
      <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
             <div class="img1"><img class="activator" src="${element.img}" alt=""></div>
             <div class="img2"><img class="activator" src="http://subirimagen.me/uploads/20190114151844.png"> </div>
          </div>

          <div class="card-content">
             <span class="card-title activator ">${element.name}<i class="material-icons right">more_vert</i></span>
             ${element.tags}
          </div>
   
          <div class="card-reveal">
             <span class="card-title "><i class="material-icons right">close</i></span>
             ${element.title.toUpperCase()}
             <img class="splash" src="${element.splash}" alt="">
          </div>  
      </div>` 
    })
  })

   //ORDENANDO
  selectAz.addEventListener('change', () => {
    let condition = selectAz.value
    let filtered = window.sortOrderer(data, condition);
    
    // limpio div
    containerRoot.innerHTML = ''; 
     filtered.forEach(element => {
     containerRoot.innerHTML += `
     <div class="card">
          <div class="card-image waves-effect waves-block waves-light">
             <div class="img1"><img class="activator" src="${element.img}" alt=""></div>
             <div class="img2"><img class="activator" src="http://subirimagen.me/uploads/20190114151844.png"> </div>
          </div>

          <div class="card-content">
             <span class="card-title activator ">${element.name}<i class="material-icons right">more_vert</i></span>
             ${element.tags}
          </div>
   
          <div class="card-reveal">
             <span class="card-title "><i class="material-icons right">close</i></span>
             ${element.title.toUpperCase()}
             <img class="splash" src="${element.splash}" alt="">
          </div>  
      </div>
   
     `
     })
   

   })
  


  window.onload = mostrarData(data);
  
   /*INICIALIZA EL MATERIALIZE*/
   document.addEventListener('DOMContentLoaded', function() {
    window.M.AutoInit();
  });