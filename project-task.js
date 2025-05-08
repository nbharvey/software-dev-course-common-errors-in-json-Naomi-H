/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

{
  "invalidBookingJSON": {
      "hotelName": "Grand City Hotel",
      "checkInDate": "2024-05-15",
      "checkOutDate": "2024-05-20",
      "guests": [
          {
              "name": "Alice Johnson",
              "age": 30,
              "email": "alice.johnson@example.com"
          },
          {
              "name": "Bob Smith",
              "age": null,
              "email": "bob.smith@example"
          }
      ],
      "roomDetails": {
          "type": "Suite",
          "pricePerNight": 200,
          "amenities": [
              "WiFi",
              "Breakfast",
              "Parking"
          ]
      }
  }
}


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?

ERRORS
    1. const invalidBooking JSON/removed const/can't have that in JSON
    2. backticks/removed them/can't have in JSON
  3. semicolon at the end/removed/not necessary in JSON
  4. parse error on line 5/incorrect syntax/added comma
  5. parse error on line 8/missing quotations on name/added quotes
  6. error on line 15/undefined/changed to null
  7. error on line 22/trailing comma/removed

*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?
I used jsonlint.com

2️⃣ How did you confirm that your corrected JSON file was valid?
I reread and used the validator to check it again at the end. Gave me confirmation "JSON is Valid!"

3️⃣ Which errors were the most difficult to spot? Why?
Undefined needing to be null, because in JS both are valid

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)
   Using JSON validators is extremely helpfuL!
*/
