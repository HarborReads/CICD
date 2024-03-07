import React from 'react';
import { Link } from 'react-router-dom';
import nLogo from '../icons/newLogo.png';
import team from '../icons/team.png';
import chatbot from '../icons/chatbot.png';
import search from '../icons/Search.png';
import home from '../icons/home.png';
import library from '../icons/library.png';
import BookSection from './LeftBarBookSection';

import '../App.css';

const navItems = [
  { to: '/', icon: home, text: 'Home' },
  { to: '/chatbot', icon: chatbot, text: 'Chatbot' },
  { to: '/search', icon: search, text: 'Search' },
  { to: '/library', icon: library, text: 'Your Library' },
  { to: '/insights', icon: team, text: 'Reading Insights' },
  { to: '/bookpre', icon: team, text: 'Book Preview' },
];

const NavItem = ({ to, icon, text }) => (
  <li>
    <Link to={to} className="flex items-center py-2 px-4 hover:bg-gradient-to-r from-nav-bg to-nav-brown- hover rounded-full ">
      <div className=" rounded-full p-2 mr-2 bg-white hover:bg-nav-brown"> {/* Added background color and padding */}
        <img src={icon} className="h-6 " alt={text} /> {/* Removed background color for image */}
      </div>
      {text}
    </Link>
  </li>
);

function LeftBar() {
   return (
     <div className="left-bar-container">
       <aside className="bg-white text-grey 700 flex flex-col h-screen"> {/* Changed background color and text color */}
         <div className="p-4 flex items-center">
           <img src={nLogo} className=" h-50" alt="Logo" />
         </div>
         <nav className="py-2 flex-grow"> {/* Added flex-grow class */}
           <ul>
             {navItems.map((item, index) => (
               <NavItem key={index} {...item} />
             ))}
           </ul>
         </nav>
         <div >
              <BookSection/ >
         </div>
       </aside>
     </div>
   );
 }
export default LeftBar;
