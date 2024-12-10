import React, { useState } from 'react';
import './App.css';
import Create from './Component/Create';
import Read from './Component/Read';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    const [refresh, setRefresh] = useState(false);

    const handleCreate = () => {
        setRefresh(prev => !prev); // Toggle refresh state
    };

    return (
        <div className="main">
            <h1>CRUD Operations</h1>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/create" element={<Create onCreate={handleCreate} />} />
                    <Route exact path="/read" element={<Read key={refresh} />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;