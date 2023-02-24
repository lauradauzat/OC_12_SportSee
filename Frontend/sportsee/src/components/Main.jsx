import ActiviteQuotidienne from "./ActiviteQuotidienne";
import DureeSession from "./DureeSession";
import Radar from "./Radar";

function Main() {

   
  const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Karl',
            lastName: 'Dovineau',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Cecilia',
            lastName: 'Ratorez',
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]


    return (
        <>
        <main>
        <div className="intro">
          <h1>
            Bonjour 
         
          <span className="red">  {USER_MAIN_DATA[1].userInfos.firstName}</span> 
          </h1>
          <p>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div className="charts-container">
          <ActiviteQuotidienne></ActiviteQuotidienne>
          <div className="cal white-bg">
            <img src="/img/calories-icon.png" alt="calories" />
            <div className="right-text">
            <span id="cal-data">{USER_MAIN_DATA[1].keyData.calorieCount} g</span>
              <p>Calories</p>
            </div>
          </div>
          <div className="prot white-bg">
            <img src="/img/protein-icon.png" alt="protein" />
            <div className="right-text">
            <span id="cal-prot">{USER_MAIN_DATA[1].keyData.proteinCount} g</span> 
              <p>Protéines</p>
            </div>
          </div>
          <DureeSession></DureeSession>
          <Radar></Radar>
      
          <div className="score white-bg"></div>
          <div className="gluc white-bg">
            <img src="/img/carbs-icon.png" alt="carbs" />
            <div className="right-text">
              <span id="gluc-data">{USER_MAIN_DATA[1].keyData.carbohydrateCount} g</span>
              <p>Glucides</p>
            </div>
          </div>
          <div className="lip white-bg">
            <img src="/img/fat-icon.png" alt="fat" />
            <div className="right-text">
              <span id="lip-data">{USER_MAIN_DATA[1].keyData.lipidCount} g</span>
              <p>Lipides</p>
            </div>
          </div>
        </div>
      </main>
        </>
    )
}

export default Main; 