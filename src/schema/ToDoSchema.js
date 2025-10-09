// here we validate our database schema model 
import yup from 'yup';
// here we validate our Task routes validation
export const createTaskSchema = yup.object({
    title: yup
        .string()
        .trim()
        .min(3, 'Title is required atleast 3 character')
        .required('Title is required'),

    isImportant: yup
        .string()
        .oneOf(['Low', 'Medium', 'High'], 'Please first select your importance')
        .default('Low'),

    isCompleted: yup
        .boolean()
        .default(false)
});

// here we validate our update task routes validation
export const updateTaskSchema = yup.object({
    title: yup
        .string()
        .trim()
        .min(3, 'Title is required atleast 3 character')
        .required('Title is required'),

    isImportant: yup
        .string()
        .oneOf(['Low', 'Medium', 'High'], 'Please At-first select your importance'),

    isCompleted: yup
        .boolean()
}).min(1, 'At-least one field should be provide during update');

// here we validate our search functionality route
export const searchTaskSchema = yup.object({
    title: yup
        .string()
        .trim()
        .min(3, 'Title is required atleast 3 character')
        .required('Title is required')
});