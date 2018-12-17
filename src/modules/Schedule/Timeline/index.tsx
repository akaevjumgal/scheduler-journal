import * as React from "react";

import './index.scss'
import { observable } from 'mobx';


class ScheduleTimeline extends React.Component {

    render() {
        return (
            <div className='schedule'>
                <div className="timeline">
                    <ul>
                        <li><span ref={'08:30'}>08:00</span></li>
                        <li><span ref={'09:30'}>09:30</span></li>
                        <li><span ref={'11:00'}>11:00</span></li>
                        <li><span ref={'12:30'}>12:30</span></li>
                        <li><span ref={'13:00'}>13:00</span></li>
                        <li><span ref={'14:30'}>14:30</span></li>
                        <li><span ref={'16:00'}>16:00</span></li>
                        <li><span ref={'17:30'}>17:30</span></li>
                        <li><span ref={'18:00'}>18:00</span></li>
                        <li><span ref={'19:30'}>19:30</span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ScheduleTimeline