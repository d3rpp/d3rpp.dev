export interface Head {
	title: string;
	meta: Record<string, string>,
	link: {
		rel: string,
		href: string,
	}[]
}

const HEAD: Head = {
	title: 'd3rpp.dev',

	meta: {
		'description': 'd3rpp.dev portfolio site',
		'theme-color': '#121212',
		'og:name': 'd3rpp.dev',
		'og:description': 'My Site - version 3',
		'og:image': "/og.png",
		'twitter:card': 'summary',
		'twitter:site': '@d3rpp.dev',
		'twitter:title': 'd3rpp.dev',
		'twitter:description': 'My Site - version 3'
	},

	link: [
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
		},
	],
};

export default HEAD;
