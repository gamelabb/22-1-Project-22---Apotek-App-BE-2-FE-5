import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Collapsible from 'react-collapsible';

const Sidebar = ({ show, handleClose }) => {
   const Beranda = <NavLink to="/home">Beranda</NavLink>
   const Shop = <NavLink to="/shop">Shop</NavLink>
   const Halaman = <a href="#">Halaman</a>
   return (
      <>

         <div >
            <Offcanvas show={show} onHide={handleClose} placement='end' className='side__bar'>
               <Offcanvas.Header closeButton>
                  {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
               </Offcanvas.Header>
               <Offcanvas.Body>


                  <Collapsible trigger={Beranda} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                     </ul>
                  </Collapsible>


                  <Collapsible trigger={Shop} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/shoppingCart">Keranjang</NavLink></li>
                     </ul>
                  </Collapsible>

                  <Collapsible trigger={Halaman} triggerTagName="div"
                     triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                     <ul className="sidebar_sub_menu text-white mt-3">
                        <li><NavLink to="/about">Tentang</NavLink></li>
                        <li><NavLink to="/appoinment">Konsultasi Apoteker</NavLink></li>
                        <li><NavLink to="/contact">Kontak</NavLink></li>
                     </ul>
                  </Collapsible>


               </Offcanvas.Body>
            </Offcanvas>
         </div>
      </>
   );
};

export default Sidebar;