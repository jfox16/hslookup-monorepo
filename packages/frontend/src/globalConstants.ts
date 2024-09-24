import { DropdownOption } from 'components/Dropdown/Dropdown'

import packageJson from '../package.json'

export const VERSION_NUMBER = packageJson.version
export const SERVER_URL = process.env.NODE_ENV === 'production' ? 'https://api.hslookup.net/' : 'http://localhost:5000/';
export const DEBOUNCE_DELAY = 150;

export const DESKTOP_HEADER_HEIGHT = 60
export const MOBILE_HEADER_HEIGHT = 50
export const SIDEBAR_WIDTH = 380
export const MOBILE_BREAKPOINT_WIDTH = 120;

export const ANY_OPTION: DropdownOption = { label: '', value: undefined, key: 'any' };
