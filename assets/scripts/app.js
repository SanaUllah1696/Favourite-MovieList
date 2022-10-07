const newMovieElement= document.createElement('li');
const addMovieModal = document.getElementById('add-modal');
const cancel=document.getElementById('cancel');
const add=document.getElementById('add');
const movies=[];









// const startAddMovieButton=document.querySelector('header').lastElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMoviButton = cancelAddMovieButton.nextElementSibling;

const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
 const userInputs = addMovieModal.querySelectorAll('input'); //inside the add-model..to reach all inputs

// const movies=[]; 
 const entryTextSection=document.getElementById('entry-text');

 function updateUI(){
    if (movies.length===0){

    }
    else{
        entryTextSection.style.display='none';
    }
 }

// const updateUI =() =>{
//     if(movies.length === 0)
//     {
//         entryTextSection.style.display='block';
//     }else{
//         entryTextSection.style.display='none';
//     }
// };

function toggleBackdrop()  {
     backdrop.classList.toggle('visible');
};

 //const backdropClickHandler = () => {
//     addMovieModal.classList.toggle('visible');
//     toggleBackdrop();
// };
 const toggleMovieModal = () => {
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};
function clearInput(){
    for (const i of userInputs)
    {
        i.value = '';
    }
}



function backdropHandler(){
    
    toggleMovieModal();

}
cancel.addEventListener('click', backdropHandler);

function deleteMovie(){

}
 

function addHandler(){

   const title=userInputs[0].value;
   const imageUrl=userInputs[1].value;
   const rating=userInputs[2].value;
   if(title.trim()===''|| imageUrl.trim() ===''||rating.trim() === ''|| +rating<1 || +rating>5 )
   {
    alert('please enter valid data')
    return
   }

   const movieobject={
    title:title,
    url:imageUrl,
    rating:rating
    
   }

   movies.push(movieobject);
   
   toggleMovieModal();
   clearInput();
   updateUI();
   renderMovieData(movieobject.title,movieobject.url,movieobject.rating)


};

add.addEventListener('click',addHandler);

function renderMovieData(title,imageUrl,rating){
    

    
    newMovieElement.className="movie-element";
    newMovieElement.innerHTML=`
    <div class="movie-element__image"> 
    <img src=${imageUrl}>
    </div>
    <div class="movie-element__info">
    <h1> ${title}</h1>
    <p> ${rating}</p>
    </div>
    
    `;
    const listRoot=document.getElementById('movie-list');
    listRoot.append(newMovieElement);
}










startAddMovieButton.addEventListener('click', toggleMovieModal);
