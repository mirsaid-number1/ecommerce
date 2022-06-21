import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);


// {

//     function Fn(name){
//         this.name = name; 
//     };
//     let fn = new Fn('MIrsaid');






//     class Obj {
//         constructor(name,age){
//             this.name = name;
//             this.age = age;
//         }

//         fullInfo(){
//             return this.name + " " + this.age;
//         }

//     };

//     let obj = new Obj('Said', 18);

//     class Child {
//         constructor(){
//             this.age = 18;
//             this.name = 'hello';
//         }

//     };
     
//     class Parent extends Child {
//         constructor(){
//             super();
//             this.surname = 'anonymous';
//         }
//     };

//     let parent = new Parent();




//     class Final {
//         constructor(name){
//             this.name = name;
//             this.hobby = ['playing computor games','reading books','typing','etc'];
//         }

//         static fstatic(arr){
//             return arr.join(', ');
//         }

//         get name(){
//             return this.update;
//         }

//         set name(value){
//             this.update = 'entered value is: ' + value + '.That value type is ' + typeof value; 
//         }

//     };

//     let final0 = new Final('Mirsaid');
//     let final1 = new Final(1);
//     let final2 = new Final(true);

//     console.log(Final.fstatic(final0.hobby));
//     console.log(final0.name);
//     console.log(final1.name);
//     console.log(final2.name);


//     let arr = [[1,2,3,4,5,6,7,8,9]];
//     console.log(...arr);

//     function spread(a,b,c,...rest) {
//         console.log(a);
//         console.log(b);
//         console.log(c);
//         console.log(...rest)
//     };
//     const numbers = [1,2,3,4,5,6,7,7];
//     spread(...numbers);

// }


// {

//     function Home(location,city){
//         this.country = location;
//         this.city = city;

//         return this;
//     }
//     let home = new Home('Uzbekistan','Tashkent');
//     console.log('second Main part !!!!!!1111');
//     console.log(home);

//     class Address {
//         consturctor(){
//             super();
//         }
//     }

// }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();
