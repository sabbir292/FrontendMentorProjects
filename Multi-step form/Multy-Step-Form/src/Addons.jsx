export default function Addons(props){
    return(
        <section className="input-area">
            <h1 className="title">Pick add-ons</h1>
            <p className="description">Add ons help enhance your gaming experience.
            </p>

        <div className="addons-container">
            <div className="add-ons">

                <div className={`online service ${props.onlineService? 'active':''}`}>
                    <input 
                        type='checkbox' 
                        id="checkbox"
                        name="onlineService"
                        onChange={props.handleAddons}
                        checked = {props.onlineService}
                        ></input>
                    <div className="services">
                     <h3 className="service-title">Online service</h3>
                     <p className="service-description">Access to multiplayer games</p>
                    </div>
                    <p className="pricing">{props.togglePlan.yearlyplan? props.addOns.onlineServiceYearlyPrice : props.addOns.onlineServiceMonthlyPrice}</p>
                </div>

                <div className={`online service ${props.extraStorage? 'active':''}`}>
                    <input 
                        type='checkbox' 
                        id="checkbox"
                        name="extraStorage"
                        onChange={props.handleAddons}
                        checked = {props.extraStorage}
                        ></input>
                    <div className="services">
                     <h3 className="service-title">Larger Storage</h3>
                     <p className="service-description">Extra 1TB of cloud save</p>
                    </div>
                    <p className="pricing">{props.togglePlan.yearlyplan? props.addOns.extraStorageYearlyPrice : props.addOns.extraStorageMonthlyPrice}</p>
                </div>

                <div className={`online service ${props.customizeProfile? 'active':''}`}>
                    <input 
                        type='checkbox' 
                        id="checkbox"
                        name ='customizeProfile'
                        onChange={props.handleAddons}
                        checked = {props.customizeProfile}
                        ></input>

                    <div className="services">
                     <h3 className="service-title">Customizable Profile</h3>
                     <p className="service-description">Customize theme on your profile</p>
                    </div>
                    <p className="pricing">{props.togglePlan.yearlyplan? props.addOns.customizeProfileYearlyPrice : props.addOns.customizeProfileMonthlyPrice}</p>
                </div>
   
            </div>

        </div>

        <div className="btn-container">
            <h4 
            className="backBtn"
            onClick={props.handleBack}
            >Go Back</h4>
            <button 
            className="btn nextStep"
            onClick={props.handleNext}
            >Next Step</button>
        </div>
    </section>
    )
}