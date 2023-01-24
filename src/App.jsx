import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ArchivePage from './pages/ArchivePage';
function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path='/Portfolio' element={<MainPage></MainPage>} />
					<Route
						path='/Portfolio/archive'
						element={<ArchivePage></ArchivePage>}
					/>
					<Route path='*' element={<div>Not Found | Page Missing</div>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
