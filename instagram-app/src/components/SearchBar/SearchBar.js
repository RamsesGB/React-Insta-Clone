import React from 'react';
import '../SearchBar/SearchBar.css';
// import IGLogo from '../../assets/iglogo.png';

const SearchBar = () => {
    return(
        <div className='searchBarContainer'>
            <div className='imgContainer'>
                {/* leaving the import of icons to another time */}
                {/* <img src={IGLogo} className='logoImg' alt='Insta logo'/> */}
            </div>
            <div>
                <input type='text' placeholder='Search' />
            </div>
            <div className='navMenuBox'>
                <div className='social'>
                    <i className='fa fa-compass' />
                </div>
                <div className='social'>
                    <i className='fa fa-heart' />
                </div>
                <div className='social'>
                    <i className='fa fa-user-circle' />
                </div>
            </div>
        </div>
    );
}

export default SearchBar;