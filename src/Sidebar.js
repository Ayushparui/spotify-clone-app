import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

function Sidebar() {
  return (
    <div className='sidebar'>
      <img className='sidebar_logo' 
      src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White-600x180.png" 
      alt="white circle spotify logo png" />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <strong></strong>
      <hr />
    </div>
  )
}

export default Sidebar