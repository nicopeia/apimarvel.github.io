window.addEventListener('load', () => {
  


let contentHTML ='';
let contenidoHTML= '';
const marvelRow = document.getElementById('marvel-row');
const marvelComicsRow = document.getElementById('marvelComics-row');
const botonMostrarPersonajes = document.getElementById('mostrarPersonajes');
const botonMostrarComics = document.getElementById('mostrarComics');
console.log(botonMostrarPersonajes);

botonMostrarPersonajes.addEventListener('click', ()=>{
   marvelRow.style.display='flex';
   marvelComicsRow.style.display='none';
   botonMostrarPersonajes.style.backgroundColor='red';
   botonMostrarComics.style.backgroundColor='black';
})

botonMostrarComics.addEventListener('click', ()=>{
    marvelComicsRow.style.display='flex';
    marvelRow.style.display='none';
    botonMostrarComics.style.backgroundColor='red';
    botonMostrarPersonajes.style.backgroundColor='black';
  
   
 })

const url = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Spider-Man&ts=1&apikey=863d7a74f4b819efeafa0fd50b1ef01a&hash=8d949136384b266b07c78bb67671e586';
const url1 = 'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=Hulk&ts=1&apikey=863d7a74f4b819efeafa0fd50b1ef01a&hash=8d949136384b266b07c78bb67671e586';
const url2 =  'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=thor&ts=1&apikey=863d7a74f4b819efeafa0fd50b1ef01a&hash=8d949136384b266b07c78bb67671e586';
const url3 =  'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=captain%20america&ts=1&apikey=863d7a74f4b819efeafa0fd50b1ef01a&hash=8d949136384b266b07c78bb67671e586';
const url4 =  'https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=iron%20man&ts=1&apikey=863d7a74f4b819efeafa0fd50b1ef01a&hash=8d949136384b266b07c78bb67671e586';
const url5 ='https://gateway.marvel.com:443/v1/public/comics?&ts=1&apikey=863d7a74f4b819efeafa0fd50b1ef01a&hash=8d949136384b266b07c78bb67671e586';




fetch(url5)
.then(res =>{
    return res.json();
})
.then(datos =>{
    console.log(datos.data.results);
    for(const comic of datos.data.results){
        let urlheroe = comic.urls[0].url;
     
        
    contenidoHTML += `       <div class="col md-4">
              <div id="cardComic" class="card mx-auto mt-5" style="width: 18rem;   ">
               
           
               
             
                    <img class="img-thumbnail" src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="">

                  
               
               <div style="background-color:black;" class="card-footer">
               <h3     class="titulo text center">${comic.title}</h3>
               </div>
              
              </div>
    
    
            </div>`
       
    }
 marvelComicsRow.innerHTML=contenidoHTML;
})


try {
    fetch(url)

    .then(res =>{
       return  res.json();
    })
    .then(datos =>{
       
        for(const heroes of datos.data.results){
            let urlheroe = heroes.urls[0].url;
         
            
        contentHTML += `       <div class="col md-4">
                  <div id="card" class="card mx-auto mt-5" style="width: 18rem;   ">
                   
               
                   
                 
                        <img class="img-thumbnail" src="${heroes.thumbnail.path}.${heroes.thumbnail.extension}" alt="">
    
                      
                   
                   <div style="background-color:black;" class="card-footer">
                   <h3     class="titulo text center">${heroes.name}</h3>
                   </div>
                  
                  </div>
        
        
                </div>`
           
        }
     marvelRow.innerHTML=contentHTML;
         
    }) 
} catch (error) {
    if(url == null || url == error){
        console.log(' no se pudo mostrar este personaje');
    }
       
  
    
}





try {
    fetch(url1)
    .then(res =>{
       return  res.json();
    })
    .then(datos =>{
    
        for(const heroes of datos.data.results){
            let urlheroe = heroes.urls[0].url;
       
            console.log(heroes)
        contentHTML += `       <div class="col md-4">
        <div id="card" class="card mx-auto mt-5" style="width: 18rem;  ">
                   
                 
                   
                 
        <img class="img-thumbnail" src="${heroes.thumbnail.path}.${heroes.thumbnail.extension}" alt="">

      
   
   <div style="background-color:black;" class="card-footer">
   <h3     class="titulo text center">${heroes.name}</h3>
   </div>
  
  </div>
        
        
                </div>`
             
        }
     marvelRow.innerHTML=contentHTML;
         
    }) 
} catch (error) {
    console.log(error);
}








fetch(url2)
.then(res =>{
   return  res.json();
})
.then(datos =>{

    for(const heroes of datos.data.results){
        let urlheroe = heroes.urls[0].url;
   
        console.log(heroes)
    contentHTML += `       <div class="col md-4">
    <div id="card" class="card mx-auto mt-5" style="width: 18rem;  ">
                   
                 
                   
                 
    <img class="img-thumbnail" src="${heroes.thumbnail.path}.${heroes.thumbnail.extension}" alt="">

  

<div style="background-color:black;" class="card-footer">
<h3     class="titulo text center">${heroes.name}</h3>
</div>

</div>
    
    
            </div>`
           
    }
 marvelRow.innerHTML=contentHTML;
     
})
.catch(error=>{
    console.log(error);
})


fetch(url3)
.then(res =>{
   return  res.json();
})
.then(datos =>{

    for(const heroes of datos.data.results){
        let urlheroe = heroes.urls[0].url;
   
        console.log(heroes)
    contentHTML += `       <div class="col md-4">
    <div id="card" class="card mx-auto mt-5" style="width: 18rem;  ">
                   
                 
                   
                 
    <img class="img-thumbnail" src="${heroes.thumbnail.path}.${heroes.thumbnail.extension}" alt="">

  

<div style="background-color:black;" class="card-footer">
<h3     class="titulo text center">${heroes.name}</h3>
</div>

</div>
    
    
            </div>`
          
    }
 marvelRow.innerHTML=contentHTML;
     
})
.catch(error=>{
    console.log(error);
})



fetch(url4)
.then(res =>{
   return  res.json();
})
.then(datos =>{
  
    for(const heroes of datos.data.results){
        let urlheroe = heroes.urls[0].url;
   
        
    contentHTML += `       <div class="col md-4">
    <div id="card" class="card mx-auto mt-5" style="width: 18rem;   ">
                   
                 
                   
                 
    <img class="img-thumbnail" src="${heroes.thumbnail.path}.${heroes.thumbnail.extension}" alt="">

  

<div style="background-color:black;" class="card-footer">
<h3     class="titulo text center">${heroes.name}</h3>
</div>

</div>
    
            </div>`
          
    }
 marvelRow.innerHTML=contentHTML;
     
})
.catch(error=>{
    console.log(error);
})





})


const color = document.getElementById('cambiarfondo');
console.log(color);
color.addEventListener('change',(e)=>{
    document.body.style.backgroundColor= e.target.value;
})


