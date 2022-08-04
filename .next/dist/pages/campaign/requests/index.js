'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require('../../../routes');

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require('../../../components/RequestRow');

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\MathewzVk\\miniproject\\Crowdfunding_Dapp\\pages\\campaign\\requests\\index.js?entry';


var ShowRequests = function (_Component) {
    (0, _inherits3.default)(ShowRequests, _Component);

    function ShowRequests() {
        (0, _classCallCheck3.default)(this, ShowRequests);

        return (0, _possibleConstructorReturn3.default)(this, (ShowRequests.__proto__ || (0, _getPrototypeOf2.default)(ShowRequests)).apply(this, arguments));
    }

    (0, _createClass3.default)(ShowRequests, [{
        key: 'renderRow',
        value: function renderRow() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    request: request,
                    id: index,
                    key: index,
                    address: _this2.props.address,
                    totalApprovers: _this2.props.totalApprovers,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 31
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('h2', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, 'Pending Requests'), _react2.default.createElement(_routes.Link, { route: '/campaign/' + this.props.address + '/requests/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, floated: 'right', style: { marginBottom: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, 'New Request!'))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, 'ID'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, 'description'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Amount'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, 'Recipient'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, 'Approveral Count'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, 'Approve'), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, 'Finalize'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 64
                }
            }, this.renderRow())), _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, 'Found ', this.props.reqCount, ' request.'));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, reqCount, totalApprovers, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getLen().call();

                            case 4:
                                reqCount = _context.sent;
                                _context.next = 7;
                                return campaign.methods.ApproversCounter().call();

                            case 7:
                                totalApprovers = _context.sent;
                                _context.next = 10;
                                return _promise2.default.all(Array(parseInt(reqCount)).fill().map(function (element, index) {
                                    return campaign.methods.request(index).call();
                                }));

                            case 10:
                                requests = _context.sent;
                                return _context.abrupt('return', { address: address, requests: requests, reqCount: reqCount, totalApprovers: totalApprovers });

                            case 12:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return ShowRequests;
}(_react.Component);

exports.default = ShowRequests;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnblxccmVxdWVzdHNcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiVGFibGUiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ24iLCJSZXFSb3ciLCJTaG93UmVxdWVzdHMiLCJwcm9wcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiYWRkcmVzcyIsInRvdGFsQXBwcm92ZXJzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJtYXJnaW5Cb3R0b20iLCJyZW5kZXJSb3ciLCJyZXFDb3VudCIsInF1ZXJ5IiwiY2FtcGFpZ24iLCJtZXRob2RzIiwiZ2V0TGVuIiwiY2FsbCIsIkFwcHJvdmVyc0NvdW50ZXIiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFROzs7O0FBQ2YsQUFBUSxBQUFROztBQUNoQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFZOzs7Ozs7Ozs7SSxBQU1iOzs7Ozs7Ozs7OztvQ0FpQlM7eUJBQ1A7O3dCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVEsQUFDN0M7dUNBQU8sQUFBQzs2QkFBRCxBQUNFLEFBQ1Q7d0JBRk8sQUFFRCxBQUNOO3lCQUhPLEFBR0YsQUFDTDs2QkFBVyxPQUFBLEFBQUssTUFKVCxBQUllLEFBQ3RCO29DQUFrQixPQUFBLEFBQUssTUFMaEIsQUFLc0I7O2tDQUx0QjtvQ0FBUCxBQUFPLEFBT1Y7QUFQVTtBQUNQLGlCQURPO0FBRFgsQUFBTyxBQVNWLGFBVFU7Ozs7aUNBV0g7Z0JBQUEsQUFFRyxTQUZILEFBRW9DLHVCQUZwQyxBQUVHO2dCQUZILEFBRVcsTUFGWCxBQUVvQyx1QkFGcEMsQUFFVztnQkFGWCxBQUVnQixhQUZoQixBQUVvQyx1QkFGcEMsQUFFZ0I7Z0JBRmhCLEFBRTRCLE9BRjVCLEFBRW9DLHVCQUZwQyxBQUU0QixBQUNoQzs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EscUNBQUEsQUFBQyw4QkFBSyxzQkFBb0IsS0FBQSxBQUFLLE1BQXpCLEFBQStCLFVBQXJDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0IsU0FBUSxPQUFPLEVBQUMsY0FBeEMsQUFBdUMsQUFBZTs4QkFBdEQ7Z0NBQUE7QUFBQTtlQUpaLEFBRUksQUFDSSxBQUNJLEFBR1IsbUNBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHVCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUZKLEFBRUksQUFDQSxnQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFISixBQUdJLEFBQ0EsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSkosQUFJSSxBQUNBLDhCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUxKLEFBS0ksQUFDQSxxQ0FBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFOSixBQU1JLEFBQ0EsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBVFosQUFDSSxBQUNJLEFBT0ksQUFHUiwrQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxvQkFuQlIsQUFPSSxBQVlJLEFBQU8sQUFBSyxBQUVoQiwrQkFBQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFBWSxlQUFBLEFBQUssTUFBakIsQUFBdUIsVUF0Qi9CLEFBQ0ksQUFxQkksQUFHWDs7Ozs7aUgsQUF0RDRCOzs7OztpQ0FDbEI7QSwwQ0FBVyxNLEFBQU0sTSxBQUFqQixBQUNEO0EsMkNBQVcsd0IsQUFBQSxBQUFTOzt1Q0FDSCxTQUFBLEFBQVMsUUFBVCxBQUFpQixTLEFBQWpCLEFBQTBCOztpQ0FBM0M7QTs7dUNBQ3VCLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CLEFBQWpCLEFBQW9DOztpQ0FBM0Q7QTs7eURBRWlCLEFBQVEsVUFDckIsU0FBTixBQUFNLEFBQVMsV0FBZixBQUEwQixPQUExQixBQUFpQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBUyxBQUNwRDsyQ0FBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixRQUFqQixBQUF5QixPQUFoQyxBQUFPLEFBQWdDLEFBQ3RDO0EsQUFIYyxBQUNuQixpQ0FBQSxDQURtQjs7aUNBQWpCO0E7aUVBTUMsRUFBQyxTQUFELFNBQVUsVUFBVixVQUFvQixVQUFwQixVQUE4QixnQixBQUE5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDZixBLEFBM0QyQjs7a0JBMkQzQixBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL01hdGhld3pWay9taW5pcHJvamVjdC9Dcm93ZGZ1bmRpbmdfRGFwcCJ9