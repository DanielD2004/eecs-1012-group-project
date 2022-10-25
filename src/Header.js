import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="header">
        <a target="_blank" href="https://sfs.yorku.ca/refunds/tables">
            <div className='hamburger'>
                <div className='line'></div>
                <div className='line'></div>
                <div className='line'></div>
            </div>
        </a>
        <div className='title'>Image Finder</div>
        <a target="_blank" href="https://github.com/DanielD2004/eecs-1012-group-project/blob/main/README.old.md"><div className='help'><span>?</span></div></a>
    </div>
  )
}

export default Header