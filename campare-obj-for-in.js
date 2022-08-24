var obj1 = {
    name : "Person1",
    age : 5
}
var obj2 = {
    age : 5,
    name : "Person1"
}
for (let key in obj1) {
    console.log(key +":" , obj1[key]);
}
for (let key in obj2) {
    console.log(key +":", obj2[key]);
}

if (obj1["name"] === obj2["name"])
{
    console.log("Both Object data are Same");
}
else {
    console.log("Both Object Data are Not Same");
}