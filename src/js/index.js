

const BMI = new BMIcalculator();
const heightInput = document.querySelector('input[name=height]');
const weightInput = document.querySelector('input[name=weight]');
const button = document.getElementById('btn');
const result = document.getElementById('result');



button.addEventListener('click', () => {


  const bmiResult = BMI.calculateMetric({ height: heightInput.value, weight: weightInput.value });
  result.innerText = `BMI: ${bmiResult.value} - ${bmiResult.classification}`;


});

