import React from 'react'
import './Search.css'

function Search() {
  return (
    <form id="form" onSubmit={getValue()}>
      <input type="text" id="item" name="item" placeholder="What Do You Want To See?"/>
      <input type="submit" value="Submit" />
    </form>
  )
}

// document.getElementById("form").onsubmit = getValue()

function getValue() {
  alert("hola")
}

export default Search;