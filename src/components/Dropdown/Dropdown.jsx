import React, {useState} from 'react'

const Dropdown = ({value, content}) => {
	const [isOpen, setIsOpen] = useState(false)
	
	return (
		<div>
			<button>{value}</button>
			{
				typeof content !== 'object' ? (<p>{content}</p>) : (
					<ul>
						{
							content.map((item, index) => (<li key={index}>{item}</li>))
						}
					</ul>
				)
			}
		</div>
	)
}

export default Dropdown
