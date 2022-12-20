import './../styles/WorkS.css';
import Project from './Project';
import data from './../data/dataBestProjects.js';
import dataOP from './../data/OtherProjects.js';

const WorkS = () => {
	return (
		<>
			<section className='WorkS-container'>
				<h2 className='WorkS-h2'>Some Things I've Built</h2>
				<div className='Projects-container'>
					{data.map(object => (
						<Project
							key={object.Title}
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
					<h2>0ther Noteworthy Projects</h2>
					<p>
						<a>view the archive</a>
					</p>
					<div>{dataOP.map()}</div>
				</div>
			</section>
		</>
	);
};

export default WorkS;
