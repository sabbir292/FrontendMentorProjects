export default function Sidebar(props){
    return(
        <section className="sidebar">
            <div className="step-container">

                <div 
                className="firstStep infoPage"
                onClick={(event)=>props.handleNavigation(event)}

                // onClick={(event)=>props.handleNavigation(event)}
                >
                    <p className={`infoPage count1 ${props.info?'active':''}`}>1</p>
                    <div className="step infoPage">
                        <p className="steps infoPage">STEP 1</p>
                        <h3 
                        className="stepHeading infoPage" 
                        >Your Info</h3>
                    </div>
                </div>


                <div 
                className="firstStep planPage"
                onClick={(event)=>props.handleNavigation(event)}
                >
                    <p className={`planPage count1 ${props.plans?'active':''}`}>2</p>
                    <div className="step planPage">
                        <p className="steps planPage">STEP 2</p>
                        <h3 
                        className="stepHeading planPage"

                        >select plan</h3>
                    </div>
                </div>

                <div 
                className="firstStep addonPage"
                onClick={(event)=>props.handleNavigation(event)}
                >
                    <p className={`addonPage count1 ${props.addons?'active':''}`}>3</p>
                    <div className="step addonPage">
                        <p className="steps addonPage">STEP 3</p>
                        <h3 
                        className="stepHeading addonPage"
                        >add-ons</h3>
                    </div>
                </div>
                
                <div 
                className="firstStep summaryPage"
                onClick={(event)=>props.handleNavigation(event)}
                >
                    <p className={`summaryPage count1 ${props.summary?'active':''}`}>4</p>
                    <div className="step summaryPage">
                        <p className="steps summaryPage">STEP 4</p>
                        <h3 
                        id="summary"
                        className="stepHeading summaryPage"
                        >summary</h3>
                    </div>
                </div>


            </div>
        </section>
    )
}