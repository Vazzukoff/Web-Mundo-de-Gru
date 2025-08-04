import { z } from 'zod';

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(1, 'El nombre es obligatorio')
    .max(20, 'El nombre no puede exceder los 20 caracteres'),
  email: z
    .string()
    .min(1, 'El correo electrónico es obligatorio')
    .max(50, 'El correo electrónico no puede exceder los 50 caracteres')
    .trim()
    .email('Correo electrónico inválido'),
  message: z
    .string()
    .min(1, 'El mensaje es obligatorio')
    .max(500, 'El mensaje no puede exceder los 500 caracteres')
    .trim(),
});