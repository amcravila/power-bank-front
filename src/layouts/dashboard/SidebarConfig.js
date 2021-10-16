import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: 'carteira de clientes',
    path: '/dashboard/customers',
    icon: getIcon(peopleFill),
  },
  {
    title: 'Produtos',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'perfil',
    path: '/dashboard/profile',
    icon: getIcon(fileTextFill),
  },
  {
    title: 'chat',
    path: '/dashboard/chat',
    icon: getIcon(fileTextFill),
  },
];

export default sidebarConfig;
