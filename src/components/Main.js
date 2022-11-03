import React from 'react';
import { Routes , Route } from "react-router-dom"
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';


const Main = () => {
    
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="/item/:elementId" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    )
}

export default Main