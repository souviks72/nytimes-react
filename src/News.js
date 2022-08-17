import React, {Component} from 'react';
import axios from 'axios';

class News extends Component{
    static defaultProps = {
        topics: ["home","world","politics","magazine","technology","science","health","sports","arts","fashion","food","travel"],
        apiKey: "Jj2aDgQpvMBmaE2841mxJ33seHsVeNYx"
    }

    constructor(props){
        super();
        this.state = {
            articles: [],
            numOfResults: 0
        }
    }

    async componentDidMount(){
        let res = (await (axios.get(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${this.props.apiKey}`))).data;
        this.setState({
            articles: res.results,
            numOfResults: res.num_results
        });
    }

    render(){
        return(
            <div className='News'>
                {
                    this.state.articles.map(art =>(
                        <div className='article'>
                            <div className='article__text'>
                                <h6 className='article__topic'>HOME</h6>
                                <p className='article__title'>{art.title}</p>
                                <p className='article__byline'>{art.byline}</p>
                                <p className='abstract'>{art.abstract}</p>
                                <a href={art.url}>Continue Reading</a>
                            </div>
                            <div className='article__img'>
                                <img src={art.multimedia[1].url} alt={art.multimedia[0].caption}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default News;