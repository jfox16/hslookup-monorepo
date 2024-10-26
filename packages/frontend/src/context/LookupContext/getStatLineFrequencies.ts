import { Card } from "types/cardTypes";

export const getStatLineFrequencies = (filteredCards: Card[]) => {
  const healthAttackMap: Map<number, Map<number, number>> = new Map();

  filteredCards.forEach(card => {
    if (card.attack !== undefined && card.health !== undefined) {
      const { health: h, attack: a } = card;
      if (!healthAttackMap.get(h)) {
        healthAttackMap.set(h, new Map())
      }

      const attackMap = healthAttackMap.get(h);

      if (attackMap) {
        attackMap.set(a, (attackMap.get(a) ?? 0) + 1);
      }
    }
  });

  const statLineFrequencies: {
    attack: number,
    health: number,
    count: number
  }[] = [];

  healthAttackMap.forEach((attackMap, health) => {
    attackMap.forEach((count, attack) => {
      statLineFrequencies.push({
        attack,
        health,
        count
      })
    })
  });

  statLineFrequencies
    .sort((a, b) => b.health - a.health)
    .sort((a, b) => b.attack - a.attack)
    .sort((a, b) => Math.abs(a.attack - a.health) - Math.abs(b.attack - b.health))
    .sort((a, b) => (b.attack + b.health) - (a.attack + a.health))
    .sort((a, b) => b.count - a.count);

  return statLineFrequencies;
}
