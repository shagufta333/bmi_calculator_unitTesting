const BMIcalculator = require('../src/js/bmiCalculator')
subject = new BMIcalculator()

describe('BMIcalculator', () => {

    describe('#calculateMetric()', () => {

        describe('shagufta', () => {
            var bmiResults
            beforeEach(() => {
             bmiResults = subject.calculateMetric({height: 1.60, weight:56})
          });

           it('is expected to return a numeric value if  given proper arguments', () => {

            
            expect(bmiResults.value).toEqual(21.87)
            
          });

          it('is expected to return a classfication of "normal "', () => {
            expect(bmiResults.classification).toEqual("normal")
           });

        });

        describe('Thomas', () => {

            var bmiResults
            beforeEach(() => {
             bmiResults = subject.calculateMetric({height: 1.83, weight:105})
          });

           it('is expected to return a numeric value if  given proper arguments', () => {

            
            expect(bmiResults.value).toEqual(31.35)
            
          });

          it('is expected to return a classfication of "obesity class 1 "', () => {
            expect(bmiResults.classification).toEqual("obesity class 1")
           });
            
        });
        
        
        
    });
    
});