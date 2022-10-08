// // სავარჯიშო 1
// let array = [5, 25, 89, 120, 36];
// array.push('javascript', 'python');
// array.unshift('html', 'css');
// console.log(array.length);
// array.shift() && array.pop();

// console.log(array);



// // სავარჯიშო 2
// let fruits = ['ფორთოხალი', 'ბანანი', 'მსხალი'];
// console.log(fruits.length);
// fruits.unshift('საზამთრო') && fruits.push('ვაშლი', 'ანანსი');
// console.log(fruits.length);
// fruits.splice(2,0, 'მანგო');
// let newFruits = fruits.slice (1,2);
// console.log(newFruits);
// console.log(fruits);



// // სავარჯიშო 3
// let array = [12, 25, 3, 6, 8, 14, 7, 23];
// let newArray = array.map(items => items/3);

// console.log(newArray);



// // სავარჯიშო 4
// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
// let newArray = array.filter(items => (typeof items == 'string'));

// console.log(newArray);



// // სავარჯიშო 5
// let languages = ['html', 'css', 'javascript', 'python', 'php'];
// let newLanguages = languages.filter (items => items.length > 3);
 
// console.log(newLanguages);



// სავარჯიშო 6
// let item = [12, 'google', 32, null, 'yahoo', 25];
// let newItem = item.map(elements => elements)



// // სავარჯიშო 7
// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
// let newWords = words.filter (items => items.includes ('m') || items.includes ('M'));

// console.log(newWords);



// // სავარჯიშო 8
// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];
// let unifiedArray = arr1.concat(arr2).concat(arr3);

// console.log(unifiedArray);



// // სავარჯიშო 9
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(numbers){
//     sum += numbers;
//     return sum;
// })
// console.log(sum);



// // სავარჯიშო 10
// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];
// let newNumbers = numbers.filter (items => items > 0);

// console.log(newNumbers);



// // სავარჯიშო 11
// let arr = [-1, -2, -3, 4].some(items => items > 0);

// console.log(arr);



// // // სავარჯიშო 12
// let array = [23,45,32,5,87,7,3,98];
// let newArray = array.sort ((x,y) => y-x)[array.length-1];

// console.log(newArray);



// // სავარჯიშო 13
// let array =[1, 2, 3, 4, 5];
// array.splice (3,0, 'a', 'b', 'c');

// console.log(array);