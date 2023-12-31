// Components
export type ICTA = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type ICTATwo = {
	title: string;
	highlightText: string;
	backgroundColor: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type ILinkedInCta = {
	title: string;
	highlightText: string;
	backgroundColor: string;
	displayLinkedinIcon: Boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IFAQ = {
	title: string;
	subtitle: string;
	paragraph: string;
	displayCtaBlock: boolean;
	displayDownloadButtonLinks: boolean;
	cta: {
		title: string;
		paragraph: string;
		backgroundImage: {
			sourceUrl: string;
		};
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
	};
	faqContent: [
		{
			card: {
				title: string;
				paragraph: string;
			};
		}
	];
	downloadLinksTitle: string;
	downloadButtonLinks: [
		{
			pdfLink: boolean;
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
		}
	];
};
export type IContactInfo = {
	title: string;
	paragraph: string;
};
export type IEnquiryRequestForm = {
	title: string;
	contentOneOpen: boolean;
	contentTwoOpen: boolean;
	contentThreeOpen: boolean;
};
export type IOurPartners = {
	title: string;
	subtitle: string;
	paragraph: string;
	imageGrid: [
		{
			link: {
				url: string;
				title: string;
				target: string;
			};
			image: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
		}
	];
};
export type IFeaturedProjects = {
	title: string;
	subtitle: string;
};
export type IAchievementsStatsCTA = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	displayAchievementsContent: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	achievements: [
		{
			card: {
				title: string;
				paragraph: string;
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type ITitleContentValuesBlocks = {
	backgroundImage: string;
	valuesBlockOne: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		icon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		activeIcon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockTwo: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		icon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		activeIcon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockThree: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		icon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		activeIcon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockFour: {
		title: string;
		paragraph: string;
		blockTitle: string;
		displayButton: boolean;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		icon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		activeIcon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IRequestQuoteFormBlocks = {
	backgroundImage: {
		sourceUrl: string;
	};
	valuesBlockOne: {
		title: string;
		googleMap: string;
		blockTitle: string;
		displayImageOrMap: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockTwo: {
		title: string;
		googleMap: string;
		blockTitle: string;
		displayImageOrMap: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	valuesBlockThree: {
		title: string;
		googleMap: string;
		blockTitle: string;
		displayImageOrMap: string;
		backgroundImage: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IHero = {
	title: string;
	paragraph: string;
	displayVideo: boolean;
	backgroundImage: string;
	backgroundVideoUrl: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	buttonLinkTwo: {
		url: string;
		title: string;
		target: string;
	};
	servicesLinks: [
		{
			icon: {
				altText: string;
				sourceUrl: string;
				mediaDetails: {
					width: number;
					height: number;
				};
			};
			buttonLink: {
				url: string;
				title: string;
				target: string;
			};
		}
	];
};
export type IHeroTwo = {
	title: string;
	paragraph: string;
	backgroundImage: string;
};
export type ITwoColumnButtonContent = {
	title: string;
	subtitle: string;
	paragraph: string;
	backgroundColor: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	columnTwoContent: {
		buttonText: string;
		buttonTextTwo: string;
		buttonTextThree: string;
		paragraph: string;
		paragraphTwo: string;
		paragraphThree: string;
	};
};
export type IOurServices = {
	title: string;
	subtitle: string;
	paragraph: string;
	servicesGrid: [
		{
			card: {
				title: string;
				paragraph: string;
				Link: {
					url: string;
					title: string;
					target: string;
				};
				icon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
				hoverIcon: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		}
	];
};
export type ITitleContentImage = {
	title: string;
	subtitle: string;
	paragraph: string;
	imageLocation: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IIndividualExecutiveMember = {
	title: string;
	subtitle: string;
	paragraph: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	logo: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
};
export type IJumboContentSection = {
	jumboContentSection: [
		{
			content: {
				title: string;
				subtitle: string;
				paragraph: string;
				imageLocation: string;
				backgroundDisplay: string;
				image: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						height: number;
						width: number;
					};
				};
				buttonLink: {
					url: string;
					title: string;
					target: string;
				};
			};
		}
	];
};
export type IJumboContentImage = {
	title: string;
	subtitle: string;
	paragraph: string;
	contentBox: {
		text: string;
		subtext: string;
		icon: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
	quality: {
		title: string;
		paragraph: string;
	};
	reliability: {
		title: string;
		paragraph: string;
	};
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
	bottomContent: {
		text: string;
		textTwo: string;
		buttonLink: {
			url: string;
			title: string;
			target: string;
		};
		image: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
		displayTextarea: string;
		displayButtonOrImage: string;
	};
};
export type IMaintenance = {
	title: string;
	paragraph: string;
	backgroundVideoUrl: string;
	backgroundImageOrVideo: string;
	backgroundImage: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IGoogleReviews = {
	title: string;
	paragraph: string;
	highlightText: string;
};
export type ITitleParagraph = {
	title: string;
	paragraph: string;
	displayParagraph: boolean;
};
export type IGallery = {
	title: string;
	highlightText: string;
	paragraph: string;
	gallery: [
		{
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		}
	];
};
export type IOperationalInsights = {
	title: string;
	italic: string;
	paragraph: string;
};
export type IExecutiveLeadership = {
	title: string;
	paragraph: string;
	highlightText: string;
};
export type IVideoBlock = {
	title: string;
	video: string;
	subtitle: string;
	paragraph: string;
	highlightText: string;
	displayYoutubeIcon: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	videoBackgroundImage: {
		sourceUrl: string;
	};
};
export type IJobPositions = {
	title: string;
	paragraph: string;
	highlightText: string;
};
export type IJobPositionsThreeCardsGrid = {
	title: string;
	paragraph: string;
	highlightText: string;
};

// Global
export type ILayout = {
	children: React.ReactNode;
};
export type IErrorPage = {
	title: string;
	paragraph: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};

// Cards
export type IFAQCard = {
	index: number;
	title: string;
	paragraph: string;
};
export type IBlogsCard = {
	uri: string;
	date: string;
	title: string;
	excerpt: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IGoogleReviewsCard = {
	date: any;
	rating: any;
	name: string;
	textarea: string;
	profilePhoto: string;
};
export type IValuesBlocksTextCard = {
	title: string;
	paragraph: string;
	displayButton: boolean;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};
export type IValuesBlocksImageCard = {
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IValuesBlocksImageOrMapCard = {
	googleMap: string;
	displayImageOrMap: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			width: number;
			height: number;
		};
	};
};
export type IOperationalInsightsCard = {
	uri: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IExecutiveLeadershipCard = {
	slug: string;
	title: string;
	paragraph: string;
	featuredImage: {
		node: {
			altText: string;
			sourceUrl: string;
			mediaDetails: {
				width: number;
				height: number;
			};
		};
	};
};
export type IJobPositionsCard = {
	slug: string;
	title: string;
	paragraph: string;
	tailwindStyling: string;
};
export type IJumboContentSectionCard = {
	title: string;
	subtitle: string;
	paragraph: string;
	imageLocation: string;
	backgroundDisplay: string;
	image: {
		altText: string;
		sourceUrl: string;
		mediaDetails: {
			height: number;
			width: number;
		};
	};
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
};

// Elements
export type ISideMenu = {
	menuActive: boolean;
};
export type ITitle = {
	content: string;
	tailwindStyling: string;
};
export type IParagraph = {
	content: string;
	tailwindStyling: string;
};
export type IVideoWrapper = {
	children: React.ReactNode;
};
export type IVideoHeroWrapper = {
	children: React.ReactNode;
};
export type IBackHoverButton = {
	link: string;
};
export type IButtonBorderSliced = {
	title: string;
	fullWidth: boolean;
	tailwindColor: string;
};
export type IYoutubeButtonBorderSliced = {
	title: string;
	fullWidth: boolean;
	displayYoutubeIcon: boolean;
};
export type IBackToVacanciesButton = {
	link: string;
	title: string;
	fullWidth: boolean;
};
export type IDownloadButtonLinks = {
	title: string;
	pdfLink: boolean;
};
export type IJobsCategoryButton = {
	title: string;
	active: boolean;
	onClick: any;
};
