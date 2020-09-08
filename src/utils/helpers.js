import * as Crypto from 'expo-crypto';
import { runInAction } from 'mobx';

/**
 * Function used to assign values to the members of
 * this class from an external function or a react component.
 * @param {Array} arr - An array key:value pairs of class members and their values
 * @param {Object} self - Refers to the class itself or a member.
 */
const setClassProps = (arr, self) => {
  arr.forEach(elem => {
    self[elem.name] = elem.value;
  });
};

/**
 * Function for selectively rendering a react element
 * based on the condition param.
 * @param {Boolean} condition - determines if the element will be rendered or not.
 * @param {Element} content - React Element.
 */
const renderIf = (condition, content) => {
  if (condition) {
    return content;
  }
  return null;
};

/**
 * MobX runInAction util.
 * @param {any} data - Class member value.
 * @param {String} prop - A class member.
 * @param {Object} self - Refers to the class itself.
 */
const runInActionUtil = (data, prop, self) => {
  runInAction(() => {
    self[prop] = data;
  });
};

/**
 * Basic function for truncating a string
 * @param {string} str - string to be truncated
 * @param {integer} limit - word limit
 */
const truncateString = (str, limit) => {
  if (str.length < limit) return str;
  return `${str.slice(0, limit + 1)}...`;
};

export { setClassProps, renderIf, truncateString, runInActionUtil };
