import React from 'react';


function Image() {
    return (
        <img className="d-block mx-auto mb-4" alt="" src='https://i.imgur.com/tEm9uYV.png'></img>
    )
}
function Header() {
    return(
        <div className='bg-dark text-secondary px-4 py-5 text-center'>
            <Image />
            <div className='display-5 fw-bold text-white'>Revolutionary Pour</div>
        </div>
    )
}

export default Header;