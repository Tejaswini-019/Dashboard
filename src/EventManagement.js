import React from 'react';
import Menu from './Menu';
export default class Dashboard extends React.Component {
    constructor(props) {
        super();
        this.state = {
        }
    }
    render() {
        return(
            <>
               <div className='container-fluid'>
                        <Menu changeMenu={this.changeMenuBar} />
                    
                    </div>
            </>
        )
    }
}