var url = require('url')
var ucs = require('upper-case')

var reqUrl = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(reqUrl, true);

var urlModule = {
    host : q.host,              //returns 'localhost:8080'
    pathName: q.pathname,       //returns '/default.htm'
    search: q.search,           //returns '?year=2017&month=february'
    qData: q.query,             //returns an object: { year: 2017, month: 'february' }
    month: q.month              //returns 'february'
}