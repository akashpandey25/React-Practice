export default function Navbar(props) {
	return (
		<nav aria-label="Main navigation" className="border-b border-slate-200 bg-white mb-5">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
				<a href="/" className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
					<span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm shadow-indigo-200">
						<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
							<rect x="3.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
							<rect x="13.5" y="3.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
							<rect x="3.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
							<rect x="13.5" y="13.5" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
						</svg>
					</span>
					<h1 className="text-xl font-bold tracking-tight text-slate-900">Gallery App</h1>
				</a>
                <p className="text-black font-bold">Page {props.page}</p>
				<span className="hidden text-sm font-medium text-slate-500 sm:block">Your moments, beautifully collected</span>
			</div>
		</nav>
	);
}
