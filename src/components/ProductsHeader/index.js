import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const onChangeSortby = event => {
    const {changeSortby} = props
    changeSortby(event.target.value)
  }

  const {sortbyOptions, activeOptionId} = props

  const onChangeinputbox = event => {
    const {changeInput} = props
    if (event.key === 'Enter') {
      //   console.log(event)
      //   console.log(event.target.value)
      changeInput(event.target.value)
    }
  }

  return (
    <div className="products-header">
      <input
        // value={activesearchInput}
        type="search"
        onKeyDown={onChangeinputbox}
        className="input_box"
        placeholder="Search"
      />
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
        <BsFilterRight className="sort-by-icon" />
        <p className="sort-by">Sort by</p>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.optionId}
              value={eachOption.optionId}
              className="select-option"
            >
              {eachOption.displayText}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ProductsHeader
