/*
 * Copyright (c) 2021-2022. Revo Digital
 * ---
 * Author: gabriele
 * File: Validators.ts
 * Project: pamela
 * Committed last: 2022/1/26 @ 97
 * ---
 * Description:
 */

import { Pamela } from './Global';
import { Util }   from './Util';

function _formatValue(val: any) {
  if (Util._isString(val)) {
    return '"' + val + '"';
  }
  if (Object.prototype.toString.call(val) === '[object Number]') {
    return val;
  }
  if (Util._isBoolean(val)) {
    return val;
  }
  return Object.prototype.toString.call(val);
}

export function RGBComponent(val: number) {
  if (val > 255) {
    return 255;
  } else if (val < 0) {
    return 0;
  }
  return Math.round(val);
}
export function alphaComponent(val: number) {
  if (val > 1) {
    return 1;
  } else if (val < 0.0001) {
    // chrome does not honor alpha values of 0
    return 0.0001;
  }

  return val;
}

export function getNumberValidator() {
  if (Pamela.isUnminified) {
    return function <T>(val: T, attr: string): T | void {
      if (!Util._isNumber(val)) {
        Util.warn(
          _formatValue(val) +
            ' is a not valid value for "' +
            attr +
            '" attribute. The value should be a number.'
        );
      }
      return val;
    };
  }
}

export function getNumberOrArrayOfNumbersValidator(noOfElements: number) {
  if (Pamela.isUnminified) {
    return function <T>(val: T, attr: string): T | void {
      let isNumber = Util._isNumber(val);
      let isValidArray = Util._isArray(val) && val.length == noOfElements;
      if (!isNumber && !isValidArray) {
        Util.warn(
          _formatValue(val) +
            ' is a not valid value for "' +
            attr +
            '" attribute. The value should be a number or Array<number>(' +
            noOfElements +
            ')'
        );
      }
      return val;
    };
  }
}

export function getNumberOrAutoValidator() {
  if (Pamela.isUnminified) {
    return function <T extends string>(val: T, attr: string): T | void {
      var isNumber = Util._isNumber(val);
      var isAuto = val === 'auto';

      if (!(isNumber || isAuto)) {
        Util.warn(
          _formatValue(val) +
            ' is a not valid value for "' +
            attr +
            '" attribute. The value should be a number or "auto".'
        );
      }
      return val;
    };
  }
}

export function getStringValidator() {
  if (Pamela.isUnminified) {
    return function (val: any, attr: string) {
      if (!Util._isString(val)) {
        Util.warn(
          _formatValue(val) +
            ' is a not valid value for "' +
            attr +
            '" attribute. The value should be a string.'
        );
      }
      return val;
    };
  }
}

export function getStringOrGradientValidator() {
  if (Pamela.isUnminified) {
    return function (val: any, attr: string) {
      const isString = Util._isString(val);
      const isGradient =
        Object.prototype.toString.call(val) === '[object CanvasGradient]' ||
        (val && val.addColorStop);
      if (!(isString || isGradient)) {
        Util.warn(
          _formatValue(val) +
            ' is a not valid value for "' +
            attr +
            '" attribute. The value should be a string or a native gradient.'
        );
      }
      return val;
    };
  }
}

export function getFunctionValidator() {
  if (Pamela.isUnminified) {
    return function (val: any, attr: string) {
      if (!Util._isFunction(val)) {
        Util.warn(
          _formatValue(val) +
            ' is a not valid value for "' +
            attr +
            '" attribute. The value should be a function.'
        );
      }
      return val;
    };
  }
}
export function getNumberArrayValidator() {
  if (Pamela.isUnminified) {
    return function (val: any, attr: string) {
      if (!Util._isArray(val)) {
        Util.warn(
          _formatValue(val) +
            ' is a not valid value for "' +
            attr +
            '" attribute. The value should be a array of numbers.'
        );
      } else {
        val.forEach(function (item: any) {
          if (!Util._isNumber(item)) {
            Util.warn(
              '"' +
                attr +
                '" attribute has non numeric element ' +
                item +
                '. Make sure that all elements are numbers.'
            );
          }
        });
      }
      return val;
    };
  }
}
export function getBooleanValidator() {
  if (Pamela.isUnminified) {
    return function (val: any, attr: string) {
      var isBool = val === true || val === false;
      if (!isBool) {
        Util.warn(
          _formatValue(val) +
            ' is a not valid value for "' +
            attr +
            '" attribute. The value should be a boolean.'
        );
      }
      return val;
    };
  }
}
export function getComponentValidator(components: any) {
  if (Pamela.isUnminified) {
    return function (val: any, attr: string) {
      if (!Util.isObject(val)) {
        Util.warn(
          _formatValue(val) +
            ' is a not valid value for "' +
            attr +
            '" attribute. The value should be an object with properties ' +
            components
        );
      }
      return val;
    };
  }
}
