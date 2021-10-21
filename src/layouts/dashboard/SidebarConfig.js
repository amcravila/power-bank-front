import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import shoppingBagFill from '@iconify/icons-eva/shopping-bag-fill';
import messageSquareFill from '@iconify/icons-eva/message-square-fill';
import globeFill from '@iconify/icons-eva/globe-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon(pieChart2Fill),
  },
  {
    title: 'chat',
    path: '/dashboard/chat',
    icon: getIcon(messageSquareFill),
  },
  {
    title: 'carteira de clientes',
    path: '/dashboard/customers',
    icon: getIcon(peopleFill),
  },
  {
    title: 'produtos',
    path: '/dashboard/products',
    icon: getIcon(shoppingBagFill),
  },
  {
    title: 'instituições financeiras',
    path: '/dashboard/participants',
    icon: getIcon(globeFill),
  },
];

export default sidebarConfig;
