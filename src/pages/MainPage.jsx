import './../styles/MainPage.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import PresentationS from '../components/PresentationS';

const MainPage = () => {
	return (
		<>
			<NavBar></NavBar>
			<PresentationS></PresentationS>
			<Footer></Footer>
		</>
	);
};

export default MainPage;
