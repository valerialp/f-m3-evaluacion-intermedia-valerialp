import React from 'react';
import Pokemon from './Pokemon';

class PokeList extends React.Component {

    render() {
        return (
            <section className="page">
                <h2 className="main-title">Mi lista de pokemon</h2>

                <ul className="main-list">
                    {this.props.pokemons.map(item => {
                        const { id, name, types, url } = item;
                        return (
                            <Pokemon id={id} name={name} types={types} url={url} />
                        )
                    })
                    }
                </ul>
            </section>
        )
    }
}
export default PokeList;