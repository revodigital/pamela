/*
 * Copyright (c) 2021-2022. Revo Digital 
 * ---
 * Author: gabriele
 * File: ColLayoutGroup.ts
 * Project: pamela 
 * Committed last: 2022/1/26 @ 97
 * ---
 * Description:
 */

import { ColumnLayout }    from './ColumnLayout';
import { Column, IColumn } from '../shapes/column';

export interface IColLayoutGroup {
  columns: ColumnLayout[];
}

/**
 * Represents a group of column layouts
 */
export class ColLayoutGroup implements IColLayoutGroup {
  columns: ColumnLayout[];

  constructor(cols?: ColumnLayout[]) {
    this.columns = cols || [];
  }

  /**
   * Returns the auto cols percentage of total space
   */
  getAutoColPercentage(): number {
    return (100 - this.getColsTotalSpace()) / this.getAutoColCount();
  }

  /**
   * Calculates the number of columns set to auto
   */
  getAutoColCount(): number {
    let cont = 0;

    for(const c of this.columns) {
      if(c.widthIsAuto()) cont ++;
    }

    return cont;
  }

  /**
   * Checks if this group is valid or not
   */
  isValid(): boolean {
    for(const c of this.columns) if(!c.isValid()) return false;
    return true;
  }

  /**
   * Adds a column at the end of the list
   * @param col
   */
  push(col: ColumnLayout): void {
    this.columns.push(col);
  }

  /**
   * Calculates the number of columns set to override
   */
  getOverrideColCount(): number {
    let cont = 0;

    for(const c of this.columns) {
      if(!c.widthIsAuto()) cont ++;
    }

    return cont;
  }


  /**
   * Returns a percentage of all the space
   * hold by override columns
   */
  getColsTotalSpace(): number {
    let space = 0;

    for(const c of this.columns) {
      if(!c.widthIsAuto()) space += c.width as number;
    }

    return space;
  }

  /**
   * Creates a group starting from raw configuration
   * @param columnData Columns configuration data
   */
  static fromRawConfiguration(columnData: IColumn[]): ColLayoutGroup {
    let group = new ColLayoutGroup();
    for(const c of columnData)
      group.columns.push(new Column(c).extractLayout());
    return group;
  }
}