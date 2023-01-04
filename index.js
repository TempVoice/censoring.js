const unorm = require('unorm').nfkc;
const removeAccents = require('remove-accents');
const latinize = require('latinize');
const unidecode = require('unidecode');

module.exports = {
    censor: (originalString, array, replacement) => {
        const preparedArray = array.map(w => w.toLowerCase());
        const replacements = { '0': 'o', '9': 'g', '7': 't', '5': 's', '4': 'a', '3': 'e', '1': 'i' };
        const regex = new RegExp(Object.keys(replacements).join('|'), 'g');
    
        let checkString = unidecode(unorm(latinize(removeAccents(originalString.toLowerCase())))).replace(/\[\?\]/g, '') || 'gibberish';
        checkString = checkString.replace(regex, char => replacements[char]);
        checkString = checkString.replace(/,|\.|:|;|_|-|\+|\*|'|`|!|\?/g, '')
    
        let originalArray = originalString.split(' ');
        let checkArray = checkString.split(' ');
    
        for (let i = 0; i < originalArray.length; i++) {
            if (preparedArray.includes(checkArray[i])) {
                originalArray[i] = replacement.repeat(checkArray[i].length)
            }
        }
    
        return originalArray.join(" ")
    },
    censorable: (originalString, array) => {
        const preparedArray = array.map(w => w.toLowerCase());
        const replacements = { '0': 'o', '9': 'g', '7': 't', '5': 's', '4': 'a', '3': 'e', '1': 'i' };
        const regex = new RegExp(Object.keys(replacements).join('|'), 'g');
    
        let checkString = unidecode(unorm(latinize(removeAccents(originalString.toLowerCase())))).replace(/\[\?\]/g, '') || 'gibberish';
        checkString = checkString.replace(regex, char => replacements[char]);
        checkString = checkString.replace(/,|\.|:|;|_|-|\+|\*|'|`|!|\?/g, '')
    
        let originalArray = originalString.split(' ');
        let checkArray = checkString.split(' ');
    
        for (let i = 0; i < originalArray.length; i++) {
            if (preparedArray.includes(checkArray[i])) {
                return true
            }
        }
    
        return false
    }
}