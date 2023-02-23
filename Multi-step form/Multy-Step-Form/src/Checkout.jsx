export default function Checkout(props){
    let arcade = props.togglePlan.arcade
    let advance = props.togglePlan.advance
    let pro = props.togglePlan.pro

    return(
        <section className="input-area">
        <h1 className="title">Finishing up</h1>
        <p className="description">Double-check everything looks OK before confirming.
        </p>

        <div className="checkout-container">
            <div className="selected-plans">

                <div className="final-plans main-plan">
                    <div className="final-plan">
                      { arcade && <h3 
                        className="final-plan-name"
                        >
                        {props.togglePlan.yearlyplan?'Arcade(yearly)': 'Arcade(monthly)'}
                        </h3>}

                      { advance && <h3 
                        className="final-plan-name"
                        >
                        {props.togglePlan.yearlyplan?'Advance(yearly)': 'Advance(monthly)'}
                        </h3>}

                      { pro && <h3 
                        className="final-plan-name"
                        >
                        {props.togglePlan.yearlyplan?'Pro(yearly)': 'Pro(monthly)'}
                        </h3>}

                        <a href="">Change</a>
                    </div>

                    {arcade && <p 
                    className="final-price">
                     {props.togglePlan.yearlyplan? props.togglePlan.arcadeYearly: props.togglePlan.arcadeMonthly}
                    </p>}
                    {advance && <p 
                    className="final-price">
                     {props.togglePlan.yearlyplan? props.togglePlan.advanceYearly: props.togglePlan.advanceMonthly}
                    </p>}
                    {pro && <p 
                    className="final-price">
                     {props.togglePlan.yearlyplan? props.togglePlan.proYearly: props.togglePlan.proMonthly}
                    </p>}

                </div>
                <hr className="line"></hr>


            {props.addOns.onlineService && 
                <div className="addon-plans final-plans">
                    <div className="addon-plan-name">Online service</div>
                            <p className="addon-price">{props.togglePlan.yearlyplan? props.addOns.onlineServiceYearlyPrice: props.addOns.onlineServiceMonthlyPrice}
                            </p>
                </div>
            }
               { props.addOns.extraStorage && 
               <div className="addon-plans final-plans">
                    <div className="addon-plan-name">Larger storage</div>
                    
                        
                            <p className="addon-price">{props.togglePlan.yearlyplan? props.addOns.extraStorageYearlyPrice: props.addOns.extraStorageMonthlyPrice}
                            </p>
                
                </div>}
               
               { props.addOns.customizeProfile && 
               <div className="addon-plans final-plans">
                    <div className="addon-plan-name">Customizable</div>
                    
                            <p className="addon-price">{props.togglePlan.yearlyplan? props.addOns.customizeProfileYearlyPrice: props.addOns.customizeProfileMonthlyPrice}
                            </p>
                
                </div>}
                
            </div>
            <div className="total-amomunt final-plans">
                <p className="total">Total{props.togglePlan.yearlyplan?'(yearly)': '(monthly)'}</p>
                <p className="total-price">+$12/mo</p>
            </div>
        </div>

        <div className="btn-container">
            <h4 className="backBtn">Go Back</h4>
            <button className="btn nextStep confirm-btn">Confirm</button>
        </div>
    </section>
    )
}