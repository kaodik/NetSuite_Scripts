 /**
 * @NApiVersion 2.x
 */

 require(['N/search'], function(search) {

    var startDate = '12/21/19';
    var endDate = '12/21/23';
    var f1 = ['trandate', search.Operator.WITHIN, [startDate, endDate]]
    var mySearch = search.create({
        type: search.Type.SALES_ORDER,
        columns: ['trandate', 'tranid', 'entity', 'total'],
        filters: [f1]
    });

    var myResultSet = mySearch.run();

    var resultRange = myResultSet.getRange({
        start: 0,
        end: 50
    });

    for (var i = 0; i < resultRange.length; i++) {
        log.debug(resultRange[i]);
    }
}); 