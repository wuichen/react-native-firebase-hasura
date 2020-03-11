const gotQL = require("gotql");

const mutation = {
  operation: {
    name: "insert_users",
    args: {
      objects: {
        id: "were",
        name: "testing"
      }
    },
    fields: [
      {
        returning: {
          fields: ["id", "name"]
        }
      }
    ]
  }
};

gotQL
  .mutation("safepoint-hasura.herokuapp.com/v1/graphql", mutation)
  .then(response => {
    console.log(response);
  });
