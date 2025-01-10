import { useState } from 'react';
import { SPACE_INFO } from '../../components/constants/info-web';
import { StyledNumber } from './destination.styles';

const Destination = () => {
	const [active, setActive] = useState(0);
	const infoWeb = SPACE_INFO.destination;
	return (
		<>
			<>
				<StyledNumber>01</StyledNumber>
				{infoWeb.title}
			</>
			<>
				<picture>
					<source
						media='(min-width: 1024px)'
						srcSet={infoWeb.images.desktop[active]}
					/>
					<source
						media='(min-width:768px )'
						srcSet={infoWeb.images.tablet[active]}
					/>
					<source
						media='(min-width:360px )'
						srcSet={infoWeb.images.mobile[active]}
					/>
					<img src={infoWeb.images.mobile[active]}></img>
				</picture>

				{/* <img src='/assets/destination/image-moon.png' alt='' /> */}

				<button $active={active === 0} onClick={() => setActive(0)}>
					{infoWeb.section[0]}
				</button>
				<button $active={active === 1} onClick={() => setActive(1)}>
					{infoWeb.section[1]}
				</button>
				<button $active={active === 2} onClick={() => setActive(2)}>
					{infoWeb.section[2]}
				</button>
				<button $active={active === 3} onClick={() => setActive(3)}>
					{infoWeb.section[3]}
				</button>
				<>
					<h1>{infoWeb.section[active]}</h1>
					<p>{infoWeb.info[active]}</p>
					<h2>{infoWeb.distance[active]}</h2>
					<h1>{infoWeb.distanceKm[active]}</h1>
					<h2>{infoWeb.travel[active]}</h2>
					<h1>{infoWeb.travelDuration[active]}</h1>
				</>
			</>
		</>
	);
};

export default Destination;
