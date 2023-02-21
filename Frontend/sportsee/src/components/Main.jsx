function Main({...data}) {

    console.log(data.data.data);


    return (
        <>
        <main>
        <div className="intro">
          <h1>
            Bonjour 
         
          <span className="red">  {data.data.data.userInfos.firstName}</span> 
          </h1>
          <p>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>

        <div className="charts-container">
          <div className="actquot white-bg"></div>
          <div className="cal white-bg">
            <img src="/img/calories-icon.png" alt="calories" />
            <div className="right-text">
            <span id="cal-data">{data.data.data.keyData.calorieCount} g</span>
              <p>Calories</p>
            </div>
          </div>
          <div className="prot white-bg">
            <img src="/img/protein-icon.png" alt="protein" />
            <div className="right-text">
            <span id="cal-prot">{data.data.data.keyData.proteinCount} g</span> 
              <p>Protéines</p>
            </div>
          </div>
          <div className="obj red-bg"></div>
          <div className="radar dark-bg"></div>
          <div className="score white-bg"></div>
          <div className="gluc white-bg">
            <img src="/img/carbs-icon.png" alt="carbs" />
            <div className="right-text">
              <span id="gluc-data">{data.data.data.keyData.carbohydrateCount} g</span>
              <p>Glucides</p>
            </div>
          </div>
          <div className="lip white-bg">
            <img src="/img/fat-icon.png" alt="fat" />
            <div className="right-text">
              <span id="lip-data">{data.data.data.keyData.lipidCount} g</span>
              <p>Lipides</p>
            </div>
          </div>
        </div>
      </main>
        </>
    )
}

export default Main; 