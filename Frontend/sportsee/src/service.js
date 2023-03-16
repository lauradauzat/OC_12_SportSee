import mockData from './assets/mockdata';
import DataTransformer from './model';


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
      ? this.data.USER_ACTIVITY.find(user => user.userId === this._userId)
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
