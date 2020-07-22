// import * as yup from 'yup';

// const phone_regex = /^\+?3?8?(0\d{9})$/;
// const email_regex = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// const no_spacing_regex = /^[a-zA-Z0-9]*$/;
// const only_letters_regex = /^[a-zA-Z]+$/;

// export const CheckoutSchema = yup.object().shape({
//   name: yup.string()
//     .min(2, 'Min name length is 2 symbols')
//     .matches(only_letters_regex, 'Name can contain only letters')
//     .matches(no_spacing_regex, 'Enter your name without spacing')
//     .required('This field is required'),
//   email: yup.string()
//     .matches(email_regex, 'Enter correctly Email')
//     .required('his field is required'),
//   phone: yup.string()
//     .matches(phone_regex, 'Your phone number should look like +380938107132')
//     .min(13)
//     .max(13)
// });
