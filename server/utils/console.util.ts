import colors from 'colors';

colors.setTheme({
	success: 'green',
	error: 'red',
	warning: 'yellow',
});

export const successMessage = (message: any) => {
	console.log(`[Success] - ${message}`.success);
};

export const warningMessage = (message: any) => {
	console.log(`[Warning] - ${message}`.warning.italic);
};

export const errorMessage = (message: any) => {
	console.log(`[Error] - ${message}`.error.bold.italic);
};
