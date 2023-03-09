import mockData from './assets/mockdata';


const mock = false;
export default class Service {
  constructor(id, dataAPI) {
    //console.log(id, dataAPI);
    if (mock === true) {
      this._userId = 18;
      this.data = mockData; // initialize data with mockData
    } else {
      this._userId = id;
      this.data = dataAPI;
    }
    //console.log(this.data);
    this.mainData = this.getMainData();
    //console.log(this.mainData);
    this.firstName = this.getFirstName();
    this.calories = this.getKeyData('calorieCount');
    this.protein = this.getKeyData('proteinCount');
    this.carbs = this.getKeyData('carbohydrateCount');
    this.fat = this.getKeyData('lipidCount');
    this.sessions = this.getSessions();
    this.performance = this.getPerformance();
    this.score = this.getScore();
  }



  getMainData() {
    if (mock === true) {
    return this.data.USER_MAIN_DATA.find(user => user.id === this._userId);
    } else {
      return this.data.main.data;
    }
  }

  getFirstName() {
    return this.mainData.userInfos.firstName;
  }

  getKeyData(key) {
    return this.mainData.keyData[key];
  }

  getSessions() {
    if (mock === true) {
    const user =  this.data.USER_AVERAGE_SESSIONS.find(user => user.userId === this._userId);
    return user.sessions;
    } else {
      return this.data.averageSessions.data.sessions;
    }
  } 

  getPerformance() {
    if(mock === true) {
      const user =  this.data.USER_PERFORMANCE.find(user => user.userId === this._userId);
      return user;
    } else {
      return this.data.performance.data;
    }
  }

  getScore() {
    return this.mainData.todayScore;
  }


} 