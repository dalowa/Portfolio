import './../styles/MainPage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PresentationS from '../components/PresentationS';
import AboutMeS from '../components/AboutMeS';

const MainPage = () => {
	return (
		<>
			<NavBar></NavBar>
			<PresentationS></PresentationS>
			<AboutMeS></AboutMeS>
			<Footer></Footer>
		</>
	);
};

export default MainPage;
