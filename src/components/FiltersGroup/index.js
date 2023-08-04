import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    changeCategory,
    ratingsList,
    changeRating,
    onClearingFilt,
  } = props
  //   console.log(ratingsList)
  const onClickCategory = event => {
    // console.log(event.target.id)
    changeCategory(event.target.id)
  }
  const onClickRating = event => {
    const item = event.target.alt.split(' ')
    console.log(item[1])
    changeRating(item[1])
  }
  const clearFiltering = () => {
    onClearingFilt()
  }
  return (
    <div className="filters-group-container">
      <h1>Category</h1>
      <ul className="cate_container">
        {categoryOptions.map(each => (
          <li key={each.categoryId}>
            <button
              onClick={onClickCategory}
              id={each.categoryId}
              type="button"
              className="category_button"
            >
              {each.name}
            </button>
          </li>
        ))}
      </ul>
      <h1>Rating</h1>
      <ul className="cate_container">
        {ratingsList.map(each => (
          <li key={each.ratingId}>
            <button
              onClick={onClickRating}
              type="button"
              className="category_button"
            >
              <img
                className="image_rating"
                src={each.imageUrl}
                alt={`rating ${each.ratingId}`}
              />{' '}
              {'   &up'}
            </button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={clearFiltering} className="clear_filter">
        Clear Filters
      </button>
      {/* Replace this element with your code */}
    </div>
  )
}

export default FiltersGroup
