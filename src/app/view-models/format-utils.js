

module.exports = {
    doubleDigit: function(numb) {
        if(numb < 10)
            return '0' + numb.toString();
        return numb.toString();
    }
};

