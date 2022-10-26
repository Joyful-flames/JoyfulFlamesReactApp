import "./containerWithHeader.css";
/**
 * This component is used to render the botanical Garden page's header
 *
 * @param  {string} title - the title of the page
 * @param  {string} leftLink - the link of the last page
 * @param  {string} communityLink - the link of the community page
 */

export default function ContainerWithHeader({ title, leftLinkHandler, communityLinkHandler, children }) {

  function backArrowHandler() {
    leftLinkHandler()
  }

  function communityHandler() {
    console.log("not complete yet")
  }


  return (
    <div className="container">
      <div className="header">
        <button className="headerIcon" onClick={() => backArrowHandler()}>
          <img src={"/images/icons/leftArrow.png"}></img>
        </button>
        <h2 className="headerTitle">{title}</h2>
        <button className="headerIcon" onClick={() => communityHandler()} >
          <img src={"/images/icons/community.png"}></img>
        </button>
      </div>
      {children}
    </div>
  );
}