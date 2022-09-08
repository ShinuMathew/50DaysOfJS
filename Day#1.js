/**
 * Question : Create a function which returns a random number in the given range.
 * */

// With Math.random
function random(min, max) {
    if(min <= max) {
        console.log(Math.ceil(Math.random() * (max - min) + min))
        // Math.random() return value between 0 to 1.
        // To get a number with max limit, we can multiply Math.random() with the max
        // It will always return a value from 0 to max but not >= max
        // However, we want to add a min limit as well here instead of 0
        // Ex: random(2, 10) : Number between 2 & 10
            // now we can get a number > min if we add the min to it
            // Ex : if min = 2 Math.random() + 2 > 2
            // But that could also exceed the max limit.
            // So we need to find a random value which is min less than the max value(max-min)
            // Hence : Math.ciel((Math.random() * (max-min)) + min)
    }    
}

random(2, 10);


// Without using Math.random - In correct
function random1(range) {
    var result = ""
    if(range < Math.pow(10, 9)) {
        var length = range.toString().length
        var d = Date.now().toString();
        var r = d.substring(d.length-4, d.length-1)
        var result = ""
        while(result.length < length + 3) {
            d = Date.now().toString();
            r = d.substring(d.length-4, d.length-1)           
            result += r
            result = shuffle(result)
        }       
        result = shuffle(result)
        result = result.substring(0, length-1)
    }
    result = shuffle(result)
    console.log(result)
}

function shuffle(s) {    
    return s.slice(1, s.length) + s.substring(0, 1)
}

// random1(1000000);