document.addEventListener('DOMContentLoaded', function(){
  let signupForm = document.getElementById('signupForm')
  let signupButton = document.getElementById('signupButton')

  if(signupForm != null && signupButton != null){
    signupButton.addEventListener('click', function(event){
      if(signupForm.querySelectorAll(':invalid') != null){
        event.preventDefault
        signupForm.classList.add('invalid')
      }
    })
  }
})