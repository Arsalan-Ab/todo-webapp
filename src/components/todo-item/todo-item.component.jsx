const TodoItem = ({ todo }) => {
    const { title } = todo
    return (
        <div className="row justify-content-between border">
            <div className="col-11">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input col-5" />
                    <label class="form-check-label" for="check1">{title}</label>
                </div>
            </div>
                <button type="button" className="btn-close btn-close-danger justify-self-end"></button>
        </div>
    )
}


export default TodoItem