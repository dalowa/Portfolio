import './../styles/MainPage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PresentationS from '../components/PresentationS';
import AboutMeS from '../components/AboutMeS';
import ExperienceS from '../components/ExperienceS';
import WorkS from '../components/WorkS';
import ContactMeS from '../components/ContactMeS';

const MainPage = () => {
	return (
		<>
			<NavBar></NavBar>
			<PresentationS></PresentationS>
			<AboutMeS></AboutMeS>
			<ExperienceS></ExperienceS>
			<WorkS></WorkS>
			<ContactMeS></ContactMeS>
			<Footer></Footer>
		</>
	);
};

export default MainPage;
