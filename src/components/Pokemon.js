import React from 'react';

class Pokemon extends React.Component {
    render() {
        return (
            <li id={this.props.id} className="card-pokemon">
                <img src={this.props.url} alt="" className="image-pokemon"></img>
                <h4 className="name-pokemon">{this.props.name}</h4>
                <ul className="aside-list">
                    {this.props.types.map(type => {
                        return (
                            <li>
                                <p className="type-container">{type}</p>
                            </li>
                        )
                    })
                    }
                </ul>
            </li>
        )
    }
}

export default Pokemon;