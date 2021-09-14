import React from "react";
import { GiphyFetch } from '@giphy/js-fetch-api';

const giphyApiKey = '';
const giphyFetch = new GiphyFetch(giphyApiKey);

const Giphy = props => {
	
  const [gif, setGif] = React.useState('');
  const [txt, setTxt] = React.useState('');

  React.useEffect(() => {
    fetchValentineGif().then(response => {
		setGif(response);
	})
	.catch( e => {
		console.log(e);
	});
	
	fetchValentineTxt().then(response => {
    	return response.json();
    })
    .then(function(data) {
        setTxt(randomQuote(data));
    });
  }, []);
	
  return (
	<center>
		<div>
			<div style={{width: '`${gif.image_width} px`', color: 'white'}}>{txt.text} - "{txt.author}"</div>
	    	<div><img src={gif.image_url} alt="Love"/></div>
		</div>
	</center>
  );
};

const fetchValentineGif = async () => {
	const { data } = await giphyFetch.random({ tag: 'heart', type: 'gifs'});
	
	return data;
}

const fetchValentineTxt = (setText) => {
  return fetch("https://type.fit/api/quotes");
}

const randomQuote = (data) => {
	let loveQuotes = [];
	
	data.map(quote => {
		if(quote.text.match(/Love/ig)) {
			loveQuotes.push(quote);
			
			return true;
		}
	});
	
	return loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
}

export default Giphy;
