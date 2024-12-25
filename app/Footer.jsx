import React from 'react'

const Footer = () => {
  return (
    <footer className="min-h-[200px] flex flex-col justify-center items-center bg-gray-200 text-center">
      <div className="flex flex-row">
        <p>Email:&nbsp;</p>
        <a href="mailto:ortegafred2501@gmail.com">ortegafred2501@gmail.com</a>
      </div>
      <p>Phone number: (+66) 661346438</p>
    </footer>
  )
}

/*
<footer className="min-h-[200px] flex flex-col justify-center items-center bg-gray-200 text-center">
      <div className="flex flex-row"> <p>Email:&nbsp;</p><a href="mailto:ortegafred1@yahoo.fr" >ortegafred1@yahoo.fr</a></div>
      <p>phone number: 1111 1111</p>
    </footer>
    */

export default Footer