import React from "react";
import { cloneDeep } from "lodash";

import "../../style/redditThemes/old.css";
import { FleshedRedditSubmission, RedditComment } from "../../types";
import { RedditContext } from "../RedditContext";
import { useContext } from "react";

export const ImageSubmission: React.FC = () => {
  const context = useContext(RedditContext);

  const { author, score, prettyDate, sub, link, title, commentsCount, redact } =
    context.content;

  return (
    <div>
      <div
        className="thing id-t3_gh5hau linkflair linkflair-m-be odd link res-selected RES-keyNav-activeThing"
        id="thing_t3_gh5hau"
        style={{ paddingTop: "1%" }}
      >
        <p className="parent"></p>
        <span className="rank"></span>
        <div className="midcol unvoted">
          <div
            className="arrow up login-required access-required"
            data-event-action="upvote"
            role="button"
            aria-label="upvote"
          ></div>
          <div className="score unvoted" title="40">
            {score}
          </div>
          <div
            className="arrow down login-required access-required"
            data-event-action="downvote"
            role="button"
            aria-label="downvote"
          ></div>
        </div>
        <a
          className="thumbnail invisible-when-pinned may-blank loggedin outbound"
          data-event-action="thumbnail"
          href="https://i.redd.it/m2wmwyol1zx41.png"
          data-href-url="https://i.redd.it/m2wmwyol1zx41.png"
          data-outbound-url="https://i.redd.it/m2wmwyol1zx41.png"
          data-outbound-expiration="0"
          rel="nofollow ugc"
        >
          <img src={link} width="70" alt="" />
        </a>
        <div className="entry unvoted res-selected RES-keyNav-activeElement">
          <div className="top-matter">
            <p className="title">
              <a
                className="title may-blank loggedin outbound"
                data-event-action="title"
                href="https://i.redd.it/m2wmwyol1zx41.png"
                data-href-url="https://i.redd.it/m2wmwyol1zx41.png"
                data-outbound-url="https://i.redd.it/m2wmwyol1zx41.png"
                data-outbound-expiration="0"
                rel="nofollow ugc"
              >
                {title}
              </a>
            </p>
            <div className="expando-button expanded hide-when-pinned video"></div>
            <p className="tagline">
              submitted
              <time className="live-timestamp">{` ${prettyDate} `}</time>
              to <a href="google.com">/r/{sub}</a> by
              <a className="author may-blank id-t2_3rv0g">
                {" "}
                {redact ? "■■■■■■" : author}
              </a>
              <span
                className="RESUserTag"
                res-prevent-cloning-1589157309844=""
              ></span>
              <span className="userattrs"></span>
              <span className="awardings-bar"></span>
            </p>
            <ul className="flat-list buttons">
              <li className="first">
                <a
                  href="https://www.reddit.com/r/VictoriaBC/comments/gh5hau/victoria_bc_under_martial_law_after_an_angry_mob/"
                  data-event-action="comments"
                  className="bylink comments may-blank"
                  rel="nofollow"
                >
                  {commentsCount} comments
                </a>
              </li>
              <li className="share">
                <a className="post-sharing-button" href="javascript: void 0;">
                  share
                </a>
              </li>
              <li className="link-save-button save-button login-required">
                <a href="#">save</a>
              </li>
              <li className="give-gold-button">
                <a
                  href="/gold?goldtype=gift&amp;months=1&amp;thing=t3_gh5hau"
                  title="give an award in appreciation of this post."
                  className="give-gold login-required access-required gold-give-gold"
                  data-event-action="gild"
                  data-community-awards-enabled="True"
                  rel="nofollow"
                >
                  give award
                </a>
              </li>
              <li className="report-button login-required">
                <a
                  href="javascript:void(0)"
                  className="reportbtn access-required"
                  data-event-action="report"
                >
                  report
                </a>
              </li>
              <li className="crosspost-button">
                <a
                  className="post-crosspost-button"
                  href="javascript: void 0;"
                  data-crosspost-fullname="t3_gh5hau"
                >
                  crosspost
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="noCtrlF res-toggleAllChildren"
                  title="Show only replies to original poster."
                  data-text="hide all child comments"
                ></a>
              </li>
            </ul>
            <div className="reportform report-t3_gh5hau"></div>
          </div>
          <div
            className="expando"
            data-pin-condition="function() {return this.style.display != 'none';}"
          >
            <div className="media-preview-content">
              <a
                href="https://i.redd.it/m2wmwyol1zx41.png"
                className="may-blank"
              >
                <img className="preview" src={link} />
              </a>
            </div>
          </div>
        </div>
        <div className="child"></div>
        <div className="clearleft"></div>
      </div>
    </div>
  );
};
