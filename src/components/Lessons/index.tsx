import * as React from 'react'
import Lesson from "../../models/lesson";

import './index.scss'
import { LESSON_TYPE } from '../../enums/lessons';

interface Props {
    lesson: Lesson.Model
}

const LESSON_CARD_TYPE = [
    {
        label: 'laboratory',
        value: LESSON_TYPE.LABORATORY
    },
    {
        label: 'practical',
        value: LESSON_TYPE.PRACTICAL
    },
    {
        label: 'module',
        value: LESSON_TYPE.MODULE
    },
    {
        label: 'exam',
        value: LESSON_TYPE.EXAM
    }
]

export default class LessonCard extends React.Component<Props, {}> {
    render() {
        const {lesson} = this.props

        return(
            <div className={`lesson_item ${LESSON_CARD_TYPE.find(target => target.value === lesson.type)!.label}`}>
                <div className='lesson_info'>
                    <div className='group_name'>
                        {lesson.group.name}
                    </div>
                    <div className='lesson_duration'>
                        Длительность: {lesson.beginning} - {lesson.end}
                    </div>

                </div>
                <div className='lesson_name'>
                    {lesson.name}
                </div>
                <div className='lesson_description'>
                    {lesson.description}
                </div>
            </div>
        )
    }
}