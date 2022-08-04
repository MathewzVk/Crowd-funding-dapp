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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\MathewzVk\\miniproject\\Crowdfunding_Dapp\\pages\\campaign\\show.js?entry';


var ShowCampaign = function (_Component) {
  (0, _inherits3.default)(ShowCampaign, _Component);

  function ShowCampaign() {
    (0, _classCallCheck3.default)(this, ShowCampaign);

    return (0, _possibleConstructorReturn3.default)(this, (ShowCampaign.__proto__ || (0, _getPrototypeOf2.default)(ShowCampaign)).apply(this, arguments));
  }

  (0, _createClass3.default)(ShowCampaign, [{
    key: 'RenderCards',
    value: function RenderCards() {
      var _props = this.props,
          address = _props.address,
          minimumContribution = _props.minimumContribution,
          balance = _props.balance,
          requestConut = _props.requestConut,
          ApproversCount = _props.ApproversCount,
          manager = _props.manager;

      var items = [{
        header: manager,
        description: 'Manager is who create campaign and acctualy he/she can create request',
        meta: 'manager address',
        style: { 'wordWrap': 'break-word' }
      }, {
        header: minimumContribution,
        description: 'it means that if you want join this Campaign, you should pay that wei into Campaign',
        meta: 'Minimum Contribution'
      }, {
        header: requestConut,
        description: 'this is number of request that manager created to give money from pool',
        meta: 'Number of request'
      }, {
        header: ApproversCount,
        description: 'this is number of Approvers that Join to this Campaign',
        meta: 'Number of Approvers'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether'),
        description: 'this is total price (ether) with recived from Approvers until now',
        meta: 'Balance of Contract'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement('h3', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, 'Campaign details'), _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, this.RenderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, _react2.default.createElement(_ContributeForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaign/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, 'View Request!')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var campaign, summery;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0, _campaign2.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summery = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summery[0],
                  balance: summery[1],
                  requestConut: summery[2],
                  ApproversCount: summery[3],
                  manager: summery[4]
                });

              case 5:
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

  return ShowCampaign;
}(_react.Component);

exports.default = ShowCampaign;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnblxcc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDb250cmlidXRlRm9ybSIsIndlYjMiLCJMaW5rIiwiU2hvd0NhbXBhaWduIiwicHJvcHMiLCJhZGRyZXNzIiwibWluaW11bUNvbnRyaWJ1dGlvbiIsImJhbGFuY2UiLCJyZXF1ZXN0Q29udXQiLCJBcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsInN0eWxlIiwidXRpbHMiLCJmcm9tV2VpIiwiUmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsInF1ZXJ5IiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTTs7QUFDckIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztrQ0FlVzttQkFRTCxLQVJLLEFBUUE7VUFSQSxBQUVMLGlCQUZLLEFBRUw7VUFGSyxBQUdMLDZCQUhLLEFBR0w7VUFISyxBQUlMLGlCQUpLLEFBSUw7VUFKSyxBQUtMLHNCQUxLLEFBS0w7VUFMSyxBQU1MLHdCQU5LLEFBTUw7VUFOSyxBQU9MLGlCQVBLLEFBT0wsQUFHSjs7VUFBTTtnQkFDRixBQUNVLEFBQ1I7cUJBRkYsQUFHSSxBQUNGO2NBSkYsQUFJUSxBQUNOO2VBQU8sRUFBQyxZQU5BLEFBQ1YsQUFLUyxBQUFZO0FBTHJCLEFBQ0UsT0FGUTtnQkFRVixBQUNVLEFBQ1I7cUJBRkYsQUFHSSxBQUNGO2NBWlEsQUFRVixBQUlRO0FBSlIsQUFDRTtnQkFLRixBQUNVLEFBQ1I7cUJBRkYsQUFHSSxBQUNGO2NBbEJRLEFBY1YsQUFJUTtBQUpSLEFBQ0U7Z0JBS0YsQUFDWSxBQUNSO3FCQUZKLEFBR00sQUFDRjtjQXhCTSxBQW9CVixBQUlVO0FBSlYsQUFDSTtnQkFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEL0IsQUFDWSxBQUE0QixBQUNwQztxQkFGSixBQUdNLEFBQ0Y7Y0E5QlIsQUFBYyxBQTBCVixBQUlVLEFBSVo7QUFSRSxBQUNJOzsyQ0FPQyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBRVo7QUFGWTtPQUFBOzs7OzZCQUtMLEFBQ0o7NkJBQ0ksQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FESixBQUNJLEFBQ0EscUNBQUEsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNJO0FBREo7QUFBQSx5QkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQXNCO29CQUF0QjtzQkFBQSxBQUNHO0FBREg7Y0FESixBQUNJLEFBQ0csQUFBSyxBQUVSLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBc0I7b0JBQXRCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLDBDQUFlLFNBQVMsS0FBQSxBQUFLLE1BQTlCLEFBQW9DO29CQUFwQztzQkFOUixBQUNFLEFBSUksQUFDRSxBQUdOO0FBSE07NEJBR0wsY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssc0JBQW9CLEtBQUEsQUFBSyxNQUF6QixBQUErQixVQUFyQztvQkFBQTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx5Q0FBTyxTQUFSO29CQUFBO3NCQUFBO0FBQUE7U0FoQmxCLEFBQ0ksQUFFSSxBQVNFLEFBQ0UsQUFDRSxBQUNFLEFBQ0UsQUFRckI7Ozs7OzJHLEFBeEY0Qjs7Ozs7bUJBRW5CO0EsMkJBQVcsd0JBQVMsTUFBQSxBQUFNLE0sQUFBZixBQUFxQjs7dUJBQ2hCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O21CQUE5QztBOzsyQkFFTyxNQUFBLEFBQU0sTUFEWixBQUNrQixBQUNyQjt1Q0FBcUIsUUFGbEIsQUFFa0IsQUFBUSxBQUM3QjsyQkFBUyxRQUhOLEFBR00sQUFBUSxBQUNqQjtnQ0FBYyxRQUpYLEFBSVcsQUFBUSxBQUN0QjtrQ0FBZ0IsUUFMYixBQUthLEFBQVEsQUFDeEI7MkJBQVMsUSxBQU5OLEFBTU0sQUFBUTtBQU5kLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzRlosQSxBQTVGMkI7O2tCQTRGM0IsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL01hdGhld3pWay9taW5pcHJvamVjdC9Dcm93ZGZ1bmRpbmdfRGFwcCJ9