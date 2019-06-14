import React, { Component } from 'react'

export class UserItem extends Component {
  constructor() {
    super()
    this.state = {
      id: 'id',
      login: 'Koala',
      image_url: 'http://oi50.tinypic.com/kexbfq.jpg',
      html_url: 'http://tinypic.com/view.php?pic=kexbfq&s=6&hid=0&tag=koala'
    }
  }
  render() {
    const { id, login, image_url, html_url } = this.state
    return (
      <div className="card text-center">
        <img
          className="round-img"
          style={{ width: '60px', backgroundColor: 'red' }}
          alt=""
          src={image_url}
        />
        <h3>{login}</h3>
        <div>
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            More
          </a>
        </div>
      </div>
    )
  }
}

export default UserItem
