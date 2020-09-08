import { configure } from 'mobx';

import UIStore from './UIStore';
import AppStore from './AppStore';
import MeditationStore from './MeditationStore';

configure({ enforceActions: 'observed' });

const uiStore = new UIStore();
const appStore = new AppStore();
const meditationStore = new MeditationStore(uiStore);

export default {
  uiStore,
  appStore,
  meditationStore,
};
