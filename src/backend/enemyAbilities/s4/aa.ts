import type { EnemyAbility } from '../enemies'
import { getEnemySpell } from '../grimoire'

const burstForth = getEnemySpell(388923, {
  cooldown: 60,
})

const manaBomb = getEnemySpell(386181, {
  damage: 91188 * 4 + getEnemySpell(386202).damage,
  cooldown: 25,
  periodic: true,
})

const arcaneFissure = getEnemySpell(388537, {
  cooldown: 45,
})

const surge = getEnemySpell(388862, {
  trashAbility: true,
  avoidable: true,
  cooldown: 25,
  combatDrop: 'recast',
  spellReflect: true,
})

const viciousAmbush = getEnemySpell(388940, {
  trashAbility: true,
  los: true,
})

const expelIntruders = getEnemySpell(377912, {
  trashAbility: true,
  avoidable: true,
  cooldown: 26,
  los: true,
  outrange: 30,
})

const deafeningScreech = getEnemySpell(377009, {
  name: 'Screech',
  los: true,
  cooldown: 23,
})

const deafeningScreech2: EnemyAbility = {
  ...deafeningScreech,
  name: deafeningScreech.name + ' @ 1 stack',
  damage: Math.round(deafeningScreech.damage * (1 + 1 * 0.5)),
}

const deafeningScreech3: EnemyAbility = {
  ...deafeningScreech,
  name: deafeningScreech.name + ' @ 2 stacks',
  damage: Math.round(deafeningScreech.damage * (1 + 2 * 0.5)),
}

const deafeningScreech4: EnemyAbility = {
  ...deafeningScreech,
  name: deafeningScreech.name + ' @ 3 stacks',
  damage: Math.round(deafeningScreech.damage * (1 + 3 * 0.5)),
}

const deafeningScreech5: EnemyAbility = {
  ...deafeningScreech,
  name: deafeningScreech.name + ' @ 4 stacks',
  damage: Math.round(deafeningScreech.damage * (1 + 4 * 0.5)),
}

const deafeningScreech6: EnemyAbility = {
  ...deafeningScreech,
  name: deafeningScreech.name + ' @ 5 stacks',
  damage: Math.round(deafeningScreech.damage * (1 + 5 * 0.5)),
}

export const aaAbilities = [
  burstForth,
  manaBomb,
  arcaneFissure,
  surge,
  expelIntruders,
  viciousAmbush,
  deafeningScreech,
  deafeningScreech2,
  deafeningScreech3,
  deafeningScreech4,
  deafeningScreech5,
  deafeningScreech6,
]
