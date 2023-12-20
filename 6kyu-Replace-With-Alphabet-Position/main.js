const alphabetPosition = text => 
    console.log(
        [...text.replace(/[^a-z]/gi,'').toLowerCase()].map(e => e.charCodeAt() - 96).join(' ')
    )

    alphabetPosition("The sunset sets at twelve o' clock.")