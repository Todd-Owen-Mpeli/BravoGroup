// Imports
import {client} from "@/config/apollo";
import {DocumentNode, gql} from "@apollo/client";

/* PREVIEW PAGES & BLOGS */
/* Fetch all Flexible Content Components 
(For every flexible content page) */
export const getAllPreviewFlexibleContentComponents = async (
	id: number,
	postType: string,
	authToken: string,
	loginRedirectURL: string,
	postTypeFlexibleContent: string
) => {
	try {
		const content: DocumentNode = gql`
			{
				mainContent: ${postType}(id: ${id}, idType: DATABASE_ID) {
					flexibleContent {
						flexibleContent {
							... on ${postTypeFlexibleContent}_Hero {
								fieldGroupName
								title
								paragraph
								displayVideo
								backgroundVideoUrl
								buttonLink {
									url
									title
									target
								}
								buttonLinkTwo {
									url
									title
									target
								}
								backgroundImage {
									sourceUrl
								}
								servicesLinks {
									icon {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
									buttonLink {
										url
										title
										target
									}
								}
							}
							... on ${postTypeFlexibleContent}_HeroTwo {
								fieldGroupName
								title
								paragraph
								backgroundImage {
									sourceUrl
								}
							}
							... on ${postTypeFlexibleContent}_TwoColumnButtonContent {
								fieldGroupName
                  				title
                  				subtitle
                  				paragraph
								backgroundColor
								buttonLink {
									url
									title
									target
								}
                  				columnTwoContent {
                  					paragraph
                  					paragraphThree
                  					paragraphTwo
                  					buttonText
                  					buttonTextThree
                  					buttonTextTwo
                  				}
							}
							... on ${postTypeFlexibleContent}_OurServices {
								fieldGroupName
								title
								paragraph
								servicesGrid {
										card {
										title
										link {
											url
											title
											target
										}
										icon {
											altText
											sourceUrl
											mediaDetails {
												height
												width
											}
										}
										image {
											altText
											sourceUrl
											mediaDetails {
											height
											width
											}
										}
									}
								}
							}
							... on ${postTypeFlexibleContent}_JumboContentImage {
								fieldGroupName
								title
								subtitle
								paragraph
								quality {
									title
									paragraph
								}
								reliability {
									title
									paragraph
								}
								image {
									altText
									sourceUrl
									mediaDetails {
									height
									width
									}
								}
								contentBox {
									text
									subtext
									icon {
									altText
									sourceUrl
									mediaDetails {
										height
										width
									}
									}
								}
								bottomContent {
									text
									textTwo
									buttonLink {
										url
										title
										target
									}
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
									displayTextarea
									displayButtonOrImage
								}
							}
							... on ${postTypeFlexibleContent}_AchievementsStatsCta {
								fieldGroupName
								title
								paragraph
								displayAchievementsContent
								buttonLink {
									url
									title
									target
								}
								backgroundImage {
									sourceUrl
								}
								achievements {
									card {
										title
										paragraph
										icon {
											altText
											sourceUrl
											mediaDetails {
											height
											width
											}
										}
										image {
											altText
											sourceUrl
											mediaDetails {
											height
											width
											}
										}
									}
								}
							}
							... on ${postTypeFlexibleContent}_TitleParagraph {
								fieldGroupName
								title
								paragraph
							}
							... on ${postTypeFlexibleContent}_FeaturedProjects {
								fieldGroupName
								title
								subtitle
							}
							... on ${postTypeFlexibleContent}_OurPartners {
								fieldGroupName
								title
								subtitle
								paragraph
								imageGrid {
									link {
										url
										title
										target
									}
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
							... on ${postTypeFlexibleContent}_TitleContentValuesBlocks {
								fieldGroupName
								backgroundImage {
									sourceUrl
								}
								valuesBlockOne {
									title
									paragraph
									blockTitle
									displayButton
									buttonLink {
										url
										title
										target
									}
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								valuesBlockTwo {
									title
									paragraph
									blockTitle
									displayButton
									buttonLink {
										url
										title
										target
									}
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								valuesBlockThree {
									title
									paragraph
									blockTitle
									displayButton
									buttonLink {
										url
										title
										target
									}
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								valuesBlockFour {
									title
									paragraph
									blockTitle
									displayButton
									buttonLink {
										url
										title
										target
									}
									image {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
							... on ${postTypeFlexibleContent}_RequestQuoteFormBlocks {
								fieldGroupName
								backgroundImage {
										sourceUrl
									}
								valuesBlockOne {
									title
									paragraph
									blockTitle
									displayButton
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								valuesBlockTwo {
									title
									paragraph
									blockTitle
									displayButton
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
								valuesBlockThree {
									title
									paragraph
									blockTitle
									displayButton
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										altText
										sourceUrl
										mediaDetails {
											height
											width
										}
									}
								}
							}
							... on ${postTypeFlexibleContent}_OperationalInsightsGrid {
								fieldGroupName
								title
								italic
								paragraph
							}
							... on ${postTypeFlexibleContent}_OperationalInsightsThreeCards {
								fieldGroupName
								title
								italic
								paragraph
							}
							... on ${postTypeFlexibleContent}_Faq {
								fieldGroupName
								title
								subtitle
								paragraph
								displayCtaBlock
								faqContent {
									card {
										title
										paragraph
									}
								}
								cta {
									title
									paragraph
									buttonLink {
										url
										title
										target
									}
									backgroundImage {
										sourceUrl
									}
								}
								downloadLinksTitle
								displayDownloadButtonLinks
								downloadButtonLinks {
									pdfLink
									buttonColor
									buttonLink {
										url
										title
										target
									}
								}
							}
							... on ${postTypeFlexibleContent}_GoogleReviews {
								fieldGroupName
								title
							}
							... on ${postTypeFlexibleContent}_Cta {
								fieldGroupName
								title
								paragraph
								buttonLink {
									url
									title
									target
								}
								backgroundImage {
									sourceUrl
								}
							}
							... on ${postTypeFlexibleContent}_ContactForm {
								fieldGroupName
								title
							}
							... on ${postTypeFlexibleContent}_ErrorPageContent {
								fieldGroupName
								title
								paragraph
								buttonLink {
								url
								title
								target
								}
								backgroundImage {
								sourceUrl
								}
							}
						}
					}
				}
			}
		`;

		const response: any = await client.query({
			query: content,
			variables: {
				id: id,
			},
			context: {
				headers: {
					authorization: authToken ? `Bearer ${authToken}` : "",
				},
			},
		});

		return {
			content: response?.data?.mainContent?.flexibleContent?.flexibleContent,
		};
	} catch (error) {
		return loginRedirectURL;
	}
};