import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  
  RouterProvider,
} from "react-router-dom";
import router from './router/Router.jsx';
// import { query } from 'express';


// let menuIcon = document.querySelector('#menu-icon');
// let navber = document.querySelector('.navber');

// menuIcon.onclick = () =>{
//   menuIcon.classList.toggle('bx')
// }


// scroll section
let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () =>{
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let  height = sec.offsetHeight;
    let id = sec.getAttribute('id')


    if(top >= offset && top < offset + height){
      // active navber links
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  });
  let header = document.querySelector('header');
  header.classList.toggle('sticky',window.scrollY > 100);
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
