
export function transformedSessions(sessions) {
    const daysOfWeek = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    
    return sessions.map(session => {
      const dayOfWeek = daysOfWeek[session.day-1];
      return {
        ...session,
        day: dayOfWeek
      };
    });
}
  

export function transformedPerformance(performance) {
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

export function transformedScore(score) {   
    const scorePct = score * 100; 
    const rest = 100 - scorePct;
    return {
      scorePct: scorePct,
      rest: rest
    };
}

export function transformedActivity(activity) { 
    const data = activity.map((session) => ({
        name: parseInt(session.day.split('-')[2]),
        kg: session.kilogram,
        kal: session.calories,
    }));
    return data;
}