'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\MathewzVk\\miniproject\\Crowdfunding_Dapp\\components\\RequestRow.js';


var RowRequest = function (_Component) {
    (0, _inherits3.default)(RowRequest, _Component);

    function RowRequest() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RowRequest);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RowRequest.__proto__ || (0, _getPrototypeOf2.default)(RowRequest)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            ErrorMessage: ''
        }, _this.onClick = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, campaign;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context.prev = 5;
                                _context.next = 8;
                                return campaign.methods.approveRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 8:
                                _context.next = 12;
                                break;

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](5);

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 10]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onFinalize = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                var accounts, campaign;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ ErrorMessage: '' });
                                _context2.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context2.sent;
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _context2.prev = 6;
                                _context2.next = 9;
                                return campaign.methods.finalizeRequest(_this.props.id).send({
                                    from: accounts[0]
                                });

                            case 9:
                                _context2.next = 14;
                                break;

                            case 11:
                                _context2.prev = 11;
                                _context2.t0 = _context2['catch'](6);

                                _this.setState({ ErrorMessage: _context2.t0.message });

                            case 14:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2, [[6, 11]]);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RowRequest, [{
        key: 'render',
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request,
                totalApprovers = _props.totalApprovers;

            var readyToFinalize = request.ApproveralCount > totalApprovers / 2;
            return _react2.default.createElement(Row, { disabled: request.complete, positive: readyToFinalize && !request.complete, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, parseInt(id) + 1), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _web2.default.utils.fromWei(request.value, 'ether')), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, request.recipient), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, request.ApproveralCount, ' / ', totalApprovers), request.complete ? null : _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', basic: true, onClick: this.onClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Approve')), request.complete ? null : _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'red', basic: true, onClick: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Finalize')));
        }
    }]);

    return RowRequest;
}(_react.Component);

