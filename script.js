const calculateTemp = () =>{
    const numberTemp = document.getElementById("temp").value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById("temp_diff");
    const valueTemp =  temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);


    const celToFah = (celc) =>{
      let farenheit = Math.round((celc * 9/5) + 32);
      return farenheit;
    };

    const fahToCel = (fehr) =>{
        let farenheit = Math.round((fehr -32) *5/9);
        return farenheit;
      };

    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultCotainer').innerHTML= `= ${result} farenheit`;
    }else{
        result = fahToCel(numberTemp);
        document.getElementById('resultCotainer').innerHTML = `= ${result} celcius`;
    }
}