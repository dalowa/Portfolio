import './../styles/WorkS.css';
import Project from './Project';
import OtherProject from './OtherProject';
import data from './../data/ProyectsData.js';
import { Link } from 'react-router-dom';

const WorkS = () => {
	const EspecialFilter = obj => obj.Especial == true;
	const EspecialFilter2 = obj => obj.Especial == false;
	return (
		<>
			<section className='WorkS-container'>
				<h2 id='work' className='WorkS-h2'>
					Some Things I've Built
				</h2>
				<div className='Projects-container'>
					{data.filter(EspecialFilter).map(object => (
						<Project
							key={object.Key}
							Category={object.Category}
							Title={object.Title}
							Description={object.DeepDescription}
							Technologies={object.Technologies}
							ImageLink={object.ImageLink}
							RepositoryLink={object.RepositoryLink}
							Class='ProjectLink'
							DeployLink={object.DeployLink}
						></Project>
					))}
				</div>
				<div className='OtherProjects-container'>
					<h2 className='OtherProjects-container-title'>
						0ther Noteworthy Projects
					</h2>
					<p className='OtherProjects-container-p'>
						<Link to='/Portfolio/archive'>view the archive</Link>
					</p>
					<div className='OtherProjects-boxes'>
						{data.filter(EspecialFilter2).map(objectS => (
							<OtherProject
								key={objectS.Title}
								RepositoryLink={objectS.RepositoryLink}
								DeployLink={objectS.DeployLink}
								Title={objectS.Title}
								Description={objectS.Description}
								Technologies={objectS.Technologies}
							></OtherProject>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default WorkS;
