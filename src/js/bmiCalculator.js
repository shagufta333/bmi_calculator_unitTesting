
class BMIcalculator{

    calculateMetric(options){

        const weight= options.weight
        const height = options.height
        const bmiValue = (weight / (height* height)).toFixed(2)
        const bmiResults = {

            value: parseFloat(bmiValue),
            classification: this.getBmiClassfication(parseFloat(bmiValue))
        }
        return bmiResults


    }

    getBmiClassfication(value){

       // return 'obesity class 1'

       if (value >30.0) {
           return 'obesity class 1'
       } else if (value < 24.9) {
           return 'normal'
       }
    }



}
if (window.module){
    module.exports = BMIcalculator
}
