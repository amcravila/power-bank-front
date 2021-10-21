import faker from 'faker';
// utils
import { mockImgParticipant } from '../utils/mockImages';

// ----------------------------------------------------------------------

const PARTICIPANT_NAME = [
  'Itaú',
  'Santander',
  'Bradesco',
  'Caixa',
  'Banco do Brasil',
  'Banco Inter',
  'Banco Original',
  'Banco Safra',
  'Nubank',
  'BV Financeira',
  'C6 Bank',
  'BTG Pactual',
  'Agibank',
  'Ágora Investimentos',
  'Banco Pan',
  'Banco BMG',
];
const PRODUCT_COLOR = [''];

const PARTICIPANT_URL = [
  'https://www.itau.com.br/',
  'https://www.santander.com.br/',
  'https://banco.bradesco/',
  'https://caixa.gov.br/',
  'https://www.bb.com.br/',
  'https://www.bancointer.com.br/',
  'https://www.original.com.br/',
  'https://www.safra.com.br/',
  'https://nubank.com.br/',
  'https://www.bv.com.br/',
  'https://www.c6bank.com.br/',
  'https://www.btgpactual.com/',
  'https://www.agibank.com.br/',
  'https://www.agorainvestimentos.com.br/',
  'https://www.bancopan.com.br/',
  'https://www.bancobmg.com.br/',
];

// ----------------------------------------------------------------------

const participants = [...Array(16)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgParticipant(setIndex),
    name: PARTICIPANT_NAME[index],
    colors: PRODUCT_COLOR,
    url: PARTICIPANT_URL[index],
  };
});

export default participants;
