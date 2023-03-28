# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

-   Data is saved in the database in the Facilities, Agents, and Shifts tables
-   A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
-   A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### 1. Add custom id field to Agents table

**Acceptance Criteria:**

-   A new custom id field is added to the Agents table in the database.
-   The custom id field is a unique identifier for each Agent.
-   Facilities can update the custom id field for each Agent.
-   The Agents column within the Shifts table should store an array of all Agents working on that Shift.

**Estimated Time:** 2-3 hours

**Implementation Details:**

-   Add a new column to the Agents table in the database to store the custom id.
-   Modify the Agent functionality to include the new custom id field.
-   Update the Shifts functionality to store an array of Agents working on that Shift.

### 2. Return custom Agent id in "getShiftsByFacility" function

**Acceptance Criteria:**

-   When the :getShiftsByFacility" function is called, it returns a list of Shifts worked that quarter, including the custom id for each Agent assigned to each Shift.

**Estimated Time:** 1-2 hours

**Implementation Details:**

-   Modify the query in the "getShiftsByFacility" function to join the Agents table to get the custom Agent id.
-   Update the Shifts functionality to include the custom Agent id field.
-   Update the function signature to reflect the addition of the custom Agent id field.

### 3. Use custom Agent id in "generateReport" function

**Acceptance Criteria:**

-   When the "generateReport" function is called, it uses the custom id for each Agent assigned to each Shift to generate the report.

**Estimated Time:** 1-2 hours

**Implementation Details:**

-   Modify the "generateReport" function to use the custom Agent id instead of the internal database id when generating the report.
-   Update the function signature to reflect the addition of the custom Agent id field.
