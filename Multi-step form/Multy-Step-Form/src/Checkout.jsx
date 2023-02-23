import Plans from "./Plans"
export default function Checkout(){
    return(
        <section className="input-area">
        <h1 className="title">Finishing up</h1>
        <p className="description">Double-check everything looks OK before confirming.
        </p>

        <div className="checkout-container">
            <div className="selected-plans">

                <div className="final-plans main-plan">
                    <div className="final-plan">
                        <h3 className="final-plan-name">Arcade(monthly)</h3>
                        <a href={<Plans />}>Change</a>
                    </div>
                    <p className="final-price">$9/mo</p>
                </div>
                <hr className="line"></hr>


                <div className="addon-plans final-plans">
                    <div className="addon-plan-name">Online service</div>
                    <p className="addon-price">$9/mo</p>
                </div>
                <div className="addon-plans final-plans">
                    <div className="addon-plan-name">Larger storage</div>
                    <p className="addon-price">$9/mo</p>
                </div>
                
            </div>
            <div className="total-amomunt final-plans">
                <p className="total">Total(per month)</p>
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