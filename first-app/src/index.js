import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

/*setup variables
const img1 = "https://images-na.ssl-images-amazon.com/images/I/71zwHcw-D7L._AC_UL600_SR600,400_.jpg";
const title1 = "I Will Teach You to Be Rich: No Guilt.";
const author1 = " Ramit Sethi ";

//setup variables
const img2 = "https://images-na.ssl-images-amazon.com/images/I/81a5KHEkwQL._AC_UL600_SR600,400_.jpg";
const title2 = "Oh, the Places You'll Go! ";
const author2 = " Dr. Seuss";
*/

/*Book1 class - creates book objects
class Book1{
  constructor (img, title, author) {
    this.img = img;
    this.title = title;
    this.author = author;
  };
};

const book = new Book1(img1, title1, author1);

const book1 = new Book1(img2, title2, author2);
*/

// object
const books = [
  {
  img : "https://images-na.ssl-images-amazon.com/images/I/71zwHcw-D7L._AC_UL600_SR600,400_.jpg",
  title : "I Will Teach You to Be Rich: No Guilt.",
  author : " Ramit Sethi"
  },
  {
  img : "https://images-na.ssl-images-amazon.com/images/I/919mmNCTaaL._AC_UL600_SR600,400_.jpg",
  title : "The Intelligent Investor",
  author : " Benjamin Graham"
  }
];

/*
const names = ['john', 'peter', 'Jane'];
const newNames = names.map((name) => {
  //console.log(name);
  return <h1>{name}</h1>;
});
console.log(newNames);
*/

//a booklist component
function Booklist() {
  return (
  <section className="booklist">
    {books.map((book) => {
      console.log(book)
      return <article>Hello</article>
    })

    /* {<Book
      //using object and property value
      img = {book.img}
      title = {book.title}
      author = {book.author}

      //CHILDREN PROPS GO IN BETWEEN THE TAGS(AVOID SELF CLOSING TAGS)
    >
      <p>Lorem, ...this is a child... ipsum dolor sit amet consectetur adipisicing elit. Quisquam, nihil pariatur! Culpa at facilis inventore. Expedita cupiditate libero odio laboriosam!</p>
    </Book>
    
    <Book
      //using prop name assigned prop value as an object's property value)
      img = {books[0].img}
      title = {books[0].title}
      author = {books[0].author}
    />
    <Book
      //using object and property value
      img = {book1.img}
      title = {book1.title}
      author = {book1.author}

      //CHILDREN PROPS GO IN BETWEEN THE TAGS(AVOID SELF CLOSING TAGS)
    ></Book> */}
  </section>
  );
};

//a book component
const Book = (props) => {
  console.log(props);
  //object destructuring(REMEMBER TO READ ABOUT THIS)
  const { img, title, author} = props;

  return (
  <article className="book"> 
    <img src={img} alt=""/>
    <h2>{title}</h2>
    <h4>{author}</h4>

  </article>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<Booklist/>, root);




//https://images-na.ssl-images-amazon.com/images/I/919mmNCTaaL._AC_UL600_SR600,400_.jpg
//https://images-na.ssl-images-amazon.com/images/I/71zwHcw-D7L._AC_UL600_SR600,400_.jpg


// stateless functional component
// always return JSX


// function Greeting() {
//   return <h1>This is my first react component</h1>;
// };

//An arrow function(another way) 
// const Greeting = () => {
//   return React.createElement('h2', {}, 'a react component');
// }

/*

//multiline implicit return function
const Person = () => 
  <h1>Jay</h1>

//single-line explicit return function
const Message = () => { return <p>Hey yall</p>}






class Car{
  constructor (name, model) {
    this.name = name;
    this.model = model;
  };
  hoot (){
    console.log('Peep!')
  };
}

const car = new Car('Mazda', 'x50');


const Draw = () => {
  return (
    <img src="car.png" alt="car" />
  )
}

const MessageCar = () => car.hoot();


function Greeting () {
  return (
  <div>
    <Person/>
    <Message/>
    <Draw/>
    <MessageCar/>
  </div>
);
}

// const Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {}, 'Whats Up?'));
// }
*/


