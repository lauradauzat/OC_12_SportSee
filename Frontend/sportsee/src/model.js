/**
 * DataTransformer class that transforms raw data into a format that can be used by the application
 */

export default class DataTransformer {
  /**
   * Constructor for DataTransformer class
   * @param {Array} sessions - Array of session data
   * @param {Object} performance - Object containing performance data
   * @param {Number} score - Number representing score data
   * @param {Array} activity - Array of activity data
   */
  constructor(sessions, performance, score, activity) {
    this.sessions = this.transformSessions(sessions);
    this.performance = this.transformPerformance(performance);
    this.score = this.transformScore(score);
    this.activity = this.transformActivity(activity);
  }

  /**
   * Transform sessions data by mapping day of week to each session
   * @param {Array} sessions - Array of session data
   * @returns {Array} - Transformed sessions data
   */
  transformSessions(sessions) {
    // map each session to its day of week abbreviation
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    return sessions.map(session => {
      const dayOfWeek = daysOfWeek[session.day-1];
      return {
        ...session,
        day: dayOfWeek
      };
    });
  }

  /**
   * Transform performance data by mapping performance kinds to their corresponding names
   * @param {Object} performance - Object containing performance data
   * @returns {Array} - Transformed performance data
   */
  transformPerformance(performance) {
    // map each kind of performance to its corresponding name
    const data = performance.data.map(d => {
      var kindName = '';
      switch (performance.kind[d.kind]) {
        case 'energy': 
          kindName = 'Énergie';
          break;
        case 'strength':
          kindName = 'Force';
          break;
        case 'endurance':
          kindName = 'Endurance';
          break;
        case 'intensity':
          kindName = 'Intensité';
          break; 
        case 'speed': 
          kindName = 'Vitesse';
          break;
        case 'cardio': 
          kindName = 'Cardio';
          break;
        default:
          break;
      }
      return {
        name: kindName,
        value: d.value
      };
    }); 
    return data;
  }

  /**
   * Transform score data by converting to percentage and calculating rest
   * @param {Number} score - Number representing score data
   * @returns {Object} - Transformed score data
   */
  transformScore(score) {   
    const scorePct = score * 100; 
    const rest = 100 - scorePct;
    return {
      scorePct: scorePct,
      rest: rest
    };
  }

  /**
   * Transform activity data by mapping day, kilograms, and calories to each activity session
   * @param {Array} activity - Array of activity data
   * @returns {Array} - Transformed activity data
   */
  
  transformActivity(activity) { 
    console.log(activity)
    const data = activity.map((session) => ({
        name: parseInt(session.day.split('-')[2]),
        kg: session.kilogram,
        kal: session.calories,
    }));
    return data;
  }


}