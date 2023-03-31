import './index.css'
import {Component} from 'react'
import ThumbnailsList from '../ThumbnailsList'

class Gallery extends Component {
  state = {
    selectedImageId: 0,
  }
  updateSelectedImageId = id => {
    this.setState({selectedImageId: id})
  }

  renderSelectedImage = () => {
    const {photosData} = this.props
    const {selectedImageId} = this.state
    const {imageUrl, imageAltText} = photosData[selectedImageId]
    return <img src={imageUrl} className="image" alt={imageAltText} />
  }


  render() {
    const {photosData} = this.props
    const {selectedImageId} = this.state
    return (
      <div className="app-container">
        <div className="container">
          {this.renderSelectedImage()}
          <ThumbnailsList
            photosData={photosData}
            selectedImageId={selectedImageId}
            onClickUpdateId={this.updateSelectedImageId}
          />
        </div>
      </div>
    )
  }
}

export default Gallery