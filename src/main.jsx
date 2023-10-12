import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './nav.jsx'
import './index.css'
import './nav.css'
import Center from './body.jsx'
import './body.css'
import  {Card} from'./assets/card.jsx'
import './assets/card.css'
import './main.css'
import img1 from './1.jpg'
import img2 from './2.jpeg'
import img3 from './4.jpeg'
import Footer from './assets/footer.jsx'
import './assets/footer.css'
import App from '../project-2/src/App.jsx'
import '../project-2/src/App.css'





ReactDOM.createRoot(document.getElementById('root')).render(
<div className='custom'>
   
      <div className='main-nav'><Nav/></div>
    <div><Center/></div>
   
<div className='mainbody'>
    <Card imgsrc={img1} model="IPHONE 11" oldprice="50,000" newprice="25,000"/>
    <Card imgsrc={img2} model="IPHONE 12" oldprice="60,000" newprice="35,000"/>

    <Card imgsrc={img3} model="IPHONE 7" oldprice="30,000" newprice="15,000"/>


</div> 
<div className='mainbody'>
    <Card imgsrc={img1} model="IPHONE 11" oldprice="50,000" newprice="25,000"/>
    <Card imgsrc={img2} model="IPHONE 12" oldprice="60,000" newprice="35,000"/>

    <Card imgsrc={img3} model="IPHONE 7" oldprice="30,000" newprice="15,000"/>


</div> 
<div className='mainbody'>
    <Card imgsrc={img1} model="IPHONE 11" oldprice="50,000" newprice="25,000"/>
    <Card imgsrc={img2} model="IPHONE 12" oldprice="60,000" newprice="35,000"/>

    <Card imgsrc={img3} model="IPHONE 7" oldprice="30,000" newprice="15,000"/>


</div> 
<div className='mainbody'>
    <Card imgsrc={img1} model="IPHONE 11" oldprice="50,000" newprice="25,000"/>
    <Card imgsrc={img2} model="IPHONE 12" oldprice="60,000" newprice="35,000"/>

    <Card imgsrc={img3} model="IPHONE 7" oldprice="30,000" newprice="15,000"/>


</div> 
<div className='mainbody'>
    <Card imgsrc={img1} model="IPHONE 11" oldprice="50,000" newprice="25,000"/>
    <Card imgsrc={img2} model="IPHONE 12" oldprice="60,000" newprice="35,000"/>

    <Card imgsrc={img3} model="IPHONE 7" oldprice="30,000" newprice="15,000"/>


</div> 
<div className='form'><App/></div> 
<div><Footer/></div>
</div>
    
    
  
  
)
