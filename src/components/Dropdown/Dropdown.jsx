import React, {useState} from 'react'

const Dropdown = ({value, content}) => {
	const [isOpen, setIsOpen] = useState(false)
	const onToggle = () => setIsOpen(!isOpen)
	return (
		<div>
			<button className={'toggle'} onClick={onToggle}>
				<div className={'toggle__btn'}>
					<p>{value}</p>
					<img className={isOpen ? 'toggle__arrow--up' : 'toggle__arrow--down'}
						 src={'../arrowDown.svg'} alt={'arrow'}/>
				</div>
			</button>
			{
				typeof content !== 'object' ?
					(
						<p className={isOpen ? 'toggle__container--show' : 'toggle__container--hide'}>
							{content}
						</p>
					) : (
						<ul className={isOpen ? 'toggle__container--show' : 'toggle__container--hide'}>
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
