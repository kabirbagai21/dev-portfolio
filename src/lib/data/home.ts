import BaseData from './base';
import { getSkills } from './skills';
import type { Skill } from './types';

const title = 'Home';

const hero: {
	title: string;
	description: string;
	links: Array<{ label: string; href: string; icon: `i-carbon-${string}` }>;
} = {
	title: `${BaseData.fullName}`,
	description: '',
	links: [
		{ label: 'GitHub', href: 'https://github.com/kabirbagai21', icon: 'i-carbon-logo-github' },
		{ label: 'LinkedIn', href: 'https://linkedin.com/in/kabir-bagai', icon: 'i-carbon-logo-linkedin' },
		{ label: 'Email', href: 'mailto:kabirbagai797@gmail.com', icon: 'i-carbon-email' }
	]
};

const carousel: Array<Skill> = getSkills();

const HomeData = {
	title,
	hero,
	carousel
};

export default HomeData;
