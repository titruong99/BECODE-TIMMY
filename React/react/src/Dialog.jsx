function Dialog({form,showing}){
    const data=Object.entries(form).map(d=><li>{d[1]}</li>);
    return(<div style={{display:showing}}>
            <ul>
                {data}
            </ul>
    </div>

        );
}

export default Dialog;