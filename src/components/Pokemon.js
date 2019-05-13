import React from 'react';

class Pokemon extends React.Component {
    render() {
        return (
            <li id={this.props.id}>
                <img src={this.props.url} alt=""></img>
                <h3>{this.props.name}</h3>
                <ul>
                    {this.props.types.map(type => {
                        return (
                            <li>
                                <h3>{type}</h3>
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