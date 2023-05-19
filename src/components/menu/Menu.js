import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as CgIcons from 'react-icons/cg';
import * as IoIcons from 'react-icons/io';
import { IconContext } from 'react-icons';
import MenuEntry from './MenuEntry';
import './menu.css';

/*
  Oikean yläkulman menun toiminnallisuus.
*/

function Menu() {
  const [menubarVisible, setMenubarVisible] = React.useState(false);

  // menubarin näkyvyys
  const toggleMenubar = () => {
    menubarVisible ? setMenubarVisible(false) : setMenubarVisible(true);
  };

  // menussa näkyvät sivut
  const menuEntries = [
    {
      title: 'Etusivu',
      pathname: '/',
      icon: <AiIcons.AiFillHome />
    },
    {
      title: 'Keskustelu',
      pathname: '/keskustelu',
      icon: <BsIcons.BsChatLeftDotsFill />
    }
  ];

  // menun näkyvyysluokka
  const menubarClass = menubarVisible ? 'menubar' : 'menubar hidden';

  return (
    <>
      <IconContext.Provider value={{color: 'white', size: '35px'}}>
          <div className ='top-bar'>
            <div className ='menubar-toggle-area' onClick={toggleMenubar}>
              <div className ='menubar-toggle-icon'>
                <CgIcons.CgMenuLeft />
              </div>
            </div>
            <nav className = { menubarClass }>
                <div className ='menubar-toggle' onClick={toggleMenubar}>
                <div className ='menubar-toggle-area' onClick={toggleMenubar}>
                  <div className ='menubar-toggle-icon'>
                    <IoIcons.IoIosCloseCircle />
                    </div>
                  </div>
                </div>

              <ol className='menubar-entries'>
                { menuEntries.map((entry) => {
                    return <MenuEntry title = { entry.title } icon = { entry.icon} pathname = { entry.pathname } onClick={() => toggleMenubar()} />
                })}
              </ol>
            </nav>
          </div>
      </IconContext.Provider>
    </>
  );
}

export default Menu;
