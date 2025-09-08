import React from 'react'
import { Routes, Route } from "react-router-dom";
import Sidebar from './components/Sidebar';

// Pages 
import Ecommerce from "./pages/Ecommerce";
import Orders from "./pages/Orders";
import Employees from "./pages/Employees";
import Customers from "./pages/Customers";
import Calender from "./pages/Calender";
import Kanban from "./pages/Kanban";
import Editor from "./pages/Editor";
import ColorPicker from "./pages/ColorPicker";
import Line from "./pages/Line";
import Area from "./pages/Area";
import Bar from "./pages/Bar";
import Pie from "./pages/Pie";
import Financial from "./pages/Financial";
import ColorMapping from "./pages/ColorMapping";
import Pyramid from "./pages/Pyramid";
import Stacked from "./pages/Stacked";

function App() {

  return (
    <>
      <Sidebar />

      {/* Route definitions */}
      <Routes>
        <Route path="/" element={<Ecommerce />} /> {/* default page */}
        <Route path="/orders" element={<Orders />} /> 
        <Route path="/employees" element={<Employees />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/kanban" element={<Kanban />} /> 
        <Route path="/editor" element={<Editor />} />
        <Route path="/colorpicker" element={<ColorPicker />} />
        <Route path="/line" element={<Line />} />
        <Route path="/area" element={<Area />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/colormapping" element={<ColorMapping />} />
        <Route path="/pyramid" element={<Pyramid />} />
        <Route path="/stacked" element={<Stacked />} />
        {/* <Route path="*" element={<h1>404 Not Found</h1>} /> fallback */}
      </Routes>
    </>
  )
}

export default App
