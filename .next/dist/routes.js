'use strict';

var routes = require('next-routes')();

routes.add('/campaign/new', '/campaign/new').add('/campaign/:address', '/campaign/show').add('/campaign/:address/requests', '/campaign/requests/index').add('/campaign/:address/requests/new', '/campaign/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFHQSxPQUNLLEFBREwsSUFDUyxBQURULGlCQUN5QixBQUR6QixpQkFFSyxBQUZMLElBRVMsQUFGVCxzQkFFOEIsQUFGOUIsa0JBR0ssQUFITCxJQUdTLEFBSFQsK0JBR3VDLEFBSHZDLDRCQUlLLEFBSkwsSUFJUyxBQUpULG1DQUk0QyxBQUo1Qzs7QUFPQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL01hdGhld3pWay9taW5pcHJvamVjdC9Dcm93ZGZ1bmRpbmdfRGFwcCJ9