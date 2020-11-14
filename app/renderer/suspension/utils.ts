import { remote } from 'electron';

import heroes from '@shared/constants/heroes.json';

export function getHeroId(name: string) {
  return heroes.find((hero) => hero.name === name)?.id ?? 0;
}

export function getHero(id: number | string) {
  return heroes.find((hero) => hero.id === parseInt(<string>id, 10));
}

const { suspensionManager } = remote.getGlobal('managers');
export function showSuspension() {
  suspensionManager?.show();
}
export function hideSuspension() {
  suspensionManager?.hide();
}
