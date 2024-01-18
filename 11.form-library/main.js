import { z } from 'zod';

const emailSchema = z.string().email();
const passwordSchema = z.string().min(12);

// user-side
setupForm({
  form: document.querySelector('#login-form'),
  fields: {
    email: emailSchema,
    password: passwordSchema,
  },
  async onSubmit(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('onSubmit - user side: ', data);
        resolve();
      }, 3000);
    })
  }
})

// library-side
function setupForm({ form, fields, onSubmit }) {
  let isSubmitting = false;

  // const submitButton = form.querySelector("button[type='submit']");
  // if (!submitButton) {
  //   console.error('submit button is missing!');
  // }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }
    isSubmitting = true;
    form.setAttribute("data-submitting", true);

    const data = {};
    const errors = {};
    let valid = true;
    Object.keys(fields).forEach(key => {
      const value = form[key].value;
      const schema = fields[key];
      const result = schema.safeParse(value);
      const errorElement = form.querySelector(`#${key}-error`);

      if (result.success) {
        errorElement.innerHTML = '';
      } else {
        valid = false;
        errors[key] = result.error;
        if (errorElement) {
          errorElement.innerHTML = result.error.issues[0].message;
        }
      }
      data[key] = value;
    });

    if (valid) {
      console.log('start submitting');
      await onSubmit(data);
      console.log('submit finished');
    } else {
      console.log('errors: ', errors);
    }

    isSubmitting = false;
    form.setAttribute("data-submitting", false);
  })
}