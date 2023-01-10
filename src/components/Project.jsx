import GitHubICon from './Icons/GitHubIcon';
import DeployIcon from './Icons/DeployIcon';

const Project = ({
	Category,
	Title,
	Description,
	Technologies,
	ImageLink,
	RepositoryLink,
	DeployLink,
	Class,
}) => {
	return (
		<>
			<div className='project-container'>
				<div className='project'>
					<div className='project-content'>
						<div className='project-label'>{Category}</div>
						<h4 className='project-title'>
							<a>{Title}</a>
						</h4>
						<div className='project-details'>
							<p className='project-description'>{Description}</p>
							<ul>
								{Technologies.map(Tech => (
									<li>{Tech}</li>
								))}
							</ul>
							<ul className='projects-icons'>
								<li>
									<GitHubICon Link={RepositoryLink} Class={Class}></GitHubICon>
								</li>
								<li>
									<DeployIcon
										Link={DeployLink}
										Class='ProjectLink'
									></DeployIcon>
								</li>
							</ul>
						</div>
					</div>

					<div className='project-img'>
						<img src={ImageLink} alt={Title} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Project;
