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

var _layout = require('../../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\MathewzVk\\miniproject\\Crowdfunding_Dapp\\pages\\campaign\\requests\\new.js?entry';


var CreateNewRequst = function (_Component) {
    (0, _inherits3.default)(CreateNewRequst, _Component);

    function CreateNewRequst() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CreateNewRequst);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CreateNewRequst.__proto__ || (0, _getPrototypeOf2.default)(CreateNewRequst)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            describtion: '',
            value: '',
            recipient: '',
            errormes: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, describtion, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ errormes: '', loading: true });
                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, describtion = _this$state.describtion, value = _this$state.value, recipient = _this$state.recipient;
                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(describtion, _web2.default.utils.toWei(value, 'ether'), recipient).send({
                                    from: accounts[0]
                                });

                            case 10:
                                _routes.Router.pushRoute('/campaign/' + _this.props.address + '/requests');
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](4);

                                _this.setState({ errormes: _context.t0.message });

                            case 16:
                                _this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CreateNewRequst, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaign/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, 'back to Request List!')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, 'Create Request'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errormes, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'description: '), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.describtion,
                onChange: function onChange(event) {
                    return _this3.setState({ describtion: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, 'value(ether): '), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'recipient: '), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errormes, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, 'Submit New Request!')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt('return', { address: address });

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CreateNewRequst;
}(_react.Component);

exports.default = CreateNewRequst;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnblxccmVxdWVzdHNcXG5ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkZvcm0iLCJNZXNzYWdlIiwiSW5wdXQiLCJMYXlvdXQiLCJDYW1wYWlnbiIsIndlYjMiLCJSb3V0ZXIiLCJMaW5rIiwiQ3JlYXRlTmV3UmVxdXN0Iiwic3RhdGUiLCJkZXNjcmlidGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiZXJyb3JtZXMiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQVEsQUFBUSxBQUFNLEFBQVM7O0FBQy9CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBUSxBQUFZOzs7Ozs7O0ksQUFHdkI7Ozs7Ozs7Ozs7Ozs7OztrTyxBQUVGO3lCQUFRLEFBQ1MsQUFDYjttQkFGSSxBQUVHLEFBQ1A7dUJBSEksQUFHTyxBQUNYO3NCQUpJLEFBSU0sQUFDVjtxQixBQUxJLEFBS0s7QUFMTCxBQUNKLGlCLEFBV0o7aUdBQVcsaUJBQUEsQUFBTSxPQUFOOzBFQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ047c0NBQUEsQUFBSyxTQUFTLEVBQUMsVUFBRCxBQUFXLElBQUcsU0FBNUIsQUFBYyxBQUFzQixBQUM5QjtBQUhDLDJDQUdVLHdCQUFTLE1BQUEsQUFBSyxNQUh4QixBQUdVLEFBQW9COzhDQUNHLE1BSmpDLEFBSXNDLE9BSnRDLEFBSUEsMEJBSkEsQUFJQSxhQUpBLEFBSWEsb0JBSmIsQUFJYSxPQUpiLEFBSW9CLHdCQUpwQixBQUlvQjtnREFKcEI7Z0RBQUE7dUNBTW9CLGNBQUEsQUFBSyxJQU56QixBQU1vQixBQUFTOztpQ0FBMUI7QUFOSCxvREFBQTtnREFBQTtnREFPRyxBQUFTLFFBQVQsQUFBaUIsY0FBakIsQUFBK0IsYUFBYSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsT0FBN0QsQUFBNEMsQUFBd0IsVUFBcEUsQUFBOEUsV0FBOUUsQUFDSjswQ0FDUyxTQVRSLEFBT0csQUFDQyxBQUNJLEFBQVM7QUFEYixBQUNGLGlDQUZDOztpQ0FJTjsrQ0FBQSxBQUFPLHlCQUF1QixNQUFBLEFBQUssTUFBbkMsQUFBeUMsVUFYdEM7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBYUg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLFVBQVMsWUFickIsQUFhSCxBQUFjLEFBQWM7O2lDQUVoQztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQWZSLEFBZVAsQUFBYyxBQUFVOztpQ0FmakI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FvQkg7eUJBQ0o7O21DQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyw4QkFBSyxzQkFBb0IsS0FBQSxBQUFLLE1BQXpCLEFBQStCLFVBQXJDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGUixBQUNJLEFBQ0ksQUFJSiwyQ0FBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsbUNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EOzhCQUFuRDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esa0NBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVkseUJBQUE7MkJBQVEsT0FBQSxBQUFLLFNBQVMsRUFBQyxhQUFhLE1BQUEsQUFBTSxPQUExQyxBQUFRLEFBQWMsQUFBMkI7QUFGakU7OzhCQUFBO2dDQUhSLEFBQ0ksQUFFSSxBQU1KO0FBTkk7QUFDSSxpQ0FLUCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxtQ0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBWSx5QkFBQTsyQkFBUSxPQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sTUFBQSxBQUFNLE9BQXBDLEFBQVEsQUFBYyxBQUFxQjtBQUYzRDs7OEJBQUE7Z0NBWFIsQUFTSSxBQUVJLEFBTUo7QUFOSTtBQUNJLGlDQUtQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGdDQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFZLHlCQUFBOzJCQUFRLE9BQUEsQUFBSyxTQUFTLEVBQUMsV0FBVyxNQUFBLEFBQU0sT0FBeEMsQUFBUSxBQUFjLEFBQXlCO0FBRi9EOzs4QkFBQTtnQ0FuQlIsQUFpQkksQUFFSSxBQUtKO0FBTEk7QUFDSSxpQ0FJUixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBNUMsQUFBa0Q7OEJBQWxEO2dDQXhCSixBQXdCSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFSLE1BQWdCLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DOzhCQUFwQztnQ0FBQTtBQUFBO2VBbENaLEFBRUksQUFPSSxBQXlCSSxBQUlmOzs7OzttSCxBQS9ENEI7Ozs7O2lDQUNqQjtBLDBDQUFZLE0sQUFBTSxNLEFBQWxCO2tFQUNELEVBQUUsUyxBQUFGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFaZSxBQTJFOUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL01hdGhld3pWay9taW5pcHJvamVjdC9Dcm93ZGZ1bmRpbmdfRGFwcCJ9