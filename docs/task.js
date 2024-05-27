module.exports = {
    paths: {
      "/create": {
        post: {
          tags: {
            Tasks: "Create a task",
          },
          description: "Create Task",
          operationId: "createTask",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Task successfully createded",
            },
            500: {
              description: "There was a problem trying to create a task",
            },
          },
        }
      },
      "/": {
        get: {
          tags: {
            Tasks: "Get all tasks",
          },
          description: "Get Tasks",
          operationId: "getTasks",
          parameters: [],
          requestBody: {
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Task",
                },
              },
            },
          },
          responses: {
            201: {
              description: "Tasks successfully displayed",
            },
            500: {
              description: "Server error",
            },
          },
        }
      },

      "/id/{_id}": {
        put: {
          tags: {
            Tasks: "Update a task",
          },
          description: "Update Task",
          operationId: "updateTask",
          parameters: [
            {
              name: "_id",
              in: "path",
              schema: {
                $ref: "#/components/schemas/_id",
              },
              description: "Id of Task to be updated",
            },
          ],
          requestBody: {
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/Task" },
              },
            },
          },
          responses: {
            200: { description: "Task successfully updated" },
            500: { description: "There was a problem trying to update the task with _id: " },
          },
        },
        delete: {
            tags: {
              Tasks: "Delete a task",
            },
            description: "Delete Task",
            operationId: "deleteTask",
            parameters: [
              {
                name: "_id",
                in: "path",
                schema: {
                  $ref: "#/components/schemas/_id",
                },
                description: "Id of Task to be deleted",
              },
            ],
            requestBody: {
              content: {
                "application/json": {
                  schema: { $ref: "#/components/schemas/Task" },
                },
              },
            },
            responses: {
              200: { description: "task deleted" },
              500: { description: "There was a problem trying to delete a task" },
            },
          },
      },
  
    },
  };