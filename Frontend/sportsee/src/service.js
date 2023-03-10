import mockData from './assets/mockdata';
import { transformedSessions, transformedPerformance, transformedScore, transformedActivity } from './model';

const mock = false;

export default class Service {
  constructor(id, dataAPI) {
    this._userId = mock ? 18 : id;
    this.data = mock ? mockData : dataAPI;
    this.mainData = this.getMainData();
    this.firstName = this.mainData.userInfos.firstName;
    this.calories = this.getKeyData('calorieCount');
    this.protein = this.getKeyData('proteinCount');
    this.carbs = this.getKeyData('carbohydrateCount');
    this.fat = this.getKeyData('lipidCount');
    this.activity = this.getActivity();
    this.sessions = this.getSessions();
    this.performance = this.getPerformance();
    this.score = this.getScore();
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
     ? this.data.USER_ACTIVITY.find(user => user.userId === this._userId)
      : this.data.activity.data.sessions;
     
    const result  = transformedActivity(activity) ; 
    return result;
      
  }

  getSessions() {
      const sessions = mock ? this.data.USER_AVERAGE_SESSIONS.find(user => user.userId === this._userId).sessions
      : this.data.averageSessions.data.sessions;

       const result = transformedSessions(sessions);
      return result;

  }

  getPerformance() {
    const performance = mock
      ? this.data.USER_PERFORMANCE.find(user => user.userId === this._userId)
      : this.data.performance.data;

     const result = transformedPerformance(performance);
    return result; 
  }

  getScore() {
    const score = this.mainData.todayScore;
    const result = transformedScore(score)
    return result;
  } 

  
}
