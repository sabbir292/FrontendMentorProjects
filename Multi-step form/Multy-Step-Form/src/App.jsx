import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Info from "./Info";
import Sidebar from "./Sidebar";
import Plans from "./Plans";
import Addons from "./Addons";
import Checkout from "./Checkout";

export default function App(){
   const [navigation, setNavigation] = React.useState({
      yourInfo: true,
      selectPlan: false,
      addOns: false,
      summary: false,
   })

   const [info, setInfo]=React.useState({
      name:'',
      email:'',
      phoneNumber: null,
   })

   function handleNavigation(event){
      // console.log(event.target.className)
      if(event.target.classList.contains('infoPage')){
         setNavigation(prev=>({
            ...prev,
            yourInfo: true,
            selectPlan: false,
            addOns:false,
            summary:false,
         }))
      }
      else if(event.target.classList.contains('planPage')){
 
         setNavigation(prev=>({
            ...prev,
            yourInfo: false,
            selectPlan: true,
            addOns:false,
            summary:false,
         }))
      }
      else if(event.target.classList.contains('addonPage')){
         setNavigation(prev=>({
            ...prev,
            yourInfo: false,
            selectPlan: false,
            addOns:true,
            summary:false,
         }))
      }
      else if(event.target.classList.contains('summaryPage')){
         setNavigation(prev=>({
            ...prev,
            yourInfo: false,
            selectPlan: false,
            addOns:false,
            summary:true,
         }))
      }
   }

   function updateInfo(e){
      // console.log(e.target.value)
      const {name,value}= e.target
      setInfo(prev=>({
         ...prev,
         [name]: value
      }))
   }

// function handleBack(){
//    console.log('back')
// }
function handleNext(){
   if(!info.email || !info.name || !info.phoneNumber){
      alert("this feild is requied")
   }else{console.log("next")}
// if(!info.name){
//       setAlert(prev=>({
//          ...alert,
//          nameAlert:true,
//          emailAlert:false,
//          phoneAlert:false,
//       }))
//    }else if(!info.email){
//       setAlert(prev=>({
//          ...alert,
//          emailAlert:true,
//          nameAlert:false,
//          phoneAlert:false,

//       }))
//    }else if(!info.phoneNumber){
//       setAlert(prev=>({
//          ...alert,
//          phoneAlert:true,
//          nameAlert:false,
//          emailAlert:false
         
//       }))
//    }else{
//       setAlert(prev=>({
//          ...alert,
//          phoneAlert:false,
//          nameAlert:false,
//          emailAlert:false
         
//       }))
//    }
}
   // console.log(navigation)
   console.log(info)
   console.log(alert)

    return(
       <main className="hero">
          <section className="main-container">
           <Sidebar 
               handleNavigation = {handleNavigation}
               info = {navigation.yourInfo}
               plans = {navigation.selectPlan}
               addons = {navigation.addOns}
               summary = {navigation.summary}

            />
            {navigation.yourInfo && 
            <Info 
               info = {navigation.yourInfo}
               name = {info.name}              
               email = {info.email}
               pnoneNumber = {info.phoneNumber}
               updateInfo = {updateInfo}
               // handleBack = {handleBack}
               handleNext = {handleNext}
               // alert = {alert}
            />}

            {navigation.selectPlan && 
            <Plans 
               plans = {navigation.selectPlan}
            />}
            {navigation.addOns && 
            <Addons 
               addons = {navigation.addOns}
            />}
            {navigation.summary && 
            <Checkout 
               summary = {navigation.summary}
            />}
          </section>
       </main>
    )
}