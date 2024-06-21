import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Admin() {
    const user = useSelector(state => state.user);
    const authToken = user.authToken;
    console.log("token", authToken);

    const [BookData, setBookData] = useState([]);
    const [newBook, setNewBook] = useState({
        id: '',
        image: '',
        name: '',
        author: '',
        type: '', // Added type field
        price: '',
        quantity: 0
    });

    useEffect(() => {
        getAllBooks();
    }, []);

    const getAllBooks = async () => {
        try {
            let response = await axios.get('http://localhost:5234/api/Book/GetAll');
            setBookData(response.data);
        } catch (error) {
            console.log('Get All Books Error', error);
        }
    };

    const handleAddOne = (book) => {
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
            getAllBooks(); // Refresh the book list
        } catch (error) {
            console.log('Delete Book Error', error);
        }
    };

    return (
        <div className='mt-5 justify-center'>
            <div className="product-table">
                <table cellSpacing={0}>
                    <thead>
                        <tr className="heading mt-10">
                            <th style={{ border: '1px solid black' }}>Id</th>
                            <th style={{ border: '1px solid black' }}>Image</th>
                            <th style={{ border: '1px solid black' }}>Book Name</th>
                            <th style={{ border: '1px solid black' }}>Author</th>
                            <th style={{ border: '1px solid black' }}>Type</th>
                            <th style={{ border: '1px solid black' }}>Unit Price</th>
                            <th style={{ border: '1px solid black' }}>Stock</th>
                            <th style={{ border: '1px solid black' }}>Save Changes</th>
                            <th style={{ border: '1px solid black' }}>Delete Book</th>
                        </tr>
                    </thead>
                    <tbody>
                        {BookData.map((book, key) => (
                            <tr className="data" key={key} style={{ border: '1px solid black', borderRadius: '10px' }}>
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
                        <tr className="data" style={{ border: '1px solid black', borderRadius: '10px' }}>
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
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Admin;
