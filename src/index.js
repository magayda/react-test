import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import $ from 'jquery'



class Page extends React.Component {
  render() {
    return (
      <div className="bodyWrapper">
        <Main />
      </div>
    );
  }
}

class Main extends React.Component {
  // renderArticle(title, body, photo) {
  //   return (
  //
  //   );
  // }
  renderArticle(i) {
    return <Article title="whatever" body="also whatever"/>
  }
  render(i) {
    return (
      <div className="main">
        <div className="header"></div>
        <div className="content">
          <div className="mainContent">
          { /* <Article sandwich={i} shirt=" black" title="yo my dawg" body="New Body lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc."/> */}
            { /* <Article title="yo my dawgy dawg" body="New Body lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ."/> */ }
            { /* <Article title="yo my dawgerino guy" body="sandwichsandwichsandwichsandwichsandwich etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc."/>*/ }
            { /* <Article title="yo my dawgerino guy" body="sandwichsandwichsandwichsandwichsandwich etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc."/>*/ }
            { /* <Article title="yo my dawgerino guy" body="sandwichsandwichsandwichsandwichsandwich etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc."/>*/ }
            { /* <Article title="yo my dawgerino guy" body="sandwichsandwichsandwichsandwichsandwich etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc."/>*/ }
          {  /* <FlexArticle />
            <FlexArticle />
            <FlexArticle />
            <FlexArticle />
            <FlexArticle /> */}
            <GridArticle id="0" title="hey whats up big homie dawg" topWidth="topWidth" body="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "/>
            <GridArticle id="1" title="hey whats up big homie dawg guy bro broseph yo yo yo yo homie guy " body="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumbananface "/>
            <GridArticle id="2" title="hey whats up big homie dawg"body="I wonder if this will really work in practice. There's probably a lot of words like onomatopoeia and long words like pneumonoultramicroscopicsilicovolcanoconiosis that might not let it be cut off when pneumonoultramicroscopicsilicovolcanoconiosis it should be for an article body."/>
            <GridArticle id="3" title="hey whats up big homie dawg"body="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "/>
            <GridArticle id="4" title="hey whats up big homie dawg guy bro broseph yo yo yo yo homie guy"body="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumbananface"/>

          { /*}  <GridArticle />
            <GridArticle />
            <GridArticle />
            <GridArticle /> */}

          {/* js function to set height of articles -- maybe easier with css somehow
            - want to have a fixed height that the article has to conform to -- by adding ellipses and hididng overflow when too much text
            - problem is that height has to grow on smaller screens -- so have to decide breakpoints and adjust max height on that (easy way)
              - or could maybe just look for the article with the smallest height and adjust all to be that max height
            --- can either set multiple heights - set all to the smallest height -- or all to largest or some random ones height
            - could min max somehow?
            probably need to set a height that will cut off larger texts and leave space on smaller ones.
            could take number of words or letters and do it that way - but probably wont be that consistent on height
            */}

          </div>

          <div className="sideContent">
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad />
            <Ad styleName="last"/>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    );
  }
}
class Ad extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div className={'ad ' + ( this.props.styleName || "")}>
        <div className="sideTitle">Check this shit out, son</div>
        <div className="sideBody">lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.</div>
      </div>
    );
  }
}
class Article extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title : "New Title with more lorem ipsum etc.",
    //   body : "New Body lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.lorem ipsum etc.",
    // }
  }
  // state = {
  //   articles: [
  //     {
  //       title: "sup",
  //       body: "nothin"
  //     },
  //     {
  //       title: "sup2",
  //       body: "nothin2"
  //     },
  //     {
  //       title: "sup2",
  //       body: "nothin2"
  //     }
  //   ]
  // }
  render () {
  //   return this.props.articles.map((article) => (
  //     <h3>{article.title}</h3>
  //   ));
    return (
        // var title = this.title;
        <div className="article">
          <div class="text">
            <div className="articleTitle">
              { this.props.title }
              { this.props.sandwich }
            </div>
            <div className="articleBody">
              { this.props.body }
            </div>
          </div>
          <div className="articlePhoto"><img src="https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"/></div>
        </div>
    );
  }
}

class FlexArticle extends React.Component {
  render() {
    return (
      <div className="articleFlex">
        <div className="articleFlexBody">
          <div className="articleFlexTitle">Hey my big dawg homie</div>
          <div className="articleFlexText">lorem ipsum lorem ipsum lorem ipsum v lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</div>
        </div>
        <div className="articleFlexPhoto">
          <img src="https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"/>
        </div>
      </div>
    );
  }
}

class GridArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: 'yoyoyo',
      title: null,
      id: null
    }
    // this.newCheckLength = this.newCheckLength.bind(this)
    // this.newCheckTitle = this.newCheckTitle.bind(this)
    this.checkHeightBody = this.checkHeightBody.bind(this)
    // this.decreaseHeight = this.decreaseHeight.bind(this)
    // this.checkHeightTitle = this.checkHeightTitle.bind(this)
  }

  clickedStuff () {
    if (this.state.body.includes("...") || this.state.title.includes("...")) {
      this.setState({
        body: this.props.body
      })
      this.setState({
        title: this.props.title
      })
    } else {
        //words length
      // this.newCheckLength()
      // this.newCheckTitle()
        //words height
      this.checkHeightBody()
    }
  }

  componentDidMount() {
    // word count
    // this.newCheckLength()
    // this.newCheckTitle()
    // height
    this.checkHeightBody()
    this.widthChange()

    // this.checkHeightTitle()
  }

  // word count
  // newCheckLength() {
  //   this.setState({
  //     body: this.props.body
  //   })
  //   var stateBody = this.props.body;
  //   var arrayBody = stateBody.split(" ");
  //   if (arrayBody.length > 31) {
  //     var limitArray = arrayBody.slice(0, 32);
  //     var joinArray = limitArray.join(" ");
  //     this.setState({
  //       body: joinArray + "..."
  //     })
  //   } else {
  //     this.setState({
  //       body: this.props.body
  //     })
  //   }
  // }
  //
  // newCheckTitle() {
  //   this.setState({
  //     title: this.props.title
  //   })
  //   var statetitle = this.props.title;
  //   var arraytitle = statetitle.split(" ");
  //   if (arraytitle.length > 6) {
  //     var limitTitle = arraytitle.slice(0, 7);
  //     var joinTitle = limitTitle.join(" ");
  //     this.setState({
  //       title: joinTitle + "..."
  //     })
  //   } else {
  //     this.setState({
  //       title: this.props.title
  //     })
  //   }
  // }

  // redo all by checking width / height
  // redo all by checking width / height
  // redo all by checking width / height

// **
  // need to check media breakpoints and change heights -- need to also have a watch for width changes to change which text should have ellipses
// **




  checkHeightBody () {
    const newState = this;
    console.log($(window).width() + " bitches");
    var windowWidth = $(window).width();

    this.setState({title: this.props.title})

    this.setState({body: this.props.body}, () => {
      const newStateSet = this.state.body;
    })

    var stateSetDelay = null;
    setTimeout(function stateWait() {
      stateSetDelay = newState.state.body;
    }, 0)

    setTimeout(function holdFunction() {
    var stateBody = stateSetDelay;
    var arrayBody = stateBody.split(" ");
    var heightCheck = null

      setTimeout(function getHeight() {
        var widthCheck = $('body').width();

        $('.articleGridText').each(function(i){

          heightCheck = $(this).height();


          //trying to set id for each
          var newId = $(this).attr('id-number', i);
          var idStore = i;
          var textHeight = parseInt($(this).css('min-height'));

          if (heightCheck > textHeight) {

            //only thing messed up is that i have to manually add id
            if (newState.props.id == idStore) {

              var removeLast = arrayBody.splice(-2,2);

              // this pops off the end word constantly until the height is under 70
              // is there a way to remove the words until its known to be under 70px and then setState?

              var joinArray = arrayBody.join(" ");
              newState.setState({body: joinArray + "..."})
              getHeight();
            }

            // need to target specific state articles -- label them with an id -- match up id to i

          } else {

          }
        })
      }, 0)



    // function decreaseHeight() {
    //
    //   var removeLast = arrayBody.splice(-2, 2);
    //   var joinArray =  arrayBody.join(" ");
    //   newState.setState({body: joinArray})
    //
    // }

  }, 0)

    // console.log(this.state.body)

    // var bodyHeight = $('.articleGridText').each().height();
    // console.log(bodyHeight);
  }

  // check height of article body
  // if over height
  // pop last word in array
  // check height again
  widthChange() {
    // var windowWidth = $(window).width();
    // console.log(windowWidth);
    //   if (windowWidth > 500) {
    //     // this.checkHeightBody();
    //     $('.articleGridText').css('background', 'blue');
    //   }
    const newState = this;
    // function widthFunction(x) {
    //   if (x == '70px') {
    //     $('.articleGridText').css('background', 'blue');
    //     // newState.checkHeightBody();
    //   } else {
    //     // newState.checkHeightBody();
    //     $('.articleGridText').css('background', 'red');
    //   }
    // }
    // var x = window.matchMedia("(max-width: 500px)")
    // // var x = $('.articleGridText').width()
    // widthFunction(x) // Call listener function at run time
    // x.addListener(widthFunction)

    //loop all texts
    //look for height changes
    //add eventlisteners

    // DETECT FUCKING HEIGHT CHANGES ON ALL HEIGHTS AND RERUN THE HEIGHT CHECKER IF CHANGED!!!!!!!!!!!!!!!!!!!

    setTimeout(function getHeight() {
        var articleHeight
      $('.articleGridText').each(function(i){
        articleHeight = $(this).height();
        // console.log("height check = " + articleHeight);
      })
      console.log("height check = " + articleHeight);

      function heightChange(articleHeight) {
        return "idk"
      }

    }, 50)
  }





  // redo all by checking width / height
  // redo all by checking width / height
  // redo all by checking width / height
  // redo all by checking width / height


  render() {

    const textWidth = $('.topWidth').width();
    const textWidth2 = $('.articleGridText').width();
    //
    // add id to each post -- loop through each id for i and check length -- remove words
    //
    // console.log(textWidth);
    // console.log($('.footer').height());

    return (
      <div className="articleGrid">
        { /* <h6>{
          // checkLength()
        }</h6> */}
        <div className="articleGridBody">
          <div className="articleGridTitle" onClick={() => this.clickedStuff()}>{this.state.title}</div>
          <div className={"articleGridText " + (this.props.topWidth || "")} id="articleGridText" onClick={() => this.clickedStuff()}>

            {this.state.body}

          </div>
        </div>
        <div className="articleGridPhoto">
          <img src="https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"/>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
