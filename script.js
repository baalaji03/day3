// let obj1 ={
//     name:"Person 1",
//     age:5
// };

// let obj2 = {
//     age:5,
//     name:"Person 1"
// };

// var str1 = JSON.stringify(obj1,Object.keys(obj1).sort());

// var str2 = JSON.stringify(obj2,Object.keys(obj2).sort()) ;
// const equal= str1 === str2;
// console.log(equal);



//! XmlHttpRequest to print the country name ,region and the sub-region


// var request = new XMLHttpRequest();
// request.open("GET","https://restcountries.com/v3.1/all",true);
// request.send();
// request.onload = function() {
//     var data = request.response;
//     var result = JSON.parse(data);
//     for(var i=0;i<result.length;i++)
//     {
//         console.log("Country name is "+result[i].name.common+","+" "+"Region name is "+result[i].region+","+" "+"Sub-Region name is "+result[i].subregion);
//     }

//    }


//! to print the flags 
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true);
request.send();
request.onload = function() {
    var data = request.response;
    var result = JSON.parse(data);
    for(var i=0;i<result.length;i++)
    {
        console.log(result[i].flags.png);
    }

   }

   

