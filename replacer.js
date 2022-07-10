module.exports = {

    rp(string, content){
        const delimiter = '%';
        let result = '';
        string = string.split(delimiter);
        for(var i = 0; i < string.length; i++){
            if(i != string.length - 1){
                result += string[i] + content[i];
            }else{
                result += string[i];
            }
        }
        return result;
    }

}