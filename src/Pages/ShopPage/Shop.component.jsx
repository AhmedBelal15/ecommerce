import React, { Component } from 'react';
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../Components/CollectionPreview/Collection-Preview.Component'

class ShopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }
    render () {
        const {collections} = this.state;

    return (
        <div className='shop-page'>
            {collections.map(c => 
                <PreviewCollection 
                key={c.id} 
                title={c.title}
                route={c.routeName}
                items = {c.items}
                />
                )}
        </div>
    )
    }
}

export default ShopPage;