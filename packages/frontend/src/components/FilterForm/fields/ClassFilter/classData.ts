import deathknightIcon from 'img/class-icons/deathknight.png';
import demonhunterIcon from 'img/class-icons/demonhunter.png';
import druidIcon from 'img/class-icons/druid.png';
import hunterIcon from 'img/class-icons/hunter.png';
import mageIcon from 'img/class-icons/mage.png';
import paladinIcon from 'img/class-icons/paladin.png';
import priestIcon from 'img/class-icons/priest.png';
import rogueIcon from 'img/class-icons/rogue.png';
import shamanIcon from 'img/class-icons/shaman.png';
import warlockIcon from 'img/class-icons/warlock.png';
import warriorIcon from 'img/class-icons/warrior.png';
import neutralIcon from 'img/class-icons/neutral.png';

export const classIcons: Record<string, string> = {
  deathknight: deathknightIcon,
  demonhunter: demonhunterIcon,
  druid: druidIcon,
  hunter: hunterIcon,
  mage: mageIcon,
  paladin: paladinIcon,
  priest: priestIcon,
  rogue: rogueIcon,
  shaman: shamanIcon,
  warlock: warlockIcon,
  warrior: warriorIcon,
  neutral: neutralIcon,
}

export const classColors: Record<string, string> = {
  deathknight: 'hsl(215, 60%, 40%)',
  demonhunter: 'hsl(150, 65%, 35%)',
  druid: 'hsl(30, 55%, 50%)',
  hunter: '#2e9c24',
  mage: '#4e9ec7',
  paladin: '#e8d73a',
  priest: '#e8e5c8',
  rogue: '#7d7a80',
  shaman: 'hsl(235, 75%, 50%)',
  warlock: 'hsl(290, 45%, 40%)',
  warrior: 'hsl(5, 75%, 40%)',
  neutral: '#75665d'
}