import {Dimensions} from 'react-native';

export const categories = [
  {id: 0, name: 'report'},
  {id: 1, name: 'houseCuspsAndSandhi'},
  {id: 2, name: 'dosha'},
  {id: 3, name: 'gemstones'},
];
export const width = Dimensions.get('window').width;
export const height = Dimensions.get('window').height;

export const KEY_VALUE = 'KEY_VALUE';
export const PARAGRAPH = 'PARAGRAPH';
export const KEY_PARAGRAPH = 'KEY_PARAGRAPH';

//colors
export const BLACK = '#000000';
export const LIGHT_BLACK = '';
export const TAB_BORDER_COLOR = '#1f60e0';
export const WHITE = '#ffff';
export const TABLE_HEADING_BACKGROUND = '#DBE2E9';
export const TABLE_ROW_BACKGROUND = '#F2F3F5';
export const PARAGRAPH_HEADING = '#555555';
export const TABLE_BACKGROUND = '#f0f0f0';

export const capatalizeFirstChar = string => {
  if (string.length > 0) {
    // Capitalize the first letter and concatenate it with the rest of the string
    return string.charAt(0)?.toUpperCase() + string?.slice(1);
  }
};
