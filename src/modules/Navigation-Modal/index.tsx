import { observer } from 'mobx-react';
import * as React from 'react';

import './index.scss'
import { Link } from 'react-router-dom';

interface Props {
    onClose: () => void
}

@observer
class NavigationModal extends React.Component<Props, {}> {
    render() {
        return(
            <div className='modal'>
                <div className='close' onClick={this.props.onClose}>
                    <i className="fa fa-times"/>
                </div>
                <div className='header'>
                    <p className='fullName'>
                        James Bond
                    </p>
                    <p className='email'>
                        jamesBond@gmail.com
                    </p>
                </div>
                <div className='nav-item'>
                    <Link to={'/students'}>Students</Link>
                </div>
                <div className='nav-item'>
                    <Link to={'/schedule'}>Schedule</Link>
                </div>
            </div>
        )
    }
}

export default NavigationModal