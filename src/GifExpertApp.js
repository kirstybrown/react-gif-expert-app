import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <p>👇👇 Enter a topic here (minimum 3 letters and search for "pandas" if you're feeling stressed 😉 ) 👇👇</p>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key= { category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
