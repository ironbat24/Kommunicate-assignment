function getUrlParameterValue(url,parameter) {
    const params = url.split("?")[1];
    const pairs = params.split("&");
    for (let i = 0; i < pairs.length; i ++) {
        let temp = pairs[i].split("=")
        let key = temp[0];
        let value = temp[1];
        if (key === parameter)
            return value;
    }
}

let url= "https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby";
console.log(getUrlParameterValue(url,"utm_campaign"));