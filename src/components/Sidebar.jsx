import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to='add-cars'>Add Cars</Link>
        </li>
        <li>
          <a href="booklist">Bookings</a>
        </li>
        <li>
          <Link to="edithomeimage">Add Poster</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;