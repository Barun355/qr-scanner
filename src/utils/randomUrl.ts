function randomElemArr(arr: string[]){
    const index = Math.floor(Math.random() * ((arr.length - 1) - 0) ) + 0;
    return arr[index];
}

interface RandomUrlOptType {
    upperCase?: boolean;
    lowerCase?: boolean;
    digits?: boolean;
    symbols?: boolean;
    specialSymbols?: boolean;
    all?: boolean;
}


function randomUrl(length:number, options: RandomUrlOptType) {

    const UpperCase = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
    ];
    const LowerCase = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
    ];
    const digits = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9"
    ];
    const symbols = [
        "-",
        "_",
    ];

    var urlOptions:string[] = [];
    if (options?.upperCase == true){
        urlOptions = urlOptions.concat(UpperCase);
    }
    if (options?.lowerCase == true){
        urlOptions = urlOptions.concat(LowerCase);
    }
    if (options?.specialSymbols == true){
        urlOptions = urlOptions.concat(symbols);
    }
    if (options?.digits == true) {
        urlOptions = urlOptions.concat(digits);
    }
    if (options?.all == true) {
        urlOptions = urlOptions.concat(UpperCase, LowerCase, symbols, digits);
    }

    var url = '';

    for(var i = 0; i < length; i++){
        url = url + randomElemArr(urlOptions);
    }
    
    return url;
}


export {
    randomUrl
}