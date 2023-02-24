import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import Info from "./Info";
import Sidebar from "./Sidebar";
import Plans from "./Plans";
import Addons from "./Addons";
import Checkout from "./Checkout";
import Confirmation from "./Confirmation";

export default function App(){
   // *********states**********************
   const [navigation, setNavigation] = React.useState({
      yourInfo: true,
      selectPlan: false,
      addOns: false,
      summary: false,
      confirmation: false,
   })

   const [info, setInfo]=React.useState({
      name:'',
      email:'',
      number: '',
   })

   const [togglePlan,setTogglePlan] = React.useState({
      monthlyplan:true,
      yearlyplan:false,
      arcadeMonthly: '$9/mo',
      arcadeYearly: '$90/mo',
      advanceMonthly: '$15/mo',
      advanceYearly: '$120/mo',
      proMonthly: '$20/mo',
      proYearly: '$150/mo',
      arcade : false,
      advance:false,
      pro:false,
   })

   const [addons, setAddOns] = React.useState({
      onlineService: false,
      extraStorage: false,
      customizeProfile:false,
      onlineServiceMonthlyPrice : '$1/mo',
      extraStorageMonthlyPrice : '$1/mo',
      customizeProfileMonthlyPrice : '$1/mo',
      onlineServiceYearlyPrice: '$10/yr',
      extraStorageYearlyPrice: '$20/yr',
      customizeProfileYearlyPrice: '$20/yr',

   })

// *********states**********************

// *********Functions**********************

   function handleNavigation(event){
      // console.log(event.target.className)
      if(event.target.classList.contains('infoPage')){
         setNavigation(prev=>({
            ...prev,
            yourInfo: true,
            selectPlan: false,
            addOns:false,
            summary:false,
            confirmation:false
         }))
      }
      else if(event.target.classList.contains('planPage')){
 
         setNavigation(prev=>({
            ...prev,
            yourInfo: false,
            selectPlan: true,
            addOns:false,
            summary:false,
            confirmation:false,
         }))
      }
      else if(event.target.classList.contains('addonPage')){
         setNavigation(prev=>({
            ...prev,
            yourInfo: false,
            selectPlan: false,
            addOns:true,
            summary:false,
            confirmation:false
         }))
      }
      else if(event.target.classList.contains('summaryPage')){
         setNavigation(prev=>({
            ...prev,
            yourInfo: false,
            selectPlan: false,
            addOns:false,
            summary:true,
            confirmation:false
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


function handleNext(){
      if(info.name && info.email && info.number){
         setNavigation(prev=>({
            ...navigation,
            yourInfo: false,
            selectPlan:true,
            addOns: false,
            summary:false
      }))
   }

   if(navigation.selectPlan){
      setNavigation(prev=>({
         ...prev,
         addOns: true,
         selectPlan: false,
         yourInfo: false,
         summary: false
      }))
   }
   if(navigation.addOns){
      setNavigation(prev=>({
         ...prev,
         addOns: false,
         summary: true,
         yourInfo: false,
         selectPlan: false,
      }))
   }

   }

function handleBack(){
   if(!navigation.yourInfo && navigation.selectPlan){
      setNavigation(prev=>({
         ...prev,
         yourInfo: true,
         selectPlan: false
      }))
    }
    if(navigation.addOns){
      setNavigation(prev=>({
         ...prev,
         selectPlan: true,
         addOns : false,
      }))
    }
    if(navigation.summary){
      setNavigation(prev=>({
         ...prev,
         summary:false,
         addOns : true,
      }))
    }
   }

   function changePlan(){
      if(navigation.summary){
         setNavigation(prev=>({
            ...prev,
            yourInfo:false,
            summary: false,
            addOns: false,
            selectPlan: true,
         }))
      }
   }

   function chooseTenurity(e){
      if(e.target.checked){
         setTogglePlan(prev=>({
            ...prev,
            yearlyplan : true,
            monthlyplan: false,
         }))
      }else{
         setTogglePlan(prev=>({
            ...prev,
            yearlyplan : false,
            monthlyplan: true,
         }))
      }
   }

function choosePlan(e){
   if(e.target.classList.contains('arcade')){
      setTogglePlan(prev=>({
         ...prev,
         arcade: !togglePlan.arcade,
         advance:false,
         pro: false,
      }))
   }else if(e.target.classList.contains('advance')){
      setTogglePlan(prev=>({
         ...prev,
         arcade: false,
         advance: !togglePlan.advance,
         pro: false,
      }))
   }else if(e.target.classList.contains('pro')){
      setTogglePlan(prev=>({
         ...prev,
         arcade: false,
         advance:false,
         pro: !togglePlan.pro,
      }))
   }
}

function handleAddons(e){
   const {name,checked} = e.target
   setAddOns(prev=>({
      ...prev,
      [name]: checked
   }))


}

function PlanPrice(e){
   if(togglePlan.yearlyplan){
      if(togglePlan.arcade){
         return 90
      }else if(togglePlan.advance){
         return 120
      }else{
         return 150
      }
   }else{
      if(togglePlan.arcade){
         return 9
      }else if(togglePlan.advance){
         return 15
      }else{
         return 20
      }
   }
}
function addOnPrice(e){
   if(togglePlan.yearlyplan){
      if(addons.onlineService && addons.extraStorage && addons.customizeProfile){
         return 10+20+20
      }else if(addons.onlineService && addons.extraStorage){
         return 10+20
      }else if(addons.onlineService && addons.customizeProfile){
         return 10+20
      }else if(addons.customizeProfile && addons.extraStorage){
         return 20+20
      }
      else if(addons.onlineService){
         return 10
      }else if(addons.extraStorage){
         return 20
      }else if(addons.customizeProfile){
         return 20
      }else{
         return 0
      }
   }else{
      if(addons.onlineService && addons.extraStorage && addons.customizeProfile){
         return 1+1+1
      }else if(addons.onlineService && addons.extraStorage){
         return 1+1
      }else if(addons.onlineService && addons.customizeProfile){
         return 1+1
      }else if(addons.customizeProfile && addons.extraStorage){
         return 1+1
      }
      else if(addons.onlineService){
         return 1
      }else if(addons.extraStorage){
         return 1
      }else if(addons.customizeProfile){
         return 1
      }else{
         return 0
      }
}
}

function finalAmount(){
   return (addOnPrice()+ PlanPrice())
}

function handleConfirm(){
   setNavigation(prev=>({
      ...prev,
      summary: false,
      confirmation: true,
   }))
}

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
               number = {info.number}
               updateInfo = {updateInfo}
               handleNext = {handleNext}
            />}

            {navigation.selectPlan && 
            <Plans 
               plans = {navigation.selectPlan}
               togglePlan = {togglePlan}
               choosePlan = {choosePlan}
               chooseTenurity = {chooseTenurity}
               goBack = {handleBack}
               handleNext = {handleNext}
            />}
            {navigation.addOns && 
            <Addons 
               // addons = {navigation.addOns}
               addOns = {addons}
               handleAddons = {handleAddons}
               onlineService = {addons.onlineService}
               extraStorage = {addons.extraStorage}
               customizeProfile = {addons.customizeProfile}
               handleBack = {handleBack}
               handleNext = {handleNext}
               togglePlan = {togglePlan}

            />}
            {navigation.summary && 
            <Checkout 
               summary = {navigation.summary}
               togglePlan = {togglePlan}
               addOns = {addons}
               navigation = {navigation}
               confirm = {handleConfirm}
               handleBack = {handleBack}
               finalAmount = {finalAmount}
               changePlan = {changePlan}
            />}
            {navigation.confirmation &&
               <Confirmation />
            }
          </section>
       </main>
    )
}