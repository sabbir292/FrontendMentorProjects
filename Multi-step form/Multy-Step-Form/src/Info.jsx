import Sidebar from "./Sidebar"
export default function Info(props){
    return(
            <section className="input-area">
                <h1 className="title">Personal info</h1>
                <p className="description">Please provide your name, email address, and phone number.
                </p>

                <form 
                // onSubmit={handleSubmit}
                >
                    <label>
                        Name
                        {!props.name && <span className="alert">This feild is requied!</span>}

                         <input type="text"
                          placeholder="Sabbir Ho.." 
                          name="name"
                          value= {props.name}
                          onChange={props.updateInfo} 


                          />
                    </label>

                    <label>
                        Email Address
                        {!props.email && <span className="alert">This feild is requied!</span>}
                         <input type="email"
                          placeholder="sabbir@" 
                          name="email"
                          value= {props.email}
                          onChange={props.updateInfo} 

                          />
                    </label>

                    <label>
                        Phone Number  
                        {!props.phoneNumber && <span className="alert">This feild is requied!</span>}
                         <input type="number" 
                         placeholder="eg. +1 2345 67" 
                          name="phoneNumber"
                          value= {props.phoneNumber}
                          onChange={props.updateInfo} 

                         />
                    </label>

                </form>
                <div className="btn-container">
                    {/* <h4 
                    className="backBtn"
                    onClick={props.handleBack}
                    >Go Back</h4> */}
                    <button 
                    className="btn nextStep"
                    onClick={props.handleNext}
                    >Next Step</button>
                </div>
            </section>
    )
}