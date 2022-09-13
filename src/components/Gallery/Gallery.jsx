import GalleryItem from '../GalleryItem/GalleryItem'

const Gallery = ({lodgings}) => {
	
	return (
		<div className={'gallery-item__container'}>
			<ul className={'gallery-item__repeater'}>
				{
					lodgings.map((flat) => (
						<GalleryItem key={flat.id} flat={flat}/>
					))
				}
			</ul>
		</div>
	)
}

export default Gallery
