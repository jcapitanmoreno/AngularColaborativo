import {Injectable} from '@angular/core';
import * as emailjs from 'emailjs-com';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
  }

  async sendEmail(email: string, subject: string, message: string) {
    const templateParams = {
      user_email: email,    // Correo del usuario
      subject: subject,     // Asunto del correo
      message: message      // Mensaje del correo
    };

    try {
      const response = await emailjs.send('service_mvwwjzm', 'template_gd3u5wb', templateParams, 'NMSGXmJsHkj2uCZaf');
      console.log('Correo enviado con éxito:', response);
      return response;
    } catch (error) {
      console.log('Error al enviar correo:', error);
      throw error;
    }
  }
}
