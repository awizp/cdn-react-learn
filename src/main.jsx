import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";

import './index.css';
import App from './App.jsx';
import { Project01, Project02, Project03, Project04 } from './projects/index.js';
import { ThemeProvider } from './context/ThemeContext.jsx';
import ProjectShow from './components/ProjectShow.jsx';

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
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);
