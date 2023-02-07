# DATA

## DATA LAYER

- Events data
  - type of event
  - image
  - name
  - location: country, city
  - price
  - date

## DATA MODIFICATIONS

- Add event to my list
- Delete event from my list
- Update my event from my list
- Create a new event

# COMPONENTS

## PROVIDER (CONTEXT)

- Contains the function to add an event to my list
- Contains the function to delete an event
- Contains the function to update the event
- Contains the function to create a new event
- Contains the list of events

## APP

## EventList

- Receives the list of events from the Provider
- Sends the event info to the Event component

## Event

- Receives the event info
- Contains add fav button
- Contains de information for each event : - image - name - date - location - type of event(music, concert, theater) - price
- Receives the function to add to my list
- Navigates to Detail page

## Form

- Receives the function to add a new event
- Receives the info for the new event - image - name - date - location - type - price

- Receives the function to update an event
  - Recives the updated info for an event

## Header

- Contains the title
- Contains the app logo
- Contains Navbar

## Navbar

- Contains the routes to navigate to: - Home Page - My Event List - Create an Event

## Feedback

- Contains the user feedback for: - Create an event: - Event was created properly - Event could not be created - Add an event: - Event is selected to be on MyEventList - Element is not selected to be on MyEventList - Modify an event: - Event was modified properly - Event could not be modified

## Search

- Contains a form to capture a keyword
- Receives the function to search events

## Pagination

# Page

## Home Page

- Contains the EventList component
- Contains the Search component

### My Events List Page

- Contains a list of events selected by the user
- Contains the function to remove an event from the list
- Contains the function to update an event from the list

## Detail Page

- Contains an event with more details (name, image, location, price, time)

## Create Page

- Contains the Form component
- Receives the function to create a new event

## 404 Page

- Display an error message when a request went wrong

## Modify Page

- Contains The Form component
