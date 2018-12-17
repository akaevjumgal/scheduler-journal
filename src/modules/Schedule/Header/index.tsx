import * as React from 'react'

import './index.scss'
import BurgerButton from '../../../components/Buttons/Burger';

interface Props {
    openNavigationModal: () => void
}

export default class ScheduleHeader extends React.Component<Props, {}> {
    render() {
        return(
            <div className='calendar_header'>
                <div className='burger_area' onClick={this.props.openNavigationModal}>
                    <BurgerButton/>
                </div>
            </div>
        )
    }
}