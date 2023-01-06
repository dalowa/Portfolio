import './../styles/WorkS.css';
import Project from './Project';
import OtherProject from './OtherProject';
import data from './../data/dataBestProjects.js';
import dataOP from './../data/OtherProjects.js';

const WorkS = () => {
	return (
		<>
			<section className='WorkS-container'>
				<h2 id='work' className='WorkS-h2'>
					Some Things I've Built
				</h2>
				<div className='Projects-container'>
					{data.map(object => (
						<Project
							key={object.Key}
							Category={object.Category}
							Title={object.Title}
							Description={object.Description}
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
						<a>view the archive</a>
					</p>
					<div className='OtherProjects-boxes'>
						{dataOP.map(objectS => (
							<OtherProject
								key={objectS.Title}
								LinkRepository={objectS.LinkRepository}
								LinkDeploy={objectS.LinkDeploy}
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
