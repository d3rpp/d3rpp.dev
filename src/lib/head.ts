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
			href: 'https://fonts.googleapis.com',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200;400&display=swap',
		},
	],
};

export default HEAD;
