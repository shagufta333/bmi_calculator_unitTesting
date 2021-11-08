
class BMIcalculator{

    calculateMetric(options){

        const weight= options.weight;
        const height = options.height/100;
        const bmiValue = ((weight / (height* height)).toFixed(2));
        const bmiResults = {

            value: parseFloat(bmiValue),
            classification: this.getBmiClassfication(parseFloat(bmiValue))
        }
        return bmiResults;


    }

    getBmiClassfication(value){

       

       if (value < 18.5) {
           return 'underweight'
       } else if (value <= 24.9) {
           return 'Normal Weight'
       }
       else if (value <= 29.9) {
        return 'Overweight'
    }
    else if (value <= 34.9) {
        return 'Obesity Class 1'
    }
    else if (value <= 39.9) {
        return 'Obesity Class 2'
    }
    else if (value >= 40)  {

        return'Extreme Obesity Class 3'
}
    }



}
if (typeof module !== 'undefined' && module.exports){
    module.exports = BMIcalculator
}
