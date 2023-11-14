// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ITitleParagraph} from "@/types/components";
import {fadeInUp, initial} from "../animations/animations";

// Components
import Paragraph from "./Elements/Paragraph";

const TitleParagraph: FC<ITitleParagraph> = ({title, paragraph}) => {
	return (
		<div className="bg-white container p-0 mx-auto flex flex-col px-4">
			<motion.div
				initial={initial}
				whileInView={fadeInUp}
				viewport={{once: true}}
				className="py-16 sm:py-20 md:py-28 px-4"
			>
				<motion.h2
					initial={initial}
					whileInView={fadeInUp}
					viewport={{once: true}}
					className={
						title
							? "mb-4 text-center uppercase font-extrabold leading-[2.5rem] lg:leading-[3rem] text-4xl lg:text-5xl text-black"
							: "hidden"
					}
				>
					{title}
				</motion.h2>
				<Paragraph
					content={paragraph}
					tailwindStyling={
						paragraph
							? "lg:max-w-3xl mx-auto mb-10 text-black leading-[1.75rem] text-base sm:text-paragraph text-center"
							: "hidden"
					}
				/>
			</motion.div>
		</div>
	);
};

export default TitleParagraph;