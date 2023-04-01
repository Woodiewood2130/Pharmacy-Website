// function openForm() {
//   document.getElementById("loginform").style.display = "block";
// }

function closeForm() {
  document.getElementById("loginform").style.display = "none";
}

function openForm() {
    document.getElementById("loginform").classList.toggle("show");
  }

// window.onclick = function(event) {
//     if (!event.target.matches('.open-button')) {
//       var dropdowns = document.getElementsByClassName(".form-popup");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }

const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      

links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})

const buttonRight = document.getElementById('slideRight');
const buttonLeft = document.getElementById('slideLeft');

buttonRight.onclick = function () {
  document.getElementById('items_flex_container').scrollLeft += 50;
};
buttonLeft.onclick = function () {
  document.getElementById('items_flex_container').scrollLeft -= 50;
};