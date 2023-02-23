export default function Plans(props){
    return(
            <section className="input-area">
                <h1 className="title">Select your plan</h1>
                <p className="description">You have the option of monthly or yearly billing.
                </p>

                <div className="plans-container">
                    <div className="plans">

                        <div 
                        className="arcade plan"
                        onClick={props.choosePlan}
                        >
                            <div className="arcade-logo logo"></div>
                            <h3 className="arcade-title">Arcade</h3>
                            <p 
                            className="pricing"
                            >
                            {props.togglePlan.yearlyplan?
                                props.togglePlan.arcadeYearly:props.togglePlan.arcadeMonthly
                            }   
                            </p>
                            {props.togglePlan.yearlyplan && <p className="free">2 months free</p>}
                        </div>

                        <div 
                        className="advance plan"
                        onClick={props.choosePlan}
                        >
                            <div className="advance-logo logo"></div>
                            <h3 className="arcade-title">Advance</h3>
                            <p 
                            className="pricing"
                            >
                            {props.togglePlan.yearlyplan?
                                props.togglePlan.advanceYearly:props.togglePlan.advanceMonthly
                            } 
                            </p>
                            {props.togglePlan.yearlyplan && <p className="free">2 months free</p>}
                        </div>

                        <div 
                        className="pro plan"
                        onClick={props.choosePlan}
                        >
                            <div className="pro-logo logo"></div>
                            <h3 className="arcade-title">Pro</h3>
                            <p 
                            className="pricing"
                            >
                            {props.togglePlan.yearlyplan?
                                props.togglePlan.proYearly:props.togglePlan.proMonthly
                            } 
                            </p>
                            {props.togglePlan.yearlyplan && <p className="free">2 months free</p>}
                        </div>
                    </div>
                    <div className="select-plans">

                        <h3 className={`monthly ${props.togglePlan.yearlyplan? 'yearOn': ''}`}>Monthly</h3>

                        <div class="toggle">
                            <input 
                                type="checkbox" 
                                id="checkbox"
                                onChange={props.chooseTenurity}    
                                />
                            <label 
                                class="toggle-plan" 
                                htmlFor="checkbox"
                                >

                            </label>
                        </div>

                        <h3 className={`yearly ${props.togglePlan.yearlyplan? 'monthOn': ''}`}>Yearly</h3>
                    </div>
                </div>

                <div className="btn-container">
                    <h4 
                    className="backBtn"
                    onClick={props.goBack}
                    >Go Back</h4>
                    <button 
                    className="btn nextStep"
                    onClick={props.handleNext}
                    >Next Step</button>
                </div>
            </section>
    )
}