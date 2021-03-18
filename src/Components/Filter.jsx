const Filter = ({ setFilter, filterBy, options }) => {
    return (
        <form onChange={(e) => setFilter(e.target.value)}>
          <label htmlFor={filterBy} className="sr-only">Filter by {filterBy}: </label>
          <select name={filterBy} id={filterBy} defaultValue="disabled">
            <option value="disabled" disabled>Filter by {filterBy}</option>
            <option value="">None</option>
            {
              options.map((option, index) => {
                return (
                  <option key={index} value={option}>{option}</option>
                )
              })
            }
          </select>
        </form>
    )
}

export default Filter
