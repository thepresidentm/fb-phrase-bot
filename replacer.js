module.exports = {

    rp(string, content){
        const delimiter = '%';
        let result = '';
        string = string.split(delimiter);
        for(var i = 0; i < string.length; i++){
            result += string[i] + (i != string.length - 1 ? content[i] : '');
        }
        return result;
    }

}