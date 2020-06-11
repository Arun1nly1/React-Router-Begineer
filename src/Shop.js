import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
const Shop = () => {

    useEffect(() => {
        fetchItems();
    }, [])

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch('http://jsonplaceholder.typicode.com/posts');
        const items = await data.json()
        console.log(items)
        setItems(items)
    }
    return (
        <div>
            {items.map(item => (
                <Link key={item.id} to={`/shop/${item.id}`}>
                <h1 key={item.id}>{item.title}</h1>
                </Link>
            ))}
        </div>
    );
}

export default Shop;
