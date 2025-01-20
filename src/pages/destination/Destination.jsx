import { useState } from 'react';
import { SPACE_INFO } from '../../components/constants/info-web';
import {
	StyledButton,
	StyledContainer,
	StyledContentDatos,
	StyledImage,
	StyledLine,
	StyledName,
	StyledNumber,
	StyledNumberKm,
	StyledText,
	StyledTextKm,
	StyledTitle
} from './destination.styles';

const Destination = () => {
	const [active, setActive] = useState(0);
	const infoWeb = SPACE_INFO.destination;
	return (
		<StyledContainer>
			<StyledTitle>
				<StyledNumber>01</StyledNumber>
				{infoWeb.title}
			</StyledTitle>
			<>
				<picture>
					<source media='(min-width: 1024px)' srcSet={infoWeb.images[active]} />
					<source media='(min-width:768px)' srcSet={infoWeb.images[active]} />
					<source media='(min-width:360px)' srcSet={infoWeb.images[active]} />
					<StyledImage src={infoWeb.images[active]} />
				</picture>

				{/* <img src='/assets/destination/image-moon.png' alt='' /> */}
				<div>
					<StyledButton $active={active === 0} onClick={() => setActive(0)}>
						{infoWeb.section[0]}
					</StyledButton>
					<StyledButton $active={active === 1} onClick={() => setActive(1)}>
						{infoWeb.section[1]}
					</StyledButton>
					<StyledButton $active={active === 2} onClick={() => setActive(2)}>
						{infoWeb.section[2]}
					</StyledButton>
					<StyledButton $active={active === 3} onClick={() => setActive(3)}>
						{infoWeb.section[3]}
					</StyledButton>
				</div>

				<>
					<StyledName>{infoWeb.section[active]}</StyledName>
					<StyledText>{infoWeb.info[active]}</StyledText>
					<StyledLine></StyledLine>
					<StyledContentDatos>
						<StyledTextKm>{infoWeb.distance}</StyledTextKm>
						<StyledNumberKm>{infoWeb.distanceKm[active]}</StyledNumberKm>
					</StyledContentDatos>

					<StyledContentDatos>
						<StyledTextKm>{infoWeb.travel}</StyledTextKm>
						<StyledNumberKm>{infoWeb.travelDuration[active]}</StyledNumberKm>
					</StyledContentDatos>
				</>
			</>
		</StyledContainer>
	);
};

export default Destination;
