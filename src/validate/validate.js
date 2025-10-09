
/* Here i want to write validation for every todo create , update and search */
import { createTaskSchema, updateTaskSchema, searchTaskSchema } from '../schema/ToDoSchema.js';

export default class todoValidations {
    // here we write create task time validation check 
    validateCreateRequest = async (req, res, next) => {
        try {
            const validTodo = await createTaskSchema.validate(req.body, {
                abortEarly: false, // if any validation error found then not to move forward
                stripUnknown: true, // remove the un-used property or data that is not defined my schema
            })
            console.log("create To-Do Task validation successful", validTodo);
            next();

        } catch (err) {
            console.log("create to do validation error", err);
            next(err);
        }
    }
    
    // validate update to-do task till updating time
    validateUpdateRequest = async (req, res, next) => {
        try {
            const validTodo = await updateTaskSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            })
            console.log("update to do validation successful", validTodo);
            next();
        } catch (err) {
            console.log("not to update your existing todo", err);
            next(err);
        }
    }
    validateSearchRequest = async (req,res,next) => {
        try {
            const validTodo = await searchTaskSchema.validate(req.body,{
                abortEarly: false,
                stripUnknown: true,
            })
            console.log("searching to do validation successful", validTodo);
            next();
        } catch (err) {
            console.log("validation error during search time" , err);
            next(err);
        }
    }
}
