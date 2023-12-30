const loadMeals=(searchText)=>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url);
    fetch(url)
    .then(res =>res.json())
    .then(data =>displayMeals(data.meals));

}

const displayMeals =meals=>{
console.log(meals);
const container= document.getElementById('container');
container.innerHTML='';
meals.forEach(meals => {
    console.log(meals);
    const mealDiv=document.createElement('div');
    mealDiv.classList.add('col');
    mealDiv.innerHTML =`<img src="${meals.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meals.strMeal}</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <button  onclick="loadMealDetails(${meals.idMeal})"type="button" class="btn btn-primary"
       data-toggle="modal" data-target="#exampleModal">
        Order
  </button>
    </div>`
    container.appendChild(mealDiv);

    
});
}

const searchMeal=()=>{
    console.log('buttonClicked');
    const searchText = document.getElementById('search-field').value;
    console.log(searchText);
    loadMeals(searchText);
}
const loadMealDetails =idMeal=>{
    // console.log(idMeal);
    const url=`/https:/www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    
    .then(res=>res.json())
    .then(data=>displayDetails(data.meals[0]))
    
}
 const displayDetails =meals =>{
    document.getElementById('exampleModalLabel').innerText=meals.strMeal;
 }
loadMeals();