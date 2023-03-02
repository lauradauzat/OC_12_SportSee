import mockData from './assets/mockdata';

export default class Service {
  constructor(userId) {
    this._userId = userId;
    this.mockData = mockData;
    this.userData = this.getUserData();
    this.firstName = this.getFirstName();
    this.keyDatas = this.getKeyDatas();
    this.Score = this.getScore();
    this.Performance = this.getPerformance();
    this.AverageSessions = this.getAverageSessions();
    this.Activity = this.getActivity();
  }

  getFirstName() {
    const { user } = this.mockData;
    return user.firstName;
  }


} 