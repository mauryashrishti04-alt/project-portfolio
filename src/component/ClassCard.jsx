const ClassCard=(props)=>{
    return(
        <div className="class-card">
            <h2>Track:{props.track}</h2>
            <p>Trainer:{props.Trainer}</p>
            <p>Time:{props.Time}</p>
            <p>Room:{props.Room}</p>
        </div>
    );
}
export default ClassCard;