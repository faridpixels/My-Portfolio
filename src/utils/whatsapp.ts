import { ContactFormData } from '../types';

export const WHATSAPP_PHONE_DISPLAY = '+234 805 753 7586 (08057537586)';
export const WHATSAPP_NUMBER_RAW = '2348057537586';
export const OWNER_EMAIL = 'Faridenterprise111@gmail.com';

/**
 * Builds a direct wa.me link with URL-encoded message text
 */
export function buildWhatsAppUrl(message: string): string {
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_NUMBER_RAW}?text=${encodedText}`;
}

/**
 * General introductory message for "Let's Talk" CTA
 */
export function getGeneralIntroWhatsAppUrl(): string {
  const msg =
    "Hello Farid! I came across your FaridPixelPro portfolio and would like to discuss an upcoming project with you.";
  return buildWhatsAppUrl(msg);
}

/**
 * Prefilled quote request for a specific service
 */
export function getServiceQuoteWhatsAppUrl(serviceTitle: string): string {
  const msg = `Hello Farid! I would like to request a quote for your "${serviceTitle}" service via FaridPixelPro. Here is a brief overview of what I am looking for:`;
  return buildWhatsAppUrl(msg);
}

/**
 * Formats contact form details into an organized, readable WhatsApp message
 */
export function getContactFormWhatsAppUrl(formData: ContactFormData): string {
  const lines = [
    'Hello Farid! I would like to discuss a project with FaridPixelPro.',
    '',
    `*Client Name:* ${formData.name.trim()}`,
    `*Email Address:* ${formData.email.trim()}`,
  ];

  if (formData.service && formData.service.trim()) {
    lines.push(`*Service Needed:* ${formData.service.trim()}`);
  }

  if (formData.budget && formData.budget.trim()) {
    lines.push(`*Estimated Budget:* ${formData.budget.trim()}`);
  }

  if (formData.description && formData.description.trim()) {
    lines.push('', '*Project Details:*', formData.description.trim());
  }
  lines.push('', 'Looking forward to hearing from you!');

  return buildWhatsAppUrl(lines.join('\n'));
}

/**
 * Inquiry for a specific portfolio project style
 */
export function getPortfolioInquiryWhatsAppUrl(
  projectTitle: string,
  category: string
): string {
  const msg = `Hello Farid! I saw your project "${projectTitle}" (${category}) on FaridPixelPro and would love to commission a similar design for my business.`;
  return buildWhatsAppUrl(msg);
}
