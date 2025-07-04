import Assets from './assets';
import type { Education } from './types';

const title = 'Education';

const items: Array<Education> = [

	{
		degree: 'M.S. Computer Science',
		description: '',
		location: 'New York',
		logo: Assets.Columbia,
		name: '',
		organization: 'Columbia University',
		period: { from: new Date(2025, 8, 0), to: new Date(2026, 5, 0) },
		shortDescription: '',
		slug: '',
		subjects: []
	},
	
	{
		degree: 'B.S. Computer Science',
		description: '',
		location: 'New York',
		logo: Assets.Columbia,
		name: '',
		organization: 'Columbia University',
		period: { from: new Date(2022, 9, 0), to: new Date(2025, 5, 0) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: []
	},

	{
		degree: 'Mechanical Engineering (Transferred)',
		description: '',
		location: 'San Diego',
		logo: Assets.UCSD,
		name: '',
		organization: 'University of California',
		period: { from: new Date(2021, 9, 0), to: new Date(2022, 6, 0) },
		shortDescription: '',
		slug: 'ucsd',
		subjects: []
	}
	
];

const EducationData = { title, items };

export default EducationData;
