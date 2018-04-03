# Starlight Developer Interview

Much of what we do here at Starlight involves parsing large sets of data and displaying it in meaningful way. Use the provided JSON file to 
create a small JavaScript app. 
         
The application should do the following:
 - Serve the JSON from an API endpoint.
 - Request the data from the API
 - Display the results in a list which can be filtered based size.
         
You may use any libraries you'd like. If you use React, [Create-React-App](https://github.com/facebook/create-react-app/) is a perfect starting point.
Feel free to start from scratch.

Make sure to put your code in a repo on GitHub. Commit as often as you'd normally do.

The data in the JSON file consists of an array of can objects with nested location objects.
```js
[
  { 
    can 
    { 
      location 
    }, 
    { 
      prevLocation 
    }
  },
  {
    can 
    { 
      location
    },
    {
      prevLocation
    }
  }
]
```

The following keys on the can object should be included:
- name
- serial
- size
- createdDate
- modifiedDate

You can choose to do something with the location object on each can, or simply ignore them.