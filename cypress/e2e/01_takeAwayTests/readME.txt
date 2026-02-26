Practical Tasks

Please implement the following tasks using a modern automation framework of your choice (e.g., Cypress or Playwright).
	While the candidates can use any tool available to complete these tasks, we encourage them to avoid hard using of AI tools. Any time you have a question or feel stuck, feel free to message us. There’s room for learning, not for judging. 

1. API GET Validation + Response Time Check
Send a GET request to:
https://jsonplaceholder.typicode.com/posts/1
Validate that:
The response status code is 200.
The response body contains:
id equal to 1.
A non-empty title field.
A valid userId field.
The response time is below 800ms.
2. UI Login – Success and Failure Scenarios
Navigate to:
https://the-internet.herokuapp.com/login
Using the credentials:
Username: tomsmith
Password: SuperSecretPassword!
Implement the following:
Verify that a successful login redirects to /secure.
Verify that a success message is displayed.
Attempt an invalid login and validate:
The user remains on the login page.
An appropriate error message is displayed.
3. File Upload Validation
Navigate to:
https://the-internet.herokuapp.com/upload
Upload a test file (fixture).
Validate that:
The upload completes successfully.
The uploaded file name is displayed on the confirmation screen.

4. UI-Triggered API Interception → Reuse Response Value in Next UI Field (Swagger Petstore)
Navigate to:
https://petstore.swagger.io/
In a single test flow:
Expand the endpoint GET /pet/findByStatus
Click Try it out
Set status to available
Click Execute (this triggers a real API call)
Intercept the network call for this execution and, from the response body, extract the first pet id
Expand the endpoint GET /pet/{petId}
Click Try it out
In the petId input field, type the extracted id from step 5 (do not take it from the UI)
Click Execute and validate:
status code is 200
Requirements:
The value must be obtained from the intercepted API response (step 5), not by reading it from the UI.
Avoid hard waits; synchronize using interception and assertions.




5. Disappearing Elements – Robust Validation
Navigate to:
https://the-internet.herokuapp.com/disappearing_elements
This page contains menu items that may disappear after refresh.
Implement a test that:
Refreshes the page  5 times
Validates that a minimum expected number of navigation elements exist.
Does not fail due to optional elements disappearing.

6. Dynamic Content Change Verification
Navigate to:
https://the-internet.herokuapp.com/dynamic_content
Implement a test that:
Captures text content from one of the content blocks.
Refreshes the page.
Validates that the content has changed.

7. New Window / Multi-Tab Handling
Navigate to:
https://the-internet.herokuapp.com/windows
Perform the following:
Click the “Click Here” link to open a new window.
Switch to the newly opened window.
Validate that the page contains the text “New Window”.
Return to the original window and validate that you are back on the initial page.




8. iFrame Presence and Read-Only Validation
Navigate to:
https://the-internet.herokuapp.com/iframe
Implement a test that validates the following:
A read-only warning/notification is visible on the page.
The editor iframe is present and visible.
Contains non-empty default text.
The test should not attempt to type into the editor.


9. Dynamic Controls – State Change Handling
Navigate to:
https://the-internet.herokuapp.com/dynamic_controls
Implement a test that:
Removes the checkbox and validates that it no longer exists.
Adds the checkbox again and validates that it reappears.
Enables the input field.
Types text into the input and validates that the field is enabled and contains the entered value
Use proper assertion .”for wait for it”

10. Nested Frames – Content Extraction
Navigate to:
https://the-internet.herokuapp.com/nested_frames
Extract and validate the text from:
The bottom frame.
One of the inner frames (e.g., left or middle).
The solution must correctly switch between nested frame contexts and perform accurate assertions.

