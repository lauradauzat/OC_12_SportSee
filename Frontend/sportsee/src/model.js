export default class DataTransformer {

  constructor(sessions, performance, score, activity) {
    this.sessions = this.transformSessions(sessions);
    this.performance = this.transformPerformance(performance);
    this.score = this.transformScore(score);
    this.activity = this.transformActivity(activity);
  }

  transformSessions(sessions) {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    
    return sessions.map(session => {
      const dayOfWeek = daysOfWeek[session.day-1];
      return {
        ...session,
        day: dayOfWeek
      };
    });
  }

  transformPerformance(performance) {
    const data = performance.data.map(d => {
      var kindName = '';
      switch (performance.kind[d.kind]) {
        case 'energy': 
          kindName = 'Énergie';
          break;
        case 'endurance':
          kindName = 'Endurance';
          break;
        case 'strength':
          kindName = 'Force';
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

  transformScore(score) {   
    const scorePct = score * 100; 
    const rest = 100 - scorePct;
    return {
      scorePct: scorePct,
      rest: rest
    };
  }

  transformActivity(activity) { 
    const data = activity.map((session) => ({
        name: parseInt(session.day.split('-')[2]),
        kg: session.kilogram,
        kal: session.calories,
    }));
    return data;
  }
}
