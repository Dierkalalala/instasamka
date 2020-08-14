let searchBtn = document.querySelector('.search-link');
let searchField = document.querySelector('.search-field-block');
let searchFieldContent = document.querySelector('.search-field-block-content');
let closeBtn = document.querySelector('.close-btn');
let input = document.querySelector('.search-field-block input');

searchBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    searchField.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    searchField.classList.remove('active');
});
input.addEventListener('input', () => {
    searchFieldContent.classList.add('active');
    if((input.value == null || input.value === "") && searchFieldContent.classList.contains('active')){
        searchFieldContent.classList.remove('active');
    }
});
