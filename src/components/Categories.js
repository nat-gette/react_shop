import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'all',
                },
                {
                    key: 'round stone',
                    name: 'round stone',
                },
                {
                    key: 'oval stone',
                    name: 'oval stone',
                },
                {
                    key: 'drop stone',
                    name: 'drop stone',
                },
                {
                    key: 'rectangle stone',
                    name: 'rectangle stone',
                },
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
            {this.state.categories.map( el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
            ))}
      </div>
    )
  }
}

export default Categories