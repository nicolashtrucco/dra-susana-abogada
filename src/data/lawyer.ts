const whatsappMessage =
  'Hola, Dra. Susana. Quisiera consultar sobre una situación penal.'

export const lawyer = {
  firstName: 'Susana',
  lastName: 'Zulkarneinuff',
  fullName: 'Dra. Susana Zulkarneinuff',
  brandName: 'Dra. Susana Zulkarneinuff',
  nickname: 'La Rusa',
  specialty: 'Derecho Penal',
  phone: {
    display: '+54 9 341 345-3869',
    whatsappUrl: `https://wa.me/5493413453869?text=${encodeURIComponent(whatsappMessage)}`,
  },
  registrations: {
    provincial: {
      label: 'Matrícula provincial',
      value: 'L. XXVI Folio 156',
    },
    federal: {
      label: 'Matrícula federal',
      value: 'T. 92 Folio 77',
    },
  },
} as const
