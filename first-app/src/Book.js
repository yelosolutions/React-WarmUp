import React from 'react'

//a book component
const Book = (props) => {
  //object destructuring(REMEMBER TO READ ABOUT THIS)
  const { img, title, author} = props;

  const clickHandler = (e) => {
    console.log(e); // React event object(e)
    console.log(e.target);
    console.log('What!'); 
  }

  const complexExample = (author) => {
    console.log(author);
  }

  return (
  <article className="book" onMouseOver={() => console.log(author)}> 
    <img src={img} alt="" height="200" width="200"/>
    <h2 onClick={() => console.log(title)}>{title}</h2>
    <h4>{author}</h4>
    <button type="button" className="button" onClick={clickHandler} >
      Reference Example
    </button>
    <button type="button" onClick={() => complexExample(author)} >
      More Complex Example
    </button>
  </article>
  );
}

export default Book