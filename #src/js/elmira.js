let searchBtn = document.querySelector('.search-link');
let searchField = document.querySelector('.search-field-block');
let searchFieldContent = document.querySelector('.search-field-block-content');
let closeBtn = document.querySelector('.close-btn');
let input = document.querySelector('.search-field-block input');

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchField.classList.add('active');
});
closeBtn.addEventListener('click', () => {
    searchField.classList.remove('active');
});
input.addEventListener('input', () => {
    searchFieldContent.classList.add('active');
    if ((input.value == null || input.value === "") && searchFieldContent.classList.contains('active')) {
        searchFieldContent.classList.remove('active');
    }
});

let file = document.querySelector('.file-attach-input');
file.addEventListener('change', (e) => {
    document.getElementById("file-name").innerHTML = e.target.files[0].name;
});

let checkboxSpanFeedback = document.querySelector('#feedback-pop-up .checkbox-field span');
if (document.documentElement.offsetWidth < 992) {
    checkboxSpanFeedback.innerHTML = "я согласен с условиями";
}

document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
    this.querySelector('.custom-select').classList.toggle('open');
});

for (let option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            if (this.parentNode.querySelector('.custom-option.selected')) {
                this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            }
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').innerText = this.innerText;
        }
    });
}
window.addEventListener('click', function (e) {
    const select = document.querySelector('.custom-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});
