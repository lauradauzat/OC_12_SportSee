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
    return mock
     ? this.data.USER_ACTIVITY.find(user => user.userId === this._userId)
      : this.data.activity.data.sessions;
      
  }

  getSessions() {
/*    return mock
      ? this.data.USER_AVERAGE_SESSIONS.find(user => user.userId === this._userId).sessions
      : this.data.averageSessions.data.sessions;  */

      const sessions = mock ? this.data.USER_AVERAGE_SESSIONS.find(user => user.userId === this._userId).sessions
      : this.data.averageSessions.data.sessions;

      const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

      for(let i in sessions){
        console.log(sessions[i]);
     }

      sessions.map(session => {
        const dayOfWeek = daysOfWeek[session.day-1];
        return {
          ...session,
          day: dayOfWeek
        };
      }); 

      return sessions;

  }

  getPerformance() {
    const performance = mock
      ? this.data.USER_PERFORMANCE.find(user => user.userId === this._userId)
      : this.data.performance.data;

      const data = performance.data.map(d => {
        const kindName = performance.kind[d.kind];
        return {
          name: kindName,
          value: d.value,
          [kindName]: d.value
        };
      }); 
    
      return data; 
  }

  getScore() {
    const scorePct = this.mainData.todayScore * 100; 
    const rest = 100 - scorePct;
    return {
      scorePct: scorePct,
      rest: rest
    };
  } 

  
}
