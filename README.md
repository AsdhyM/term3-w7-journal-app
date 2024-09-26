# Journal App

## Routes

- `localhost:3000/`
    - root or homepage
    - Welcome screen
    - Journal entry form/ "comment box"
    - List the entries
        - latest 5 entries?
- `localhost:3000/entries/:entryId`
    - View and edit individual journal entries by their entryId
    - "edit in place" for journal entry data
        - toggle between read-only and an editable form
    - button to delete the post
- `localhost:3000/searchKey/:searchValue/`
    - show a list of journal entries where each entry matches the searchProgram
- `localhost:3000/latest/`
    - List the entries
        - latest INFINITY entries


localhost:3000/search/:searchKey/:searchValue
localhost:3000/search/type/review
```js
{
    id: "123456789",
    type: "review",
    name: "Example post name",
    content: "Some cool conent goes here.",
    author: "Asdhy",
    lastEdited: 1231618865165 // milliseconds since JS dates are stored as that internally
}
```
