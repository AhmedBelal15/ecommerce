import React, {Component} from 'react';
import './Directory.style.scss';
import {sections} from './directory.data';
import MenuItem from '../MenuItem/MenuItem.component'

class Directory extends Component {
    constructor (props) {
        super(props)
        this.state= {
            sections
        }
    }
    render() {
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map( ({title,id,imageUrl,size}) => 
                        <MenuItem 
                        key={id} 
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                        />
                        )
                }
            </div>
        )
       
    }

    }

export default Directory;