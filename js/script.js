let elForm = document.querySelector(".form");
let elFormInput = document.querySelector(".form__input");
let elFormSelect = document.querySelector(".form__select");
let elFormResult = document.querySelector(".form__result");

// let elFormDollar = document.querySelector(".form__dollar");
// let price = 10.780;

elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();

    let inputValue = elFormInput.value;
    let selectValue = elFormSelect.value;


    elFormResult.textContent = `${inputValue * selectValue} UZS`;

    // console.log(inputValue, selectValue);
})



// let a = 600;
// let b = 420;
// let c = a + b;
// console.log(c);