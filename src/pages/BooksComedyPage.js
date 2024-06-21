import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { addToCart } from '../store/slices/cartSlice';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';



function BooksComedyPage() {

  const [BookData, setBookData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 15
  const dispatch = useDispatch();

  useEffect(() => { getAllBooks() }, [])
  
  const getAllBooks = async () => {
    try {
      let response = await axios.get("http://localhost:5234/api/Book/GetAll")
      setBookData(response.data)
    } catch (error) {
      console.log('Get All Products Error', error)
    }
  }

  // Filter and calculate the data to be displayed on the current page
  const actionBooks = BookData.filter(book => book.type === "Comedy");
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = actionBooks.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleAddToCart = (book) => {dispatch(addToCart(book));};

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1, p: 2 }}>
        <Grid container spacing={3} justifyContent="center">
          {currentData.map((book, key) => (
            <Grid item xs={12} sm={6} md={4} key={key}>
              <Card variant="outlined" sx={{ maxWidth: 345, mx: 'auto' }}>
                <CardMedia component="img" alt={book.name} height="340" image={book.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {book.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <h3>Fiyatı {book.price} TL</h3>
                    <h3>Stok Durumu {book.quantity}</h3>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Favorilere Ekle</Button>
                  <Button size="small" onClick={() => handleAddToCart(book)}>Sepete Ekle</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Pagination
          count={Math.ceil(BookData.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}
        />
      </Box>
      <Footer />
    </>
  );
}

export default BooksComedyPage
