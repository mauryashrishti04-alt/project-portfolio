import ClassCard from "./component/ClassCard";

function App(){
    return(
    <div>
        <h1>Today skill Lab  project</h1>
        <ClassCard Track="Mern Stack"
        Trainer="Rajeev Sir"
        Time="10:50 to 12:30"
        Room={101}/>
    </div>
    );
}
export default App;
