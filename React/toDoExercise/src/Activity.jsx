function Activity(activity){

    const deleteActivity=(e)=>{
        console.log(activity.nb)
        activity.delete(activity.nb);
    }

    return (
        <>
            <div className="activity">
                <p>{activity.activity}</p>
                <button className="deleteActivity" onClick={deleteActivity} >x</button>
            </div>
        </>
    );
}

export default Activity;