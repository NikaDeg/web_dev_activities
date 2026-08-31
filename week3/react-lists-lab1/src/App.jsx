import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Book from './Book';
import booksData from './booksData';
import './Book.css';


// function App() {
//   return (
//     <div className="App">
//       <h1>Book List</h1>
//       <div className="book-list">
//   {booksData.map(book => <Book key={book.id}  book={book} name="Matti"/>)} 
//       </div>
//     </div>
//   );
  
// }

// export default App


function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {
        booksData.map(
          (book) => (
          <Book key={book.id}  book={book} />))
        }
      </div>
    </div>
  );
}

export default App;

