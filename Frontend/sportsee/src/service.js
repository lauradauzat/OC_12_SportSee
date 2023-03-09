import mockData from './assets/mockdata';
import { useState, useEffect } from 'react';


export default class Service {
  constructor() {
    const IdInParams = new URLSearchParams(window.location.search).get('id');
    this._userId = IdInParams ? IdInParams : 12;
    this.data = mockData; // initialize data with mockData
    this.mainData = this.getMainData();
    this.firstName = this.getFirstName();
    this.calories = this.getKeyData('calorieCount');
    this.protein = this.getKeyData('proteinCount');
    this.carbs = this.getKeyData('carbohydrateCount');
    this.fat = this.getKeyData('lipidCount');
    this.sessions = this.getSessions();
    this.performance = this.getPerformance();
    this.score = this.getScore();
  }

/*   This need to be implemented
  
  useEffect(() => {
    if (IdInParams) {
      let url = 'http://localhost:3001/user/';
      url += IdInParams;
      async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      }
      fetchData();
    }
  }, [IdInParams]);
 */

  getMainData() {
    return this.data.USER_MAIN_DATA.find(user => user.id === this._userId);
  }

  getFirstName() {
    return this.data.userInfos.firstName;
  }

  getKeyData(key) {
    return this.data.keyData[key];
  }

  getSessions() {
    const user =  this.data.USER_AVERAGE_SESSIONS.find(user => user.userId === this._userId);
    return user.sessions;
  } 

  getPerformance() {
    const user =  this.data.USER_PERFORMANCE.find(user => user.userId === this._userId);
    return user;
  }

  getScore() {
    const user =  this.data.USER_MAIN_DATA.find(user => user.id === this._userId);
    return user.todayScore;
  }


} 