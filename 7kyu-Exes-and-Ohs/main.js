const XO = str => 
    str
        .toLowerCase()
        .split``
        .reduce((a, c) => ('x' === c ? ++a : 'o' === c ? --a : a), 0) === 0; 