function Field({form,messages,colors,changeField}){

    const handleChange=(e)=>{
        changeField(e.target.name,e.target.value);
    }

    return (<>
        <div className="fields">
            <label htmlFor="firstName">First Name</label>
            <input onChange={handleChange} type="text" name="firstName" id="firstName" value={form.firstName} style={{color:colors.firstName}}/>
            <p style={{color:colors.firstName}}>{messages.firstName}</p>

            <label htmlFor="name">Name</label>
            <input onChange={handleChange} type="text" name="name" id="name" value={form.name} style={{color:colors.name}}/>
            <p style={{color:colors.name}}>{messages.name}</p>

            <label htmlFor="age">Age</label>
            <input onChange={handleChange} type="number" name="age" id="age" value={form.age} style={{color:colors.age}}/>
            <p style={{color:colors.age}}>{messages.age}</p>

            <label htmlFor="email">Email</label>
            <input onChange={handleChange} type="email" name="email" id="email" value={form.email} style={{color:colors.email}}/>
            <p style={{color:colors.email}}>{messages.email}</p>

            <label htmlFor="phone">Phone number</label>
            <input onChange={handleChange} type="tel" name="phone" id="phone" value={form.phone} style={{color:colors.phone}}/>
            <p style={{color:colors.phone}}>{messages.phone}</p>

            <label htmlFor="password">Password</label>
            <input onChange={handleChange} type="password" name="password" id="password"  value={form.password} style={{color:colors.password}}/>
            <p style={{color:colors.password}}>{messages.password}</p>

            <label htmlFor="rPassword">Repeat password</label>
            <input onChange={handleChange} type="password" name="rPassword" id="rPassword" value={form.rPassword} style={{color:colors.rPassword}}/>
            <p style={{color:colors.rPassword}}>{messages.rPassword}</p>
        </div>
    </>);
}


export default Field;