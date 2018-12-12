import * as tslib_1 from "tslib";
import * as React from 'react';
import AppRouter from "./routes";
var App = /** @class */ (function (_super) {
    tslib_1.__extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(AppRouter, null));
    };
    return App;
}(React.Component));
export default App;
//# sourceMappingURL=App.js.map