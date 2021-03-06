import React from 'react';
import ReactDOM from 'react-dom';
 
const ElementMass=[
    {id:1,value:1},
    {id:2,value:2},
    {id:3,value:3}, 
    {id:4,value:4},
    {id:5,value:5},
    {id:6,value:6},
    {id:7,value:7},
    {id:8,value:8},
    {id:9,value:9},
    {id:10,value:10},
    {id:11,value:11},
    {id:12,value:12},
    {id:13,value:13},
    {id:14,value:14},
    {id:15,value:15},
    {id:16,value:null}];


let Field = React.createClass({
    
    
    getInitialState: function() {
     return {
        localList: ElementMass
     };
    },
    
            
    handleRefresh: function(){
      let numMass=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
          copylocalList=this.state.localList.map(function(elem){return elem}),
          newlocalList=[],
          numberElem=0;
         
          
          while(numMass.length>0)
          {
             numberElem=parseInt(Math.random() * numMass.length);             
             newlocalList.push(copylocalList[numMass[numberElem]]);            
             delete numMass[numberElem];
             numMass=numMass.filter(function(){return true});
          }
          
          
          this.setState({
              localList:newlocalList
          });
          
    },
    
    handleClick: function(event) {    
    
      let numMass=[],
          shiftedMass=this.state.localList.map(function(elem){return elem}),
          changeElem=0,
          target=+(event.target.textContent),
          rigthCollection=true;
    
      this.state.localList.map(function(elem){
         numMass.push(elem.value);
      }); 
      let nullIndex=numMass.indexOf(null),
          targetIndex=numMass.indexOf(target);
    
    
      if ((targetIndex===nullIndex-1)&(nullIndex-1>=0)&((targetIndex)%4!==3)){
         
         changeElem=shiftedMass[targetIndex];
         shiftedMass[targetIndex]=shiftedMass[nullIndex];
         shiftedMass[nullIndex]=changeElem;

         
         
         
         
         
      }
      if ((targetIndex===nullIndex+1)&(nullIndex+1<=numMass.length)&((targetIndex)%4!==0)){
         changeElem=shiftedMass[targetIndex];
         shiftedMass[targetIndex]=shiftedMass[nullIndex];
         shiftedMass[nullIndex]=changeElem;         
          
          
               }
      if ((targetIndex===nullIndex-4)&(nullIndex-4>=0)){
         changeElem=shiftedMass[targetIndex];
         shiftedMass[targetIndex]=shiftedMass[nullIndex];
         shiftedMass[nullIndex]=changeElem;        
         
        
      }
      if ((targetIndex===nullIndex+4)&(nullIndex+4<=numMass.length)){
         changeElem=shiftedMass[targetIndex];
         shiftedMass[targetIndex]=shiftedMass[nullIndex];
         shiftedMass[nullIndex]=changeElem;

         

      }

      shiftedMass.map(function(elem,i,arr){
        if(arr[i].id != ElementMass[i].id){
          rigthCollection=false;
        }
      });

      if(rigthCollection){
        console.log('Congradulations!!');
      }

      this.setState({
            localList:shiftedMass
         });
   
    
    
    
    },
    
    render:function(){       
        
        return (
          <div >
            <div className="gamebox" onClick={this.handleClick}>
            {
              this.state.localList.map(function(elem,i,arr){
                if(elem.value){
                    return <div className="cell" key={elem.id}>{elem.value}</div>              
                }
                else{
                    return <div className="emptyCell" key={elem.id}></div> 
                }
              })
            }
            </div>
            <button onClick={this.handleRefresh} className="refreshButton" title="Click to radomize blocks">Random</button>
          </div>
        );
    }
});

    ReactDOM.render(
            <Field />,
            document.getElementById("content")
        );
