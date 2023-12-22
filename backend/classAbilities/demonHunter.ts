﻿import { Ability } from '../ability'

export const demonicWards: Ability = {
  name: 'Demonic Wards',
  spellId: 203513,
  alwaysOn: true,
  dr: 0.1,
  iconName: 'inv_belt_leather_demonhunter_a_01',
  wowheadLink: 'https://www.wowhead.com/spell=320381/demonic-wards',
}

export const illidariKnowledge: Ability = {
  name: 'Illidari Knowledge',
  spellId: 389696,
  alwaysOn: true,
  dr: 0.05,
  iconName: 'spell_mage_overpowered',
  wowheadLink: 'https://www.wowhead.com/spell=389696/illidari-knowledge',
}

export const willOfTheIllidari: Ability = {
  name: 'Will of the Illidari',
  spellId: 389695,
  alwaysOn: true,
  healthIncrease: 0.05,
  iconName: 'ability_demonhunter_spectank',
  wowheadLink: 'https://www.wowhead.com/spell=389695/will-of-the-illidari',
}

export const blur: Ability = {
  name: 'Blur',
  spellId: 198589,
  dr: 0.2,
  iconName: 'ability_demonhunter_blur',
  wowheadLink: 'https://www.wowhead.com/spell=212800/blur',
}

export const deflectingDance: Ability = {
  name: 'Deflecting Dance',
  spellId: 427776,
  healthIncrease: 0.15,
  iconName: 'ability_ironmaidens_bladerush',
  wowheadLink: 'https://www.wowhead.com/spell=427776/deflecting-dance',
}

export const havocAbilities = [
  demonicWards,
  illidariKnowledge,
  willOfTheIllidari,
  blur,
  deflectingDance,
]