import Link from 'next/link';

function Tendring({ singletendring }){

	const searchurl = '/search?q='+singletendring.en_keyword;
	return(
		<>
			<Link  target="_blank" href={searchurl}>
	         	<a className="badge badge-pill badge-warning">#{singletendring.hi_keyword}</a>
	      	</Link>
		</>
	)
}
export default Tendring;