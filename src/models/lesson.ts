import {observable} from "mobx";
import StudentGroup from "./group";
import {LESSON_TYPE} from "../enums/lessons";

namespace Lesson {
    export class Model {
        @observable
        id: number

        @observable
        name: string

        @observable
        type: LESSON_TYPE

        @observable
        description: string

        @observable
        beginning: string

        @observable
        end: string

        @observable
        sub_group: number

        @observable
        studentGroups: StudentGroup.Model[]
    }
}

export default Lesson
