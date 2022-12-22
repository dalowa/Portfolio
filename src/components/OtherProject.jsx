import './../styles/OtherProject.css';
import DeployIcon from './Icons/DeployIcon';
import GitHubIcon from './Icons/GitHubIcon';

const OtherProject = ({
	LinkRepository,
	LinkDeploy,
	Title,
	Description,
	Technologies,
}) => {
	return (
		<>
			<div className='OtherProjectBox'>
				<div className='OtherProjectBox-top'>
					<div className='folder'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='64'
							height='64'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='1'
							strokeLinecap='round'
							strokeLinejoin='round'
							className='TheFolder'
						>
							<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
						</svg>
					</div>
					<div className='project-links'>
						<GitHubIcon
							Class='SmallProjectLink'
							Link={LinkRepository}
						></GitHubIcon>
						<DeployIcon Class='SmallProjectLink' Link={LinkDeploy}></DeployIcon>
					</div>
				</div>
				<div className='OtherProjectBox-info'>
					<h2 className='OtherProject-title'>{Title}</h2>
					<p className='otherProject-description'>{Description}</p>
				</div>
				<div className='OtherProjectBox-footer'>
					<ul>
						{Technologies.map(Tech => (
							<li>{Tech}</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
};

export default OtherProject;
