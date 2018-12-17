import * as React from "react";
import ClassRoom from "../../models/classroom";

import './index.scss';
import { observer } from 'mobx-react';
import Lesson from "../../models/lesson";
import LessonCard from "../Lessons";
import { action } from 'mobx';
import * as ReactDOM from 'react-dom';

interface Props {
    classRooms: ClassRoom.Model
}

@observer
class ClassRoomItem extends React.Component<Props, {}> {

    render() {
        const {classRooms} = this.props;

        return (
            <div className='class_room_column'>
                <div className='name'>
                    {classRooms.name}
                </div>
                    {classRooms.lessons.map((lesson: Lesson.Model, index: number) =>
                        <LessonCard
                            key={index}
                            lesson={lesson}
                        />
                    )}
            </div>
        );
    }
}

export default ClassRoomItem;