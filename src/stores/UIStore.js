import { observable, action } from 'mobx';

import { setClassProps } from '../utils/helpers';

export default class UIStore {
  @observable
  errors = {
    visible: false,
    title: '',
    message: '',
  };

  @observable
  success = {
    visible: false,
    message: '',
  };

  @observable
  operation = {
    visible: false,
    desc: '',
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
