import {useState} from 'react'
import { Button,Stack } from '@mui/material';
import './App.css'
import TextField from '@mui/material/TextField';

function App() {
const [amount,setAmount]=useState("")  
const [rate,setRate]=useState("")
const [year,setYear]=useState("")
const [interest,setInterest]=useState(0)

const[isInvalidPriciple,setIsInvalidPriciple]=useState(false)
const[isInvalidRate,setIsInvalidRate]=useState(false)
const[isInvalidYear,setIsInvalidYear]=useState(false)

const validateInput=(a)=>{
console.log(a);
console.log(amount,rate,year);

const validReggexp=/^[0-9]*.?[0-9]+$/

const{name,value}=a.target
console.log(name,value);

if (name=='principle') {
  setAmount(value)
}
else if(name=='rate'){
  setRate(value)
}
else{
  setYear(value)
}

 if (validReggexp.test(value)|| value=="") {
  if (name=='principle') {
    setIsInvalidPriciple(false)
  }
  else if(name=='rate'){
    setIsInvalidRate(false)
  }
  else{
setIsInvalidYear(false)
  }
 }
 else{
  if(name=='principle'){
    setIsInvalidPriciple(true)
  }
  else if(name=='rate'){
    setIsInvalidRate(true)
  }
  else{
    setIsInvalidYear(true)
  }
 }
}

const handleCalculate=(e)=>{
  e.preventDefault()

  console.log("calculate simple interest");
  if (amount&& rate && year) {
    setInterest((amount*rate*year)/100)
    
  }
  else{
    alert("please enter the field completely")
  }
}

const handleReset=()=>{
  setInterest(0)
  setAmount('')
  setRate('')
  setYear('')
  isInvalidPriciple(false)
  isInvalidRate(false)
  isInvalidYear(false)
}
  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{height:'100vh'}}>
      <div className='w-50 rounded-4 shadow-lg p-3 mb-5 . rounded' style={{backgroundColor:'lawngreen'}}>
        <h1 className='p-2'>Simple Interest Calculator</h1>
        <h5 className='p-2'>Calculate Your Simple Interest Easily</h5>
        <div className='d-flex justify-content-center p-5'>
        <div className='bg-secondary text-center w-75' style={{height:'200px',alignContent:'center'}}>
          <h3 className='text-light'><i class="fa-solid fa-indian-rupee-sign"></i> {interest}</h3>
          <h3 className='text-light'>Total Simple Interest</h3>
        </div>
        </div>
        <form className='bg-light p-4'>
        <TextField onChange={(a)=>validateInput(a)} value={amount||""} className='w-100' name='principle' id="principal_amount" label="Amount" variant="outlined" />
        {isInvalidPriciple &&
        <div className='fw-bold text-danger'> Invalid Principle Amount</div>
        }
        <TextField onChange={validateInput} value={rate||""} className='w-100' name='rate' id="interest_rate" label="Rate" variant="outlined" />
        {isInvalidRate &&
        <div className='fw-bold text-danger'> Invalid Interest Rate</div>
        }
        <TextField onChange={validateInput} value={year||""} className='w-100' name='year' id="timeperiod" label="Year" variant="outlined" />
        {isInvalidYear &&
        <div className='fw-bold text-danger'> Invalid Year</div>
        }
        <div className='pt-4'><Stack direction="row" spacing={2}>
          <Button onClick={handleCalculate} variant="contained" type='button'>CALCULATE</Button>
          <Button onClick={handleReset}  variant="outlined">RESET</Button>
   </Stack></div>
        </form>
      

      </div>
      </div>
    </>
  )
}

export default App
