const firstName = 'Kabir';
const lastName = 'Bagai';
const suffix = 'Developer Portfolio';

const BaseData = {
	firstName,
	lastName,
	suffix,
	get fullName() {
		return `${firstName} ${lastName}`;
	}
};

export default BaseData;
