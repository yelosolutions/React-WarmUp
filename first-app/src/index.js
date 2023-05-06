import React from 'react';
import ReactDom from 'react-dom';

// stateless functional component
// always return JSX


// function Greeting() {
//   return <h1>This is my first react component</h1>;
// };

//An arrow function(another way) 
// const Greeting = () => {
//   return React.createElement('h2', {}, 'a react component');
// }

const Booklist = () => {
return (
  <section>
    <Book/>
    <Book/>
  </section>
    
);
};


const Book = () => {
return (
    <article>
        <Image></Image>
        <Title/>
        <Author/>
    </article>
);
};

const Image = () => (
    < img 
      src="https://images-na.ssl-images-amazon.com/images/I/71zwHcw-D7L._AC_UL600_SR600,400_.jpg" 
      alt=""
      width="300"
      height="300"
    />
);

const Title = () => {
    return <h2>I will teach you to be rich</h2>;
};

const Author = () => {
    return <p>Ramit Sethi</p>
}


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

const root = document.getElementById('root');

ReactDom.render(<Booklist/>, root);
