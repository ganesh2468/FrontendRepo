function objectSample(object, name, price){
    object[name]=price;
    return object;
}
console.log(objectSample({}, "Brutus",300))
console.log(objectSample({piano: 500, stereo: 300 }, "Caligula", 440))