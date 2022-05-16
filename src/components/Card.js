import React from 'react'

function Card({ todo }) {
  return (
    <div className="card d-flex flex-row" style={{width: '40rem', height: '15rem'}}>
        <img style={{ height: '100%' }} src="https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage" className="card-img-top" alt="todo common image" />
        <div className="card-body">
            <h5 className="card-title">{todo?.category}</h5>
            <p className="card-text">{todo?.description}</p>
            <button href="#" className="btn btn-primary">Go somewhere</button>
        </div>
    </div>
  )
}

export default Card