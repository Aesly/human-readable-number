module.exports = function toReadable (number) {
        let numberValue = number;
        let digits = numberValue % 10;           
        numberValue = (numberValue - digits) / 10       
        let tens = numberValue % 10;
        numberValue = (numberValue - tens) / 10          
        let hundred = numberValue % 10; 
        numberValue = (numberValue - hundred) / 10       
        
        let digitsArray = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let teensArray = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let tensArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        
        let hundredText; 
        if (hundred !== 0) {
            hundredText = `${digitsArray[hundred]} hundred`;
        } else {
            hundredText = '';
        }       
        
        let tensText;
        if (tens === 1) {
            tensText = teensArray[digits];
        } else if (tens !== 0 && tens !== 1) {
            tensText = tensArray[tens];
        } else if (tens === 0){
            tensText = '';
        }
    
        let digitsText;
        if (tens === 1 || (hundred !== 0 || tens !== 0) && digits === 0) {
            digitsText = '';
        } else if ((hundred !== 0 || tens !== 0 && tens !== 1) && digits !== 0 || (hundred == 0 || tens == 0) && (digits === 0 || digits !== 0))  {
            digitsText = digitsArray[digits];
        } 
    
        let resultArray = [hundredText, tensText, digitsText];
        return resultArray.filter(element => element !== '').join(' ');
}
