import { useState } from 'react'

const BookList = ({books}) => {
    
}

const Book = ({title, author, isbn, status}) => {

}

const App = () => {
    const [count, setCount] = useState(0)

    let books = [

	{
	    name: 'The Practice of Poetry',
	    author: 'Behn, Robin',
	    isbn: '9780062730244',
	    status: 'available'
	},
	{
	    name: 'On War',
	    author: 'Von Clausewitz, Carl',
	    isbn: '9780140444278',
	    status: 'available'
	},
	{
	    name: 'Far From the Madding Crowd',
	    author: 'Hardy, Thomas',
	    isbn: '333168801',
	    status: 'checked out'
	},
    ]
  return (
    <>
	<div>
	    Hello World
	    {books.map((book) => (
			<li key={book.isbn}>
	    <strong>{book.name}</strong>, by <em>{book.author}</em>. ISBN: {book.isbn} {book.status}
	</li>	    ))}
      </div>
    </>
  )
}

export default App
