import emailjs from 'emailjs-com';
emailjs.init('user_g5Kz08PFTy06sYwpBBzbh');

export const sendEmail = async (e) => {
  try {
    const { status } = await emailjs
      .sendForm('portfolio_website', 'rolando_portfolio', e, 'user_g5Kz08PFTy06sYwpBBzbh')
    return status
  } catch ({ status }) {
    return status
  }
} 