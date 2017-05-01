# Your First (Several) Asynchronous Requests

[See assignment in Alexa.](https://alexa.bitmaker.co/cohorts/67/assignments/2055/latest)

1. What HTTP method did your browser use to make the request?
  GET method

2. How many milliseconds did it take your browser to complete it?
  78ms

3. What HTTP status code did the server return? What does that mean?
    status code: 200; it means the HTTP request was successful.

4. Look at the "Initiator" and "Type" columns. Was this an xhr/JavaScript/AJAX request or a normal browser request?
    It's a normal browser request.

#Step 1
  5. What are the values in the "Method" and "Status" columns? Compare these values to Step 0. The method is get and the status is 200. This part is the same as the step 0.

  6. What are the values in the "Type" and "Initiator" columns? Compare these values to Step 0. type is xhr and the initiator is jquery.min.js, because we're using jquery to send an ajax request, the initiator is jquery.min.js. However, in step 0, the initiator was other and the type is document because we just typed the url in the browser and the browser sent the request.
