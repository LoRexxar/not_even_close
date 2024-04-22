import { aaAbilities } from './s4/aa'
import { avAbilities } from './s4/av'
import { bhAbilities } from './s4/bh'
import { hoiAbilities } from './s4/hoi'
import { nelthAbilities } from './s4/nelth'
import { nokAbilities } from './s4/nok'
import { rlpSpells } from './s4/rlp'
import { uldAbilities } from './s4/uld'
import type { Dungeon } from './enemies'

export const dungeonsUncompiled: Dungeon[] = [
  {
    key: 'aa',
    name: 'Algethar Academy',
    abilities: aaAbilities,
    icon: 'achievement_dungeon_dragonacademy',
  },
  {
    key: 'av',
    name: 'Azure Vault',
    abilities: avAbilities,
    icon: 'achievement_dungeon_arcanevaults',
  },
  {
    key: 'bh',
    name: 'Brackenhide Hollow',
    abilities: bhAbilities,
    icon: 'achievement_dungeon_brackenhidehollow',
  },
  {
    key: 'hoi',
    name: 'Halls of Infusion',
    abilities: hoiAbilities,
    icon: 'achievement_dungeon_hallsofinfusion',
  },
  {
    key: 'nelth',
    name: 'Neltharus',
    abilities: nelthAbilities,
    icon: 'achievement_dungeon_neltharus',
  },
  {
    key: 'nok',
    name: 'Nokhud Offensive',
    abilities: nokAbilities,
    icon: 'achievement_dungeon_centaurplains',
  },
  {
    key: 'rlp',
    name: 'Ruby Life Pools',
    abilities: rlpSpells,
    icon: 'achievement_dungeon_lifepools',
  },
  {
    key: 'uld',
    name: 'Uldaman',
    abilities: uldAbilities,
    icon: 'achievement_dungeon_uldaman',
  },
]

dungeonsUncompiled.push({
  key: 'all_s4',
  name: 'All dungeons',
  abilities: dungeonsUncompiled.flatMap(({ abilities }) => abilities),
  icon: 'achievement_challengemode_arakkoaspires_gold',
})

export default async () => ({
  data: dungeonsUncompiled,
})
