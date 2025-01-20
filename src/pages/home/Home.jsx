import {
	StyledExplore,
	StyledHome,
	StyledSubtitle,
	StyledText,
	StyledTitle
} from './home.styles';

const Home = () => {
	return (
		<>
			<StyledHome>
				<div>
					<StyledSubtitle>SO, YOU WANT TO TRAVEL TO</StyledSubtitle>
					<StyledTitle>SPACE</StyledTitle>
					<StyledText>
						Let’s face it; if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</StyledText>
				</div>

				<StyledExplore>EXPLORE</StyledExplore>
			</StyledHome>
		</>
	);
};

export default Home;
