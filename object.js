var empty_object={};
var stooge = {
    "first-name":"Jerome",
    "last-name":"Howard"
}

var flight ={
    airline:"Oceanic",
    number:815,
    departure:{
        IATA:"SYD",
        time:"2004-09-22 14:55",
        city:"Sydney"
    },
    arrival:{
        IATA:"LAX",
        time:"2004-09-23 10:42",
        city:"Los Angeles"
    }
};

print(stooge["first-name"]);
print(flight.departure.IATA);
// 更新 update

stooge["first-name"] = "Happy";

//引用 Reference
var x = stooge;
x["first-name"] = "Bear";
print(x["first-name"]);
print(stooge["first-name"]);

// 原型 Prototype 
var another_stooge = object.create(stooge);

