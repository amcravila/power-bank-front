import faker from 'faker';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Claritas Inflação Institucional FIM',
  'Ouro Preto Real FIC FIRF LP',
  'Angá Portfólio FIM',
  'Órama Liquidez FIRF',
  'ARX Vinson FIC FIRF CP',
  'Devant Solidus Cash FIRF CP',
  'Integral FIRF CP',
  'ARX Elbrus FIC FIIIRF',
  'Órama Debêntures Incentivadas FI',
  'Devant Magna FIRF CP LP',
  'Quasar Latam Bonds BRL FIM CP IE',
  'Claritas Global High Yield FIM IE',
  'Oaktree Global Credit FIC FIM IE',
  'PIMCO Income Dólar FIC FIM IE',
  'Valora Horizon High Yield FIM CP',
  'Empírica Lótus IPCA FIC FIM CP',
  'Gávea Macro FIC FIM',
  'Quantitas Mallorca FIC FIM',
  'Ibiuna Hedge FIC FIM',
  'Vista Hedge FIM',
  'Hashdex 20 Nasdaq Crypto Index FIC FIM',
  'QR Blockchain Assets FIM IE',
  'BLP Criptoativos FIM',
  'Trígono Delphos Income FIC FIA',
];
const PRODUCT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107',
];

// ----------------------------------------------------------------------

const products = [...Array(24)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    name: PRODUCT_NAME[index],
    price: faker.datatype.number({ min: 4, max: 99, precision: 0.01 }),
    priceSale:
      setIndex % 3
        ? null
        : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
    colors:
      (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
      (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
      (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
      (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
      (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
      (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
      PRODUCT_COLOR,
  };
});

export default products;
