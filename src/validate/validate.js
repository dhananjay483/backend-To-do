// here we define our validation error
const validateError = async(schema , object , next) =>{
    try {
        const validTodo = await schema.validate(object , {
            abortEarly : false,
        })
        console.log(validTodo);
        return validTodo;
    } catch (err) {
        console.log("Validation error");
        next(err);
    }
}
export default validateError;