import {Lables, Screen} from '../Strings';

export const UserAccountOptions = [
  {
    id: 1,
    name: Lables.MYACCOUNT,
    light: 'account_light',
    dark: 'account_dark',
    screen: Screen.MYPROFILE,
  },
  {
    id: 2,
    name: Lables.MYITEMS,
    light: 'my_items_dark',
    dark: 'my_items_light',
    screen: null,
  },
  {
    id: 3,
    name: Lables.MYINVOICES,
    light: 'my_invoices_light',
    dark: 'my_invoices_dark',
    screen: null,
  },
  {
    id: 4,
    name: Lables.SIGNOUT,
    light: 'forward_arrow_light',
    dark: 'forward_arrow_dark',
    screen: null,
  },
];
