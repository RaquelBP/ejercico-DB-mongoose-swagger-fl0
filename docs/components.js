module.exports = {
    components:{
        schemas:{
            Task:{
                type:'object',
                properties:{
                    _id:{
                        type:'objectId',
                        description:"task identification number",
                        example:"6201064b0028de7866e2b2c4"
                    },
                    title:{
                        type:'string',
                        description:"title of the task",
                        example:"John"
                    },
                    completed:{
                        type:'boolean',
                        description:"mark as completed or uncompleted",
                        example:"john@gmail.com"
                    }
                }
            },
            _id:{
                type:'objectId',
                description:"An id of a user",
                example: "6201064b0028de7866e2b2c4"
            }

        }
    }
}