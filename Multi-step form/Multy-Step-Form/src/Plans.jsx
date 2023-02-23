export default function Plans(props){
    return(
            <section className="input-area">
                <h1 className="title">Select your plan</h1>
                <p className="description">You have the option of monthly or yearly billing.
                </p>

                <div className="plans-container">
                    <div className="plans">
                        <div className="arcade plan">
                            <div className="arcade-logo logo"></div>
                            <h3 className="arcade-title">Arcade</h3>
                            <p className="pricing">$9/mo</p>
                            <p className="free">2 months free</p>
                        </div>

                        <div className="advance plan">
                            <div className="advance-logo logo"></div>
                            <h3 className="arcade-title">Arcade</h3>
                            <p className="pricing">$9/mo</p>
                            <p className="free">2 months free</p>
                        </div>

                        <div className="pro plan">
                            <div className="pro-logo logo"></div>
                            <h3 className="arcade-title">Arcade</h3>
                            <p className="pricing">$9/mo</p>
                            <p className="free">2 months free</p>
                        </div>
                    </div>
                    <div className="select-plans">
                        <h3 className="monthly">Monthly</h3>

                        <div class="toggle">
                            <input type="checkbox" id="checkbox" />
                            <label class="toggle-plan" for="checkbox"></label>
                        </div>

                        <h3 className="Yearly">Yearly</h3>
                    </div>
                </div>

                <div className="btn-container">
                    <h4 className="backBtn">Go Back</h4>
                    <button className="btn nextStep">Next Step</button>
                </div>
            </section>
    )
}