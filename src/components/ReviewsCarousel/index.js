// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {position: 0}

  moveLeft = () => {
    const {position} = this.state
    if (position > 0) {
      this.setState(prevState => ({position: prevState.position - 1}))
    }
  }

  moveRight = () => {
    const {position} = this.state
    if (position < 3) {
      this.setState(prevState => ({position: prevState.position + 1}))
    }
  }

  render() {
    const {position} = this.state
    const {reviewsList} = this.props
    const filteredList = reviewsList[position]
    return (
      <div className="bg-container">
        <h1 className="heading-1">Reviews</h1>
        <div className="reviews-container">
          <button
            data-testid="leftArrow"
            className="arrow-button"
            type="button"
            onClick={this.moveLeft}
          >
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrows"
            />
          </button>
          <div className="review-item">
            <img src={filteredList.imgUrl} alt={filteredList.username} />
            <p className="username">{filteredList.username}</p>
            <p className="company">{filteredList.companyName}</p>
            <p className="description">{filteredList.description}</p>
          </div>
          <button
            data-testid="rightArrow"
            className="arrow-button"
            type="button"
            onClick={this.moveRight}
          >
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrows"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
