import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';


function AdminBookTable() {

    
    const user = useSelector(state => state.user);
    const authToken = user.authToken;

    // use state for storing db book information after sending request to server
    const [BookData, setBookData] = useState([]);

    // use state for adding new book. Entered data field values are stored in use state.
    const [newBook, setNewBook] = useState({
        id: '',
        image: '',
        name: '',
        author: '',
        type: '',
        price: '',
        quantity: 0
    });

    // UseEffect for listing all books that are in database
    useEffect(() => {
        getAllBooks();
    }, []);

    // Function to be executed with useEffect for listing all books
    // Received information is stored at newBook useState 
    const getAllBooks = async () => {
        try {
            let response = await axios.get('http://localhost:5234/api/Book/GetAll');
            setBookData(response.data);
        } catch (error) {
            console.log('Get All Books Error', error);
        }
    };

    // function to be used for increasing book quantity by 1
    const handleAddOne = (book) => {
        // updating book use state 
        setBookData(prevData => {
            return prevData.map(b => {
                if (b.id === book.id) {
                    return { ...b, quantity: b.quantity + 1 };
                } else {
                    return b;
                }
            });
        });
    };

    // function to be used for reducing book quantity by 1
    const handleRemoveOne = (book) => {
        setBookData(prevData => {
            return prevData.map(b => {
                if (b.id === book.id) {
                    const newQuantity = b.quantity > 0 ? b.quantity - 1 : 0;
                    return { ...b, quantity: newQuantity };
                } else {
                    return b;
                }
            });
        });
    };

    const handleInputChange = (bookId, field, value) => {
        setBookData(prevData => {
            return prevData.map(b => {
                if (b.id === bookId) {
                    return { ...b, [field]: value };
                } else {
                    return b;
                }
            });
        });
    };

    const handleNewBookChange = (field, value) => {
        setNewBook(prevData => ({
            ...prevData,
            [field]: value
        }));
    };

    // Function that sends put request to server for updating book information 
    const handleSaveChanges = async (book) => {
        try {
            await axios.put(
                `http://localhost:5234/api/Book/UpdateBook/`,
                book,
                {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                }
            );
            alert('Changes saved successfully');
        } catch (error) {
            console.log('Save Changes Error', error);
        }
    };

    // Function that sends put request to server for adding new book information 
    const handleAddNewBook = async () => {
        try {
            await axios.put(
                `http://localhost:5234/api/Book/AddBook`,
                {
                    id: newBook.id,
                    name: newBook.name,
                    image: newBook.image,
                    author: newBook.author,
                    type: newBook.type,
                    price: newBook.price,
                    quantity: newBook.quantity
                },
                {
                    headers: {
                        'Authorization': `Bearer ${authToken}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            alert('New book added successfully');
            setNewBook({
                id: '',
                image: '',
                name: '',
                author: '',
                type: '', // Reset type field
                price: '',
                quantity: 0
            });
            getAllBooks(); // Refresh the book list
        } catch (error) {
            console.log('Add New Book Error', error);
        }
    };

    // Function that sends delete request to server for deleting book record 
    const handleDeleteBook = async (bookId) => {
        try {
            await axios.delete(
                `http://localhost:5234/api/Book/DeleteBook/${bookId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${authToken}`
                    }
                }
            );
            alert('Book deleted successfully');
            getAllBooks();
        } catch (error) {
            console.log('Delete Book Error', error);
        }
    };

    return (
        <div className='' style={{display: "flex", width:"90vw"}}>
            <div className=' justify-center'>
                <div className='product-table w-full'>
                    <table className='w-full'>
                        <thead>
                            <tr className="mt-10 mb-10 w-full" style={{backgroundColor:'orange'}}>
                                <th className='w-full' style={{ border: '1px solid black', textAlign: 'center' }}>
                                    Please Make Corresponding Adjustments and then Either Save or Delete the Record
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>

            <div className="product-table">
                <table className=" w-full" cellSpacing={0}>
                    <thead>
                        <tr className="heading mt-10">
                            <th style={{ border: '1px solid black' }}>Id</th>
                            <th style={{ border: '1px solid black' }}>Image</th>
                            <th style={{ border: '1px solid black' }}>Book Name</th>
                            <th style={{ border: '1px solid black' }}>Author</th>
                            <th style={{ border: '1px solid black' }}>Type</th>
                            <th style={{ border: '1px solid black' }}>Unit Price</th>
                            <th style={{ border: '1px solid black' }}>Stock</th>
                            <th style={{ border: '1px solid black' }}>Save Changes/Add Book</th>
                            <th style={{ border: '1px solid black' }}>Delete Book</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr className="data" style={{ border: '1px solid black', borderRadius: '10px',  textAlignLast:'center'  }}>
                            <td style={{ border: '1px solid black' }}>
                                <input
                                    type="text"
                                    value={newBook.id}
                                    onChange={(e) => handleNewBookChange('id', e.target.value)}
                                    placeholder="New ID"
                                    style={{ width: "3.5rem" }}
                                />
                            </td>
                            <td style={{ border: '1px solid black' }}>
                                <input
                                    type="text"
                                    value={newBook.image}
                                    onChange={(e) => handleNewBookChange('image', e.target.value)}
                                    placeholder="New Image URL"
                                    style={{ width: "30.5rem" }}
                                />
                            </td>
                            <td style={{ border: '1px solid black' }}>
                                <input
                                    type="text"
                                    value={newBook.name}
                                    onChange={(e) => handleNewBookChange('name', e.target.value)}
                                    placeholder="New Book Name"
                                    style={{ width: "10.5rem" }}
                                />
                            </td>
                            <td style={{ border: '1px solid black' }}>
                                <input
                                    type="text"
                                    value={newBook.author}
                                    onChange={(e) => handleNewBookChange('author', e.target.value)}
                                    placeholder="New Author"
                                    style={{ width: "10.5rem" }}
                                />
                            </td>
                            <td style={{ border: '1px solid black' }}>
                                <input
                                    type="text"
                                    value={newBook.type}
                                    onChange={(e) => handleNewBookChange('type', e.target.value)}
                                    placeholder="New Type"
                                    style={{ width: "10.5rem" }}
                                />
                            </td>
                            <td style={{ border: '1px solid black' }}>
                                <input
                                    type="text"
                                    value={newBook.price}
                                    onChange={(e) => handleNewBookChange('price', e.target.value)}
                                    placeholder="New Price"
                                    style={{ width: "3.5rem" }}
                                />
                            </td>
                            <td style={{ border: '1px solid black' }}>
                                <div className="input-group">
                                    <div className="quantity">
                                        <input
                                            type="button"
                                            value="-"
                                            className="button-minus"
                                            onClick={() => setNewBook(prev => ({ ...prev, quantity: prev.quantity > 0 ? prev.quantity - 1 : 0 }))}
                                        />
                                        <input
                                            type="text"
                                            step={1}
                                            min={1}
                                            value={newBook.quantity}
                                            name="quantity"
                                            className="quantity-field"
                                            readOnly
                                            style={{ width: "3.5rem" }}
                                        />
                                        <input
                                            type="button"
                                            value="+"
                                            className="button-plus"
                                            onClick={() => setNewBook(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                                        />
                                    </div>
                                </div>
                            </td>
                            <td style={{ border: '1px solid black' }}>
                                <button onClick={handleAddNewBook}>Add Book</button>
                            </td>
                        </tr>
                        {BookData.map((book, key) => (
                            <tr className="data" key={key} style={{ border: '1px solid black', borderRadius: '10px',  textAlignLast:'center' }}>
                                <td style={{ border: '1px solid black' }}>{book.id}</td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type="text"
                                        value={book.image}
                                        onChange={(e) => handleInputChange(book.id, 'image', e.target.value)}
                                        style={{ width: "30.5rem" }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type="text"
                                        value={book.name}
                                        onChange={(e) => handleInputChange(book.id, 'name', e.target.value)}
                                        style={{ width: "10.5rem" }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type="text"
                                        value={book.author}
                                        onChange={(e) => handleInputChange(book.id, 'author', e.target.value)}
                                        style={{ width: "10.5rem" }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type="text"
                                        value={book.type}
                                        onChange={(e) => handleInputChange(book.id, 'type', e.target.value)}
                                        style={{ width: "10.5rem" }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <input
                                        type="text"
                                        value={book.price}
                                        onChange={(e) => handleInputChange(book.id, 'price', e.target.value)}
                                        style={{ width: "3.5rem" }}
                                    />
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <div className="input-group">
                                        <div className="quantity">
                                            <input
                                                type="button"
                                                value="-"
                                                className="button-minus"
                                                onClick={() => handleRemoveOne(book)}
                                            />
                                            <input
                                                type="text"
                                                step={1}
                                                min={1}
                                                value={book.quantity}
                                                name="quantity"
                                                className="quantity-field"
                                                readOnly
                                                style={{ width: "3.5rem" }}
                                            />
                                            <input
                                                type="button"
                                                value="+"
                                                className="button-plus"
                                                onClick={() => handleAddOne(book)}
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <button onClick={() => handleSaveChanges(book)}>Save Changes</button>
                                </td>
                                <td style={{ border: '1px solid black' }}>
                                    <button onClick={() => handleDeleteBook(book.id)}>Delete Book</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    );
}

export default AdminBookTable;
