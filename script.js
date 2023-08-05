// 1.Print odd numbers in an array
const odd = (arr) => {
 let result = [];
  for (var i=0;i<arr.length;i++){
       if(arr[i]%2!==0){
        result.push(arr[i]);
       }
  }
  return result;
  };
  console.log(odd([1,2,3,4,5,6,7,8,9]));
  console.log(odd([44,66,88,33,44,55]));

 
  // 2.Convert all the strings to title caps in a string array 
   
function title (str) {
  str = str.toLowerCase().split(" ");
  
  
  for (let i = 0; i < str.length; i++) {
    
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" ");
}
console.log(title("geeks for geeks"));
console.log(title("fuction task"));

// Sum of all numbers in an array
 
var arr = [1,2,3,4,5,6,]
const output= arr.reduce(function(max,curr){
  if(curr>max){
    max= curr;
  }return max;
},0)
console.log(output);
 


 
 