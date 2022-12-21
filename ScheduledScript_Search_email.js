/**
 *@NApiVersion 2.x
 *@NScriptType ScheduledScript
 *@NModuleScope SameAccount
 */
define(['N/search', 'N/email'], function ( search, email) {
  function execute(context) {
    //define the Saved Search to be used
    var savedSearch = search.load({
      id: 'SearchID',
    });

    //run the saved search
    var searchResult = savedSearch.run();

    //get the number of search results
    var resultRange = searchResult.getRange({
      start: 0,
      end: 50,
    });
    log.debug(resultRange.length);

    //if there are new results, send an email
    if (resultRange.length >= 0) {
      // var recipent = runtime.getCurrentUser().email;
      //define the subject and body of the email
      var subject = 'New Employee record created';

      var body = 'A new employee has been created.'+ savedSearch + ' new results.';

      //send email
      email.send({
        author: 'Employee Email',
        recipients: 'Recipient email',
        subject: subject,
        body: body,
      });
    } else {
      var subject = 'New Employee record created';

      var body =
        'A new employee has been created. ' + savedSearch + ' new results.';
      //send email
      email.send({
        author: 'Employee Email',
        recipients: 'Recipient Email',
        subject: subject,
        body: body,
      });
    }
  }

  return { execute: execute };
});
