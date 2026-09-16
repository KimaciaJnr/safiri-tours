export const siteContact = {
  companyName: 'Safiri Expedition Tours',
  email: 'info@safiriexpeditions.co.ke',
  phoneDisplay: '+254 712 345 678',
  phoneInternational: '+254712345678',
  whatsappNumber: '254712345678',
  location: 'Nairobi, Kenya',
};

export const whatsappLink = (text = '') =>
  `https://wa.me/${siteContact.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`;