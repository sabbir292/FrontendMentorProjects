export default function Addons(props){
    return(
        <section className="input-area">
            <h1 className="title">Pick add-ons</h1>
            <p className="description">Add ons help enhance your gaming experience.
            </p>

        <div className="addons-container">
            <div className="add-ons">

                <div className="online service">
                    <input type='checkbox' id="checkbox"></input>
                    <div className="services">
                     <h3 className="service-title">Online service</h3>
                     <p className="service-description">Access to multiplayer games</p>
                    </div>
                    <p className="pricing">$1/mo</p>
                </div>
                <div className="online service">
                    <input type='checkbox' id="checkbox"></input>
                    <div className="services">
                     <h3 className="service-title">Larger Storage</h3>
                     <p className="service-description">Extra 1TB of cloud save</p>
                    </div>
                    <p className="pricing">$2/mo</p>
                </div>
                <div className="online service">
                    <input type='checkbox' id="checkbox"></input>
                    <div className="services">
                     <h3 className="service-title">Customizable Profile</h3>
                     <p className="service-description">Customize theme on your profile</p>
                    </div>
                    <p className="pricing">$1/mo</p>
                </div>
   
            </div>

        </div>

        <div className="btn-container">
            <h4 className="backBtn">Go Back</h4>
            <button className="btn nextStep">Next Step</button>
        </div>
    </section>
    )
}