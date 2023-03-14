import Link from 'next/link'
import Head from 'next/head'


export default () => (
	<main style={{backgroundColor: "gray", height: "100vh"}}>
	
		<div style={{height: "50vmin", backgroundRepeat: "no-repeat", backgroundSize:"100% 100%", backgroundImage: "url(data:image/jpeg;base64,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)", textAlign: 'center'}}>
			<h1 style={{textColor: "#575757", paddingTop: "13vh", font:"Monaco"}}>Luca Obitz</h1>
		</div>
	
		<Link style={{backgroundColor: "#b3afa6", 
			padding: "5px",
			border: "1px",
			borderColor: "black",
			borderRadius: "2px",
			textDecoration: "none",
			textColor: "#242423"}} href="/page2">Page 2</Link>
	</main>
)