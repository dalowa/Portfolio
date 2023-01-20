import './../styles/ArchivesTable.css';
import data from './../data/ProyectsData.js';
import DeployIcon from './Icons/DeployIcon';
import GitHubIcon from './Icons/GitHubIcon';

const ArchivesTable = () => {
	return (
		<section className='ArchivesTables-container'>
			<div className='texts-container'>
				<h1>Archive</h1>
				<h3>A list of things I’ve worked on</h3>
			</div>

			<table>
				<thead>
					<tr>
						<th>Year</th>
						<th>Title</th>
						<th>Built with</th>
						<th>Link</th>
					</tr>
				</thead>
				<tbody>
					{data.map(p => (
						<tr>
							<td>{p.Year}</td>
							<td>{p.Title}</td>
							<td>{p.Technologies.join(' . ')}</td>
							<td>
								<DeployIcon
									Class='ArchiveIcon'
									Link={p.DeployLink}
								></DeployIcon>
								<GitHubIcon
									Class='ArchiveIcon'
									Link={p.RepositoryLink}
								></GitHubIcon>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};
export default ArchivesTable;
