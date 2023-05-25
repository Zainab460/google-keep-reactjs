import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
        <div className="side-icon active-item side-active-item">
          <span>
            <i className="material-icons-outlined active">lightbulb</i>
          </span>
          <span className="words"> Notes</span>
        </div>

        <div className="side-icon">
          <span>
            <i className="material-icons-outlined hover">notifications</i>
          </span>
          <span className="words">Reminder</span>
        </div>

        <div className="side-icon">
          <span>
            <i className="material-icons-outlined hover">edit</i>
          </span>
          <span className="words">Edit labels</span>
        </div>

        <div className="side-icon">
          <span>
            <i className="material-icons-outlined hover">archive</i>
          </span>
          <span className="words">Archive</span>
        </div>

        <div className="side-icon">
          <span>
            <i className="material-icons-outlined hover">delete</i>
          </span>
          <span className="words">Trash</span>
        </div>
      </div>
    )
}

export default Sidebar