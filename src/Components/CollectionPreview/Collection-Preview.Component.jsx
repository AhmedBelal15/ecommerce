import React from 'react';
import './Collection-Preview.style.scss';
import CollectionItem from '../Collection Item/Collection-item.component';

const PreviewCollection = ({title, items}) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items.filter((it,ix)=>ix<4).map(({id, ...otherItemProps}) =>
                        <CollectionItem key={id} {...otherItemProps} />
                           
                )}
            </div>
        </div>
    )
}

export default PreviewCollection