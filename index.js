const unorm = require('unorm').nfkc;
const removeAccents = require('remove-accents');
const latinize = require('latinize');
const unidecode = require('unidecode');

export const censor = {
    add : function censor(string, array, replacement) {
        let list = array.map(w => w.toLowerCase());
        let censor = string.split(' ');
        
        for (let i = 0; i < censor.length; i++) {
            let word = unidecode(unorm(latinize(removeAccents(censor[i].toLowerCase())))).replace(/\[\?\]/g, '') || 'gibberish';
            
            word = word.replaceAll('0', 'o')
            word = word.replaceAll('9', 'g')
            word = word.replaceAll('7', 't')
            word = word.replaceAll('5', 's')
            word = word.replaceAll('4', 'a')
            word = word.replaceAll('3', 'e')
            word = word.replaceAll('1', 'i')
        
            word = word.replaceAll(',', '')
            word = word.replaceAll('.', '')
            word = word.replaceAll(':', '')
            word = word.replaceAll(';', '')
            word = word.replaceAll('_', '')
            word = word.replaceAll('-', '')
        
            if (list.includes(word)) {
                censor[i] = replacement.repeat(word.length)
            }
        }
    
        return censor.join(" ")
    }
}