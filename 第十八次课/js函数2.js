

// //变量

// // int apple = 20

// var apple = 20;
// var orange = "橘子";


// //es6  
// let lemon = "柠檬"
// let banana = 30;
// const pear = 40;

// //在js里面，一切都是对象
// //语法糖
// var apple1 = {}
// console.log(typeof apple1)

// //3q

// var apple2 = Object.create(null);

// console.log(typeof apple2 + "  apple2 ");


// var apple3 = function bigApple(){
//     console.log("this is apple3 big apple ");
// }
// function smallApple(){
//     console.log("this is small apple");
// }

// apple3()
// // bigApple()
// smallApple()


//匿名函数
// var apple4 = function (){
//     console.log("this is apple3 big apple ");
// }

// apple4();

//es6 箭头函数

// var apple5 = ()=>{
//     console.log("this is arrow function ")
// }
// apple5()


// var apple6 = ()=>console.log("this is arrow function ")

// apple6()

// var apple8 = ()=>{
//     console.log("this is arrow function apple8");
// }

// var apple7 = ()=> {
//     return ()=>{
//         return ()=>{
//             console.log("this is arrow function apple9");
//         }
//     }
// }
// apple7()()()
// var temp = apple7();
// //var temp = apple8

// apple8()
// temp()

// var apple10 = (x,y)=>{
//     console.log("this is apple10 == " + (x + y)
//     );
//     return (x,y)=>{
//             console.log("this is apple11 == " + (x+y))
//     }
// }
// //NaN  not a number
// // apple10()
// apple10(4,5)(8,9)


// var apple12 = ()=>console.log("10"); console.log("13")
// apple12();

// function apple13(){
//     var name ="苹果13";
//     function apple13Son(){
//         console.log("this is apple 13 son")
//     }
//     apple13Son()
//     console.log("this is apple13 ")
//     return {
//         test:apple13Son
//     }

// }
// apple13().test();


// var temp1 = function(){
//     console.log("this is apple14....")
//     return 100;
// }

// var apple14 = temp1()

// console.log(apple14);



var  result = function(){
    console.log("this is apple15")
    return 200;
}()

console.log(typeof result)


// var result = apple15()


















