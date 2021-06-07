import { DefaultTheme } from 'styled-components';
import { mainColor } from '@constants/user-info';

const theme: DefaultTheme = {
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    green: '#03C75A',
    gray: '#707070',
    lightGray: '#ECEDF1',
    superLightGray: '#fbfcfc',
    red: '#E55356',
    whiteGray: '#f0f2f5',
    blue: '#466dfc',
    gray50: '#F9FAFB',
    gray100: '#F3F4F6',
    gray200: '#E5E7EB',
    gray300: '#D1D5DB',
    gray400: '#9CA3AF',
    gray500: '#6B7280',
    gray600: '#4B5563',
    gray700: '#374151',
    gray800: '#1F2937',
    gray900: '#111827',
    mainColor,
  },
  sizes: {
    1: '1px',
    2: '2px',
    3: '4px',
    4: '8px',
    5: '16px',
    6: '24px',
    7: '32px',
    8: '64px',
    smallContainer: '640px',
    bigContainer: '1000px',
  },
  space: {
    1: '1px',
    2: '2px',
    3: '4px',
    4: '8px',
    5: '16px',
    6: '24px',
    7: '32px',
    8: '64px',
  },
  zIndices: {
    1: '10',
  },
};

export default theme;

export type TColor =
  | 'white'
  | 'black'
  | 'green'
  | 'gray'
  | 'lightGray'
  | 'superLightGray'
  | 'red'
  | 'whiteGray'
  | 'blue'
  | 'gray50'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900'
  | 'mainColor50'
  | 'mainColor100'
  | 'mainColor200'
  | 'mainColor300'
  | 'mainColor400'
  | 'mainColor500'
  | 'mainColor600'
  | 'mainColor700'
  | 'mainColor'
  | 'mainColor900';
