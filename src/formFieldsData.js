export const fields = [
  {
    name: 'date',
    label: 'Data',
    placeholder: 'RRRR-MM-DD',
    pattern: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
    error: 'Popraw wprowadzoną datę',
    type: 'text',
    required: true
  },
  {
    name: 'time',
    label: 'Godzina',
    placeholder: 'HH:MM',
    pattern: /^[0-9]{2}:[0-9]{2}$/,
    error: 'Popraw wprowadzoną godzinę',
    type: 'text',
    required: true
  },
  {
    name: 'firstName',
    label: 'Imię',
    error: 'Wprowadź poprawnie imię',
    pattern: /[^ ]+/,
    type: 'text',
    required: true
  },
  {
    name: 'lastName',
    label: 'Nazwisko',
    error: 'Wprowadź poprawnie nazwisko',
    pattern: /[^ ]+/,
    type: 'text',
    required: true
  },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'nazwa@poczty.pl',
    pattern: /^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$/,
    error: 'Wprowadź poprawny adres email',
    type: 'text',
    required: true
  }
]

export default fields
