import React, { useState, useEffect } from 'react';
import NewsItem from "./newsitem";
import InfiniteScroll from 'react-infinite-scroll-component';
import { API_KEY } from '../credentials.js';

export default function News(props) {



  const [newsData, setnewsData] = useState(null);
  // const [searchData, setsearchData] = useState("india");
  const [pagenumber, setpageNumber] = useState(1);
  const [totalresults, setTotalResults] = useState(0);


  const getData = async () => {

    var url = 'https://newsapi.org/v2/everything?' +
      `q=${props.category}&` +
      'language=en&' +
      'from=2024-11-05&' +
      'pageSize=99&' +
      `page=${pagenumber}` +
      'sortBy=popularity&' +
      `apiKey=${API_KEY}`;

    var req = new Request(url);
    
    let Data = await fetch(req)
    let jsonData = await Data.json();
    console.log(jsonData.articles);
      
    if (newsData == null)
      setnewsData(jsonData.articles);    //array
    else {
      setnewsData(newsData.concat(jsonData.articles));
    }
    setTotalResults(jsonData.totalResults);
  }

  const fetchMoreData = async () => {
    setpageNumber(pagenumber + 1);
    getData();
  }



  //useEffect HOOK sare component render hone k baad call hota h 
  // useffect react functional based component ka lifecycle method h jese class based m (componentDidMount) hota h
  // 3 phases hote h lifecycle method m == 1: mounting, 2:  updating,  3: clearing or delete or unmounting


  useEffect(() => {

    getData();
    document.title = props.category + " - NewsApp";

  }, [])



  return (
    <>

      <div className="container my-3">
        <h2 className='text-center'>Top {props.category ? props.category : ""} Headlines {totalresults ? <> ({totalresults} Results) </> : null}</h2>


        {newsData === null || newsData === undefined || !newsData ? <h2>No Updates....</h2> :

          <InfiniteScroll
            dataLength={newsData.length}
            next={fetchMoreData}
            hasMore={totalresults !== newsData.length}
            loader={<h3 className='text-center'>Loading... </h3>}
          >
            <div className="row">

              {newsData ? newsData.map((currItem, index) => {
                if ( currItem.title === null || currItem.title === undefined || currItem.description === null || currItem.url === null)
                  return (null);

                else {
                  return (

                    <div className="col-md-4 mt-5" key={index}>
                      <NewsItem key={index} title={currItem.title} description={currItem.description}
                        imageUrl={currItem.urlToImage} newsurl={currItem.url} />
                    </div>

                  );
                }

              }) : null}



            </div>
          </InfiniteScroll>
        }



      </div>


    </>
  )
}