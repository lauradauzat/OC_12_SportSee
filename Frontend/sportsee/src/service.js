import mockData from './assets/mockdata';

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
    this.sessions = this.getSessions();
    this.performance = this.getPerformance();
    this.score = this.mainData.todayScore;
  }

  getMainData() {
    return mock
      ? this.data.USER_MAIN_DATA.find(user => user.id === this._userId)
      : this.data.main.data;
  }

  getKeyData(key) {
    return this.mainData.keyData[key];
  }

  getSessions() {
    return mock
      ? this.data.USER_AVERAGE_SESSIONS.find(user => user.userId === this._userId).sessions
      : this.data.averageSessions.data.sessions;
  }

  getPerformance() {
    return mock
      ? this.data.USER_PERFORMANCE.find(user => user.userId === this._userId)
      : this.data.performance.data;
  }
}
