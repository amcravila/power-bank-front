export default [
  {
    id: '1',
    component: <div>BNY Mellon adicionou Distribuidor a conversa </div>,
    trigger: '2',
  },
  {
    id: '2',
    message:
      'Oi, Investidor. Tudo bem? Sou o assistente virtual do BNY Mellon e vou te ajudar nos primeiros passos para a abertura da sua conta. Seu *Distribuidor também está aqui para acompanhar e ajudá-lo neste processo.',
    trigger: '3',
  },
  {
    id: '3',
    message:
      'Quer compartilhar comigo os seus dados via Open Banking para agilizar a sua abertura de conta? O compartilhamento desses dados é totalmente seguro e permite que o seu contrato esteja pronto para assinatura digital em poucas horas e com menos burocracia. Se preferir, você também pode enviar os dados e documentos sem pedir para outra instituição.',
    trigger: '4',
  },
  {
    id: '4',
    options: [
      { value: 'Sim', label: 'Quero compartilhar meus dados', trigger: '5' },
      { value: 'Não', label: 'Quero enviar os documentos', trigger: '5' },
    ],
  },
  {
    id: '5',
    message:
      'Ótimo! Você quer compartilhar os dados de qual instituição financeira?',
    trigger: '6',
  },
  {
    id: '6',
    options: [
      { value: 'Itau', label: 'Itaú', trigger: '7' },
      { value: 'Brad', label: 'Bradesco', trigger: '7' },
      { value: 'Sant', label: 'Santander', trigger: '7' },
      { value: 'BB', label: 'Banco do Brasil', trigger: '7' },
    ],
  },
  {
    id: '7',
    message: 'Pessoa Física ou Pessoa Jurídica?',
    trigger: '8',
  },
  {
    id: '8',
    options: [
      { value: 'PF', label: 'Pessoa Física', trigger: '9' },
      { value: 'PJ', label: 'Pessoa Jurídica', trigger: '9' },
    ],
  },
  {
    id: '9',
    message:
      'Os dados cadastrais que serão compartilhados são:  Razão social, endereço completo, CNPJ, número de registro no país de origem, telefone, e-mail, data de abertura da empresa, informações de sócios e administradores, faturamento, valor patrimonial, ramo de atuação, data de início de relacionamento, produtos contratados, representantes. Concorda com o compartilhamento dessas informações? ',
    trigger: '10',
  },
  {
    id: '10',
    options: [
      { value: 'Sim', label: 'Sim', trigger: '11' },
      { value: 'Não', label: 'Não', trigger: '11' },
    ],
  },
  {
    id: '11',
    message:
      'Com o Open Banking você tem controle do tempo em que teremos essas informações compartilhadas. Selecione por quanto tempo você quer dividir essa informação.',
    trigger: '12',
  },
  {
    id: '12',
    options: [
      { value: '6', label: '6 meses', trigger: '13' },
      { value: '12', label: '12 meses', trigger: '13' },
    ],
  },
  {
    id: '13',
    message:
      'OK! Estamos avisando ao Itaú que você deseja compartilhar essas informações.',
    trigger: '14',
  },
  {
    id: '14',
    message:
      'Para darmos continuidade no compartilhamento dos dados, você precisa acessar a sua conta do Itaú e confirmar quais categorias de dados você vai compartilhar.',
    trigger: '15',
  },
  {
    id: '15',
    message: 'Clique aqui para ser redirecionado a Área de Login do Itaú',
    trigger: '16',
  },
  {
    id: '16',
    message:
      'Oi, Investidor! Ainda estamos aguardando a sua confirmação dos dados no Itaú para continuar a abertura da sua conta. Não se esqueça de acessar sua conta do Itaú e confirmar o compartilhamento dos dados.',
    trigger: '17',
  },
  {
    id: '17',
    message:
      'Oi, Investidor! Acabamos de receber do Itaú os seus Dados Cadastrais e podemos continuar a abertura da sua conta.',
    trigger: '18',
  },
  {
    id: '18',
    message: 'Qual a forma societária da empresa?',
    trigger: '19',
  },
  {
    id: '19',
    options: [
      { value: '6', label: 'LTDA', trigger: '20' },
      { value: '12', label: 'EIREILI', trigger: '20' },
    ],
  },
  {
    id: '20',
    message: 'Agora precisamos do endereço do Sócio Proprietário.',
    trigger: '21',
  },
  {
    id: '21',
    user: true,
    trigger: '22',
  },
  {
    id: '22',
    message:
      'Obrigado! A última informação que precisamos para emitir seu contrato é a conta corrente de liquidação.',
    trigger: '23',
  },
  {
    id: '23',
    user: true,
    trigger: '24',
  },
  {
    id: '24',
    message:
      'Tudo pronto! Seu contrato está pronto para assinatura. Acesse aqui para assinar.',
    trigger: '25',
  },
  {
    id: '25',
    message:
      'Oi, Investidor! Ainda estamos aguardando a assinatura do seu contrato. Acesse aqui para assinar e poder usufruir do Banco dos Bancos!',
    end: true,
  },
];
