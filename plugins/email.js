import emailjs from 'emailjs-com';
emailjs.init(process.env.USER_ID);

export const sendEmail = async (e) => {
  try {
    console.log(process.env.TEMPLATE_ID, e, process.env.USER_ID)
    const { status } = await emailjs
      .sendForm('portfolio_website', process.env.TEMPLATE_ID, e, process.env.USER_ID)
    return status
  } catch ({ status }) {
    return status
  }
} 