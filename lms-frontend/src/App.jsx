import { useState } from 'react'

const BookList = ({books}) => {
    
}

const Book = ({title, author, isbn, status}) => {

}

const App = () => {
    const [count, setCount] = useState(0)
    const [nameFilter, setNameFilter] = useState('')

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

    const filterByName = (event) => {
	event.preventDefault()
    }
    
    const handleNameFilter = (event) => {
	setNameFilter(event.target.value)
    }
    
  return (
      <>
	  <div>
	      <h1>American Spaces Library</h1>
	      <form onSubmit={filterByName}>
		  search for title: <input value={nameFilter}
					   onChange={handleNameFilter}/>
	      </form>
	  </div>
	    <div>
		{books.map((book) => (		    
		    <li key={book.isbn}>
			<button>Check in/out</button>
			    <strong>{book.name}</strong>
			    , by <em>{book.author}</em>.
			    ISBN: {book.isbn} {book.status} 
			</li>
	    ))}
		</div>
    </>
  )
}

export default App
