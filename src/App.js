// import logo from './logo.svg';
import './App.css';
import React from 'react';
import pic1 from './images/daniil-komov-n0cmC-g02Xw-unsplash.jpg'
import pic2 from './images/jeremy-hynes-hKlu1MetPvE-unsplash.jpg'
import pic3 from './images/mel-poole-ytIrICiDShA-unsplash.jpg'
import pic4 from './images/RE4wyTK.jpg'



let i=0;


class App extends React.Component{
  


  constructor(){
    super();
    this.state={
      pictures:[pic1,pic2,pic3,pic4],

      cards:[
        {
          title:"CARD1",
          date:"2/2/2022",
          content:"The utilization of Cards has beyond what advantages than you can envision.  ",
          footer:"Thankyou !!",
          ima:pic1
        },
        {
          title:"CARD2",
          date:"2/2/2022",
          content:"This real segment on your site makes your general UI a simpler spot to explore and look through, by taking areas of your substance and turning them onto littler absorbable structures.",
          footer:"Heres why",
          ima:pic2
        },
        {
          title:"CARD3",
          date:"2/2/2022",
          content:"asdiadi Thiosdja jadiwm iqwmdipa mifmn jsngdu jwng ionwon",
          footer:"Read more..",
          ima:pic3
        },
        {
          title:"CARD4",
          date:"2/2/2022",
          content:"ryu ipasdfanfanfonaonoafdaonfoanonfdo",
          footer:"Read more...",
          ima:pic4
        }
      ]
    }
 
    
  }

  render(){

    return (
      <div className="App">

        {this.state.cards.map((item)=>{
          return(
            
            <div className="card">
              <div className="cardHeader">
                <img src={item.ima}/>
              </div>
    
              <div className="cardBody">
                {item.date}
                <br/>
                {item.content}
              </div>
              <div className="cardFooter">
                <button>{item.footer}</button>
            </div>
  
        </div>
         
          );
            
        })
        
        }

     

    </div>
        
       
    
    );

  }
 
}

export default App;
