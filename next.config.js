module.exports = {
 	reactStrictMode: true,
 	ApiUrl : 'https://api.prabhasakshi.com/api/reactwebsite/',
 	imagepath: 'https://images.prabhasakshi.com/gall_content/',
   SiteUrl : 'https://test.prabhasakshi.com',
  	typescript: {
    	ignoreBuildErrors: true,
  	},
  	images: {
  		loader: 'imgix',
    	domains: ['images.prabhasakshi.com'],
    	path: 'https://images.prabhasakshi.com/gall_content/',
  	},
}