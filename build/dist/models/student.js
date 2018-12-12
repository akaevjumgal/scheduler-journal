import * as tslib_1 from "tslib";
import { observable } from "mobx";
var Student;
(function (Student) {
    var Model = /** @class */ (function () {
        function Model() {
        }
        tslib_1.__decorate([
            observable
        ], Model.prototype, "id", void 0);
        tslib_1.__decorate([
            observable
        ], Model.prototype, "fullName", void 0);
        return Model;
    }());
    Student.Model = Model;
})(Student || (Student = {}));
//# sourceMappingURL=student.js.map