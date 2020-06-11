import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom'
import axios from 'axios'

const ItemDetail = (id) => {

    useEffect(() => {
        fetchItem();
    }, []);

    const [item, setItem] = useState({})

    const fetchItem = async () => {
        const res = await axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setItem(res.data)
                console.log(res.data)
            }
            )
            .catch(error => {
                console.log("Error")
            })

        // const item = await fetchData.json();
        // console.log(item)

    }

    return (
        <div>
            <h3>  {item.body}</h3>


        </div>
    );
}

export default ItemDetail;
