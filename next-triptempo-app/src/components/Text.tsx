interface TextProps {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'blockquote' | 'code';
	className?: string;
	children: React.ReactNode;
}

export const Text: React.FC<TextProps> = (props: TextProps) => {
	const { tag: Tag, className = '', children } = props;

	const tagClasses = {
		h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
		h2: 'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0',
		h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
		h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
		p: 'leading-7 [&:not(:first-child)]:mt-6',
		span: 'text-base font-normal',
		blockquote: 'mt-6 border-l-2 pl-6 italic',
		code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
	};

	return <Tag className={`${tagClasses[Tag]} ${className}`}>{children}</Tag>;
};
