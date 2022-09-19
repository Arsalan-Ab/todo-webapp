
const InputBox = () => {

    const handleSubmit = (event) =>{
        event.preventDefault()
        const {name,value} = event.target[0]
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="addToDo">Add Todo:</label>
                <input id="addToDo" name="add"></input>
                <input type='submit' value='Add'></input>
            </form>
        </div>
    )
}

export default InputBox