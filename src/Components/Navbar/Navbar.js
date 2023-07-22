import React, { useState } from 'react';
import sty from './Navbar.module.css'; // Import the module CSS
import {
  DashboardIcon,
  NoteAltIcon,
  QuizIcon,
  AdminMedsIcon,
  CrossIcon,
} from '../../assets/icons/icons'; // Importing Icons from icon.js as ReactComponent

const Navbar = ({ menu, setMenu }) => {
  const [selectedItem, setSelectedItem] = useState('assessment');

  return (
    // Navbar container with dynamic classes based on 'Menu' state
    <div className={`${sty.navbar} ${menu ? sty.open : sty.close}`}>
      {/* Menu Heading */}
      <div className={sty.menuHead}>
        <h4 className={sty.menuHeadTitle}>Menu</h4>
        {/* Cross Icon for closing the menu */}
        <CrossIcon className={sty.menuIcon} onClick={() => setMenu(false)} />
      </div>

      {/* Dashboard Menu Item */}
      <div
        className={`${sty.menu} ${selectedItem === 'dashboard' && sty.active}`}
        onClick={() => setSelectedItem('dashboard')}
      >
        {/* Dashboard Icon */}
        <DashboardIcon className={sty.menuIcon} />
        <p className={sty.menuTitle}>Dashboard</p>
      </div>

      {/* Assessment Menu Item */}
      <div
        className={`${sty.menu} ${selectedItem === 'assessment' && sty.active}`}
        onClick={() => setSelectedItem('assessment')}
      >
        {/* Note Alt Icon */}
        <NoteAltIcon className={sty.menuIcon} />
        <p className={sty.menuTitle}>Assessment</p>
      </div>

      {/* My Library Menu Item */}
      <div
        className={`${sty.menu} ${selectedItem === 'library' && sty.active}`}
        onClick={() => setSelectedItem('library')}
      >
        {/* Quiz Icon */}
        <QuizIcon className={sty.menuIcon} />
        <p className={sty.menuTitle}>My Library</p>
      </div>

      {/* Separator */}
      <div className={sty.separator}></div>

      {/* Admin Title for Desktop View */}
      <p className={sty.admin}>Admin</p>

      {/* Round Status Menu Item */}
      <div
        className={`${sty.menu} ${selectedItem === 'status' && sty.active}`}
        onClick={() => setSelectedItem('status')}
      >
        {/* Admin Meds Icon */}
        <AdminMedsIcon className={sty.menuIcon} />
        <p className={sty.menuTitle}>Round Status</p>
        {/* Admin Title Small for Mobile View */}
        <p className={sty.adminSm}>Admin</p>
      </div>
    </div>
  );
};

export default Navbar;
