import mockData from './assets/mockdata';
import DataTransformer from './model';

/**
A service class that handles the retrieval of user data.
@class Service
*/

// This var is used to switch between mock data and real data
const mock = false;


// A function that fetches data from the API

export const fetchData = async (url, id) => {
  try {
    const response0 = await fetch(url);
    if (response0.status === 404) {
      console.error('User not found');
      return null;
    }
    const mainData = await response0.json();
    const response1 = await fetch(`${url}/activity`);
    const activityData = await response1.json();
    const response2 = await fetch(`${url}/average-sessions`);
    const averageSessionsData = await response2.json();
    const response3 = await fetch(`${url}/performance`);
    const performanceData = await response3.json();

    return {
      main: mainData,
      activity: activityData,
      averageSessions: averageSessionsData,
      performance: performanceData
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};




export default class Service {
    /**

    Creates an instance of Service.
    @constructor
    @param {number || null } id - User ID.
    @param {Object || null} dataAPI - Object containing user data.
    */

  constructor(id, dataAPI) {
   
    this._userId = mock ? 18 : id;
    this.data = mock ? mockData : dataAPI;
    this.mainData = this.getMainData();
    this.firstName = this.mainData.userInfos.firstName;
    this.calories = this.getKeyData('calorieCount');
    this.protein = this.getKeyData('proteinCount');
    this.carbs = this.getKeyData('carbohydrateCount');
    this.fat = this.getKeyData('lipidCount');
    const dataTransformer = new DataTransformer(this.getSessions(), this.getPerformance(), this.getScore(), this.getActivity());
    this.activity = dataTransformer.activity;
    this.sessions = dataTransformer.sessions;
    this.performance = dataTransformer.performance;
    this.score = dataTransformer.score;
   
  }



  getMainData() {
    return mock
      ? this.data.USER_MAIN_DATA.find(user => user.id === this._userId)
      : this.data.main.data;
  }

  getKeyData(key) {
    return this.mainData.keyData[key];
  }

  getActivity() {
    const activity = mock
      ? this.data.USER_ACTIVITY.find(user => user.userId === this._userId).sessions
      : this.data.activity.data.sessions;

    return activity;
  }

  getSessions() {
    const sessions = mock
      ? this.data.USER_AVERAGE_SESSIONS.find(user => user.userId === this._userId).sessions
      : this.data.averageSessions.data.sessions;

    return sessions;
  }

  getPerformance() {
    const performance = mock
      ? this.data.USER_PERFORMANCE.find(user => user.userId === this._userId)
      : this.data.performance.data;

    return performance;
  }

  getScore() {
    const score = this.mainData.todayScore;
    return score;
  }
}
