document.addEventListener('DOMContentLoaded', function(){
  const signupForm = document.getElementById('signupForm')
  const signupButton = document.getElementById('signupButton')

  if(signupForm != null && signupButton != null){
    signupButton.addEventListener('click', function(event){
      const inputElements = signupForm.querySelectorAll(':invalid')

      if( inputElements.length > 0){
        event.preventDefault()
        event.stopImmediatePropagation();
        signupForm.classList.add('invalid')

        inputElements.forEach( item => {
          if(item.validity.tooShort){
            item.classList.add('too-short')
          }
          else if(item.validity.tooLong){
            item.classList.add('too-long')
          }
          else if(item.validity.valueMissing){
            item.classList.add('empty')
          }
          else if(item.validity.typeMismatch){
            item.classList.add('type-mismatch')
          }
          else if(item.validity.patternMismatch){
            item.classList.add('pattern-mismatch')
          }
        })
      }else{
        signupForm.classList.remove('invalid')
      }
    })
  }
})