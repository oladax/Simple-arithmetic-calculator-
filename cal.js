
//grabbing the input tag with its ID
let result = document.getElementById('User');

// function for running buttons
let calculate = (number) =>{
  /*/appdending the function parameter
   into the input tag named result.value
  /*/  
result.value+= number
}



//calcuting the values in the input tag
function results (){
  try {
  result.value = eval(result.value)
  } catch (error) {
    alert('Enter an accurate value!')
  };

}

// Arrow function for deleting the result.value into an empty string
const Delete = () => {
  
    result.value = ''
    error101.innerText = ''
}


// grabbing the Clear'S ID for resetting the into into 'AC'
const Clearc = document.getElementById('Clear-button');

/*/ Clear main function for slicing/removing
the last member of the result.value into -1/*/
const Clear = () => {
  
    result.value=result.value.slice(0, -1)
    error101.innerText = ''

    reset();
}

/*/Defining Clear's ID function in order to set- 
the innertext of the clear button to 'AC'/*/
function reset (){
    Clearc.innerText = 'AC'
    error101.innerText = ''
}