exports.default = RowRequest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXFJlcXVlc3RSb3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJvd1JlcXVlc3QiLCJzdGF0ZSIsIkVycm9yTWVzc2FnZSIsIm9uQ2xpY2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImNhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsIm9uRmluYWxpemUiLCJzZXRTdGF0ZSIsImZpbmFsaXplUmVxdWVzdCIsIm1lc3NhZ2UiLCJSb3ciLCJDZWxsIiwicmVxdWVzdCIsInRvdGFsQXBwcm92ZXJzIiwicmVhZHlUb0ZpbmFsaXplIiwiQXBwcm92ZXJhbENvdW50IiwiY29tcGxldGUiLCJwYXJzZUludCIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwidmFsdWUiLCJyZWNpcGllbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFPOztBQUNmLEFBQU8sQUFBVTs7OztBQUNqQixBQUFPLEFBQWM7Ozs7Ozs7OztJLEFBR2Y7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGOzBCLEFBQVEsQUFDVTtBQURWLEFBQ0osaUIsQUFHSjtpR0FBVSxpQkFBQSxBQUFPLE9BQVA7OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ047c0NBRE0sQUFDTixBQUFNO2dEQURBO3VDQUVpQixjQUFBLEFBQUssSUFGdEIsQUFFaUIsQUFBUzs7aUNBQTFCO0FBRkEsb0RBR0E7QUFIQSwyQ0FHVyx3QkFBUyxNQUFBLEFBQUssTUFIekIsQUFHVyxBQUFvQjtnREFIL0I7Z0RBQUE7Z0RBS0ksQUFBUyxRQUFULEFBQWlCLGVBQWUsTUFBQSxBQUFLLE1BQXJDLEFBQTJDLElBQTNDLEFBQStDOzBDQUMzQyxTQU5SLEFBS0ksQUFBb0QsQUFDaEQsQUFBUztBQUR1QyxBQUN0RCxpQ0FERTs7aUNBTEo7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBQUE7O2lDQUFBO2lDQUFBO2dEQUFBOztBQUFBO3lDQUFBO0E7Ozs7O21CLEFBYVY7aUdBQWEsa0JBQUEsQUFBTyxPQUFQOzhCQUFBO2dGQUFBOzhCQUFBOzJEQUFBO2lDQUNUO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUZOLEFBRVQsQUFBYyxBQUFjO2lEQUZuQjt1Q0FHYyxjQUFBLEFBQUssSUFIbkIsQUFHYyxBQUFTOztpQ0FBMUI7QUFIRyxxREFJSDtBQUpHLDJDQUlRLHdCQUFTLE1BQUEsQUFBSyxNQUp0QixBQUlRLEFBQW9CO2lEQUo1QjtpREFBQTtnREFNQyxBQUFTLFFBQVQsQUFBaUIsZ0JBQWdCLE1BQUEsQUFBSyxNQUF0QyxBQUE0QyxJQUE1QyxBQUFnRDswQ0FDNUMsU0FQTCxBQU1DLEFBQXFELEFBQ2pELEFBQVM7QUFEd0MsQUFDdkQsaUNBREU7O2lDQU5EO2lEQUFBO0FBQUE7O2lDQUFBO2lEQUFBO2tFQVVMOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFhLGFBVnZCLEFBVUwsQUFBYyxBQUFrQjs7aUNBVjNCO2lDQUFBO2lEQUFBOztBQUFBOzBDQUFBO0E7Ozs7Ozs7Ozs7aUNBYUw7Z0JBQUEsQUFDRyxNQURILEFBQ2dCLHVCQURoQixBQUNHO2dCQURILEFBQ1EsT0FEUixBQUNnQix1QkFEaEIsQUFDUTt5QkFDMEIsS0FGbEMsQUFFdUM7Z0JBRnZDLEFBRUcsWUFGSCxBQUVHO2dCQUZILEFBRU8saUJBRlAsQUFFTztnQkFGUCxBQUVnQix3QkFGaEIsQUFFZ0IsQUFDcEI7O2dCQUFNLGtCQUFrQixRQUFBLEFBQVEsa0JBQWtCLGlCQUFsRCxBQUFpRSxBQUNqRTttQ0FDSSxjQUFELE9BQUssVUFBVSxRQUFmLEFBQXVCLFVBQVUsVUFBVSxtQkFBbUIsQ0FBQyxRQUEvRCxBQUF1RTs4QkFBdkU7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFBTztBQUFQO0FBQUEsd0JBQU8sQUFBUyxNQURwQixBQUNJLEFBQW9CLEFBQ3BCLG9CQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUZKLEFBRUksQUFBZSxBQUNmLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLDZCQUFPLEFBQUssTUFBTCxBQUFXLFFBQVEsUUFBbkIsQUFBMkIsT0FIdEMsQUFHSSxBQUFPLEFBQWtDLEFBQ3pDLDJCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUpKLEFBSUksQUFBZSxBQUNmLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLHVCQUFBLEFBQWUsaUJBQW9CLE9BTHZDLEFBS0ksQUFDRSx5QkFBQSxBQUFRLFdBQVIsQUFBbUIsdUJBQ2YsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDUTtBQURSO0FBQUEsYUFBQSxrQkFDUSxBQUFDLHlDQUFPLE9BQVIsQUFBYyxTQUFRLE9BQXRCLE1BQTRCLFNBQVMsS0FBckMsQUFBMEM7OEJBQTFDO2dDQUFBO0FBQUE7ZUFSakIsQUFPUyxBQUNRLEFBR1gscUJBQUEsQUFBUSxXQUFSLEFBQW1CLHVCQUNwQixjQUFEOzs4QkFBQTtnQ0FBQSxBQUNLO0FBREw7QUFBQSxhQUFBLGtCQUNLLEFBQUMseUNBQU8sT0FBUixBQUFjLE9BQU0sT0FBcEIsTUFBMEIsU0FBUyxLQUFuQyxBQUF3Qzs4QkFBeEM7Z0NBQUE7QUFBQTtlQWRaLEFBQ0csQUFZSSxBQUNLLEFBS2Y7Ozs7O0FBRUwsQSxBQXpEeUI7O2tCQXlEekIsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL01hdGhld3pWay9taW5pcHJvamVjdC9Dcm93ZGZ1bmRpbmdfRGFwcCJ9