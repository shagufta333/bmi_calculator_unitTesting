

 const BMI        = new BMIcalculator();
 const heightInput= parseInt(document.querySelector('input[name=height]'));
 const weightInput= parseInt(document.querySelector('input[name=weight]'));
 const button     = document.getElementById('btn');
 const result     = document.getElementById('result') ;

 

      button.addEventListener('click', () => {


        const bmiResult = BMI.calculateMetric({height:heightInput.value, weight:weightInput.value});
        result.innerText = BMI: ${bmiResult.value} - ${bmiResult.classification};
    

});

