interface ContainerProps {
	children: React.ReactNode;
	className?: string;
}

export const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
	const { children, className = '' } = props;
	return <div className={`${className} max-w-[2520px] mx-auto xl:px-24 md:px-10 sm:px-2 px-5`}>{children}</div>;
};
