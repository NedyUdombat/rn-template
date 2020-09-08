import { observable, action } from 'mobx';

import { setClassProps, runInActionUtil } from '../utils/helpers';
import config from '../../config';
import getAxiosInstance from '../utils/axiosInstance';

/**
 * MobX store class.
 * For summary related operations.
 * @class
 */
export default class MeditationStore {
  constructor(uiStore) {
    this.uiStore = uiStore;
  }

  toastRef = {};

  toastDuration = 0;

  @observable
  recentMeditations = [];

  @observable
  todaysMeditation = [];

  @observable
  loading = {
    getRecentMeditations: false,
    getTodaysMeditations: false,
  };

  /**
   * Method used to retrieve recent meditations
   */
  @action
  getRecentMeditations = async () => {
    try {
      runInActionUtil(true, 'getRecentMeditations', this.loading);
      await getAxiosInstance()
        .then(axiosInstance =>
          axiosInstance.get(`${config.API_URL}/meditations/?recent=true`),
        )
        .then(res => {
          runInActionUtil(
            res.data.data.recentMeditations,
            'recentMeditations',
            this,
          );
          runInActionUtil(false, 'getRecentMeditations', this.loading);
        });
    } catch (err) {}
  };

  /**
   * Method used to retrieve todays meditation
   */
  @action
  getTodaysMeditations = async () => {
    try {
      runInActionUtil(true, 'getTodaysMeditations', this.loading);
      await getAxiosInstance()
        .then(axiosInstance =>
          axiosInstance.get(`${config.API_URL}/meditations/?today=true`),
        )
        .then(res => {
          runInActionUtil(res.data.data.meditation, 'todaysMeditation', this);
          runInActionUtil(false, 'getTodaysMeditations', this.loading);
        });
    } catch (err) {}
  };

  /**
   * Method used to assign values to the members of
   * this class from an external methods or a react component.
   * @param {array} arr - An array key:value pairs of class members and their values
   * @param {object} self - Refers to the class itself or a member.
   */
  @action
  setClassProps = (arr, self = this) => setClassProps(arr, self);
}
