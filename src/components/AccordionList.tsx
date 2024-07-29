import React from "react";

type Props = React.PropsWithChildren<unknown>;

export default function AccordionList({ children }: Props) {
	return (
		<ul className="flex flex-row flex-wrap">
			{React.Children.toArray(children).map((child, index) => {
				return (
					<li
						key={index}
						className="basis-[300px] shrink-1 grow border border-black"
					>
						{child}
					</li>
				);
			})}
		</ul>
	);
}
