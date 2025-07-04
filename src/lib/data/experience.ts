import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'IBM',
		description: 'Leveraging IBM watsonx to develop generative and agentic AI solutions for clients in the public and federal markets',
		contract: ContractType.Internship,
		type: 'Software and Services',
		location: 'New York, NY',
		period: { from: new Date(2025, 5, 0) },
		skills: getSkills('kubernetes', 'dock'),
		name: 'AI Architect',
		color: 'red',
		links: [],
		logo: Assets.IBM,
		shortDescription: 'Customer Success Management (CSM)'
	},
	{
		slug: 'software-freelance',
		company: 'Vanderbilt University Medical Center',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Internship,
		type: 'Healthcare',
		location: 'Nashville, TN',
		period: { from: new Date(2024, 6, 0), to: new Date(2024, 9, 0) },
		skills: getSkills('pytorch', 'py'),
		name: 'Machine Learning Researcher',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Center for Imaging and Biomarker Development.'
	},
	{
		slug: 'healthedge-software',
		company: 'HealthEdge Software',
		description: "Isolated and resolved disruptive changes in runtime properties across 30,000 scenario tests, saving developers hours spent debugging tests causing otherwise valid ones to fail, and improving overall system stability. \n \n Improved test handler by automating runtime property resets, mitigating potential issues in future tests. \n \n Enhanced CI/CD pipeline utility using NodeJS and React to track commits between builds for failed test cases.",
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2023, 5, 0), to: new Date(2023, 8, 0) },
		skills: getSkills('java', 'node', 'js'),
		name: 'Product Engineer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'HealthRules Payer Platform'
	},
	{
		slug: 'radicle-science',
		company: 'Radicle Science',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.PartTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date(2022, 3, 0), to: new Date(2022, 12, 0) },
		skills: getSkills('flask', 'postgres', 'aws'),
		name: 'Software Engineer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Data Collection Tools for Clinical Trials'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
