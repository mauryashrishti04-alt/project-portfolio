import ClassCard from "./component/ClassCard";

function App(){
    return(
    <div>
        <h1>Today skill Lab  project</h1>
        <div style={{dispaly:"flex"}}>
        <ClassCard Track="Mern Stack" 
        Trainer="Rajeev Sir"
         Time="10:50 to 12:30"
         Room={101}/>
                    <br />
           <ClassCard Track="Data Analysis" 
        Trainer="Rohit Sir"
         Time="10:50 to 12:30"
         Room={102}/>
                    <br />
           <ClassCard Track="Spring Boot" 
        Trainer="Lucky Sir"
         Time="10:50 to 12:30"
         Room={103}/>
         </div>
    </div>
    );
}
export default App;
