import ActiviteQuotidienne from "./ActiviteQuotidienne";
import DureeSession from "./DureeSession";
import Radar from "./Radar";
import Score from "./Score" 
import Service from "../service";
import PropTypes from 'prop-types';

/**

Main component displaying user data and statistics.
@param {object || null } dataAPI - The user data fetched from the API.
@param {string || null } id - The user ID fetched from the URL.
@returns {JSX.Element} - The JSX element containing the user data and statistics.
*/


function Main({ dataAPI, id}) {
  //if the id is null, it means that we are using the mock data
  if (!dataAPI && id !== null ) {
    return <div className="error404">Error 404 ... L'utilisateur est introuvable !</div>
  }


  const service = new Service(id, dataAPI);
  const firstName = service.firstName;
  const calories = service.calories; 
  const protein = service.protein;
  const carbs = service.carbs;
  const fat = service.fat;
  const sessions = service.sessions; 
  const activity = service.activity;
  const performance = service.performance; 
  const {scorePct,rest} = service.score; 

  

  


    return (
        <>
        <main>
        <div className="intro">
          <h1>
            Bonjour 
         
          <span className="red">  {firstName}</span> 
          </h1>
          <p>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div className="charts-container">
          <ActiviteQuotidienne activity={activity}></ActiviteQuotidienne>
          <div className="cal white-bg">
            <img src="/img/calories-icon.png" alt="calories" />
            <div className="right-text">
            <span id="cal-data">{calories} g</span>
              <p>Calories</p>
            </div>
          </div>
          <div className="prot white-bg">
            <img src="/img/protein-icon.png" alt="protein" />
            <div className="right-text">
            <span id="cal-prot">{protein} g</span> 
              <p>Protéines</p>
            </div>
          </div>
          <DureeSession sessions={sessions}></DureeSession>
          <Radar performance={performance}></Radar>
          <Score scorePct={scorePct} rest={rest}></Score>
    
          <div className="gluc white-bg">
            <img src="/img/carbs-icon.png" alt="carbs" />
            <div className="right-text">
              <span id="gluc-data">{carbs} g</span>
              <p>Glucides</p>
            </div>
          </div>
          <div className="lip white-bg">
            <img src="/img/fat-icon.png" alt="fat" />
            <div className="right-text">
              <span id="lip-data">{fat} g</span>
              <p>Lipides</p>
            </div>
          </div>
        </div>
      </main>
        </>
    )
}


Main.propTypes = {  
  dataAPI: PropTypes.object,
  id: PropTypes.string,
};



export default Main; 