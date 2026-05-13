import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css';
import App from './App.jsx';

import { ThemeProvider } from './context/ThemeContext.jsx';

import { Project01, Project02, Project03, Project04, Project05 } from './projects/index.js';
import ProjectShow from './components/ProjectShow.jsx';

import Products from './projects/project05/components/Products.jsx';
import Cart from './projects/project05/components/Cart.jsx';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/projects' element={<ProjectShow />} />
                <Route path='/project01' element={<Project01 />} />
                <Route path='/project02' element={<Project02 />} />
                <Route path='/project03' element={<Project03 />} />
                <Route path='/project04' element={<Project04 />} />
                <Route path='/project05' element={<Project05 />}>
                    <Route index element={<Products />} />
                    <Route path='cart' element={<Cart />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);
