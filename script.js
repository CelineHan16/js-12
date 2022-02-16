// Focus - make input active
document.querySelector('input[type="text"]')
  .addEventListener('focus', function () {
    this.style.borderColor = "initial";
  });
 
// Lose focus.
document.querySelector('input[type="text"]')
  .addEventListener('blur', function () {
    if (!this.value) {
      this.style.borderColor = "red";
    }
  });

// Blur - Check if it is empty. If it's empty
// Focus

document.querySelector('input[type="text"]')
  .addEventListener('change', function () {
    // alert('Changed');
  });

document.querySelector('input[type="checkbox"]')
  .addEventListener('change', function () {
    if (this.checked) {
      alert("You are employed");
    }
    else {
      alert("You are unemployed");
    }
  });

document.querySelector('input[type="text"]')
  .addEventListener('input', function () {
    console.log('input event triggered');
  });
document.querySelector('input[type="text"]')
  .addEventListener('change', function () {
    console.log('change event triggered');
  });
document.querySelector('input[type="text"]')
  .addEventListener('keydown', function () {
    console.log('keydown event triggered');
  });

document.querySelector('select')
  .addEventListener('input', function () {
    console.log('input event triggered');
  });
// redo with switch
// document.querySelector('select')
//   .addEventListener('change', function () {
//     if(this.value = 0) {
//       alert("It is Chui");
//     }
//     else if(this.value = 1) {
//       alert("It is Issyk-Kul");
//     }
//     else if(this.value = 2) {
//       alert("It is Osh");
//     }
//     else if(this.value = 3) {
//       alert("It is Naryn");
//     }
//     else if(this.value = 4) {
//       alert("It is Batken");
//     }
//     else if(this.value = 5) {
//       alert("It is Talas");
//     }
//   });


document.querySelector('input[type="text"]')
  .addEventListener('cut', function () {
    console.log('cut event triggered');
  });
document.querySelector('input[type="text"]')
  .addEventListener('copy', function () {
    console.log('copy event triggered');
  });
document.querySelector('input[type="text"]')
  .addEventListener('paste', function (event) {
    event.preventDefault();
    console.log('paste event triggered');
  });


let radios = document.getElementsByName('gender');
document.querySelector('form') 
  .addEventListener('submit', function (event) {
    event.preventDefault();

    // let active = null;
    let active = document.querySelector('input', )
    radios.forEach(function(radio) {
      if (radio.checked) {
        active = radio;
      }
    })
    alert(`${active.nextSibling.textContent} was selected`);
  });


radios.forEach(function(radio) {
  radio.addEventListener('input', function() {
    alert(`${this.id} was selected`);
  })
})
let circle = false;
document.querySelector('#example')
  .addEventListener('click', function () {
    this.className = "round-example";
  });

document.querySelector('#example')
  .addEventListener('click', function () {
    this.id;
  });



