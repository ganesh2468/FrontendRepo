import React,{useState} from 'react';
//import sample from './videos/fires.mp4';

const App = () => {
const[temp,setTemp]=useState(20);
  const[tempColour,setTempcolour]=useState("normal");
  const[typeTemp,setTypetemp]=useState("°C");
  function converter(){
	const degree=typeTemp;
	if(degree==="°C"){
		const newTemp=Math.round(temp*(9/5)+32);
		setTypetemp("°F");
		setTemp(newTemp);
	}
	if(degree==="°F"){
		const newTemp=Math.round((temp-32)*(5/9));
		setTypetemp("°C");
		setTemp(newTemp);
	}
  }
  function increaseCounter() {
	const newTemp=temp+1;
	
	if(newTemp>30 && typeTemp==="°C"){
		setTempcolour('redhot');
	}
	if(newTemp>28 && newTemp<=30 && typeTemp==="°C"){
		setTempcolour('hot');
	}
	if(newTemp>15 && newTemp<28 && typeTemp==="°C"){
		setTempcolour('normal');
	}
	if(newTemp>10 && newTemp<15 && typeTemp==="°C"){
		setTempcolour('cold');
	}
	if(newTemp<10 && newTemp>5 && typeTemp==="°C"){
		setTempcolour('colder');
	}
	if(newTemp<5 && typeTemp==="°C"){
		setTempcolour('coldest');
	}
	
	if(newTemp>86 && typeTemp==="°F"){
		setTempcolour('redhot');
	}
	if(newTemp>82.4 && newTemp<=86 && typeTemp==="°F"){
		setTempcolour('hot');
	}
	if(newTemp>59 && newTemp<82.4 && typeTemp==="°F"){
		setTempcolour('normal');
	}
	if(newTemp>50 && newTemp<59 && typeTemp==="°F"){
		setTempcolour('cold');
	}
	if(newTemp<50 && newTemp>41 && typeTemp==="°F"){
		setTempcolour('colder');
	}
	if(newTemp<41 && typeTemp==="°F"){
		setTempcolour('coldest');
	}
	setTemp(newTemp);
  }
  function decreaseCounter() {
	const newTemp=temp-1;
	if(newTemp>30 && typeTemp==="°C"){
		setTempcolour('redhot');
	}
	if(newTemp>28 && newTemp<=30 && typeTemp==="°C"){
		setTempcolour('hot');
	}
	if(newTemp>15 && newTemp<28 && typeTemp==="°C"){
		setTempcolour('normal');
	}
	if(newTemp>10 && newTemp<15 && typeTemp==="°C"){
		setTempcolour('cold');
	}
	if(newTemp<10 && newTemp>5 && typeTemp==="°C"){
		setTempcolour('colder');
	}
	if(newTemp<5 && typeTemp==="°C"){
		setTempcolour('coldest');
	}
	
	if(newTemp>86 && typeTemp==="°F"){
		setTempcolour('redhot');
	}
	if(newTemp>82.4 && newTemp<=86 && typeTemp==="°F"){
		setTempcolour('hot');
	}
	if(newTemp>59 && newTemp<82.4 && typeTemp==="°F"){
		setTempcolour('normal');
	}
	if(newTemp>50 && newTemp<59 && typeTemp==="°F"){
		setTempcolour('cold');
	}
	if(newTemp<50 && newTemp>41 && typeTemp==="°F"){
		setTempcolour('colder');
	}
	if(newTemp<41 && typeTemp==="°F"){
		setTempcolour('coldest');
	}
	setTemp(newTemp);
 }
	return (
    <>
		<div className='app-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display ${tempColour}`}>
          {temp}{typeTemp}</div>
			</div>
			<div className='button-container'>
				<button onClick={increaseCounter}>+</button>
				<button onClick={decreaseCounter}>-</button>
				<button onClick={converter}>{typeTemp}</button>
				{/* <video className='videoTag' autoPlay loop muted>
					<source src={sample} type='video/mp4' />
				</video> */}
			</div>
		</div> 
    </> 
	);
};

export default App;

//28-30
//below 10-15 below 5
