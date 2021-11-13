import "./student-add-form.css";

const StudentAddForm = () => {
    return (
        <div className="app-add-form">
            <h3>Добавить нового уеника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Как его зовут?" />
                
                <input type="time"
                    className="form-control new-post-label"
                 />

                <select size="1" name="week-day">
                    <option value="t1" defaultValue>Понедельник</option>
                    <option value="t2">Вторник</option>
                    <option value="t3">Среда</option>
                    <option value="t4">Четверг</option>
                    <option value="t4">Пятница</option>
                    <option value="t4">Суббота</option>
                    <option value="t4">Воскресенье</option>
                </select>

                <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
            </form>
        </div>
    )
}

export default StudentAddForm;