import React from "react";
import { cloneDeep } from "lodash";

import "../../style/redditThemes/old.css";
import { RedditComment } from "../../types";

interface SingleCommentProps {
  score: string;
  author: string;
  prettyDate: string;
  awards: string;
  bodyMD: string;
  children: string;
  // color: string;
  redact: boolean;
}

interface CommentProps {
  comments: RedditComment[];
}

export const Comment: React.FC<CommentProps> = ({ comments }: CommentProps) => {
  const childComments = cloneDeep(comments);
  const { author, score, prettyDate, awards, bodyHTML } = childComments[0];
  return (
    <div>
      <div
        className="thing noncollapsed comment"
        style={{
          margin: "0 8px 8px 10px !important",
          border: "1px solid #e6e6e6 !important",
          padding: "5px 8px 5px 5px !important",
          overflow: "hidden",
        }}
      >
        <p className="parent"></p>
        <div className="midcol unvoted">
          <div className="arrow up login-required access-required"></div>
          <div className="arrow down login-required access-required"></div>
        </div>
        <div className="entry unvoted" id="comment">
          <p className="tagline">
            <a className="expand">[–]</a>
            <a
              className="author may-blank"
              // color={redact ? "black" : color}
              color="black"
            >
              {author}
            </a>
            <span className="score unvoted">{score + " "}</span>
            <time className="live-timestamp">{prettyDate}</time>
            <span className="awardings-bar">{}</span>
          </p>
          <form
            action="#"
            className="usertext warn-on-unload"
            id="form-t1_fpoes9lzos"
          >
            <input type="hidden" name="thing_id" value="t1_fpoes9l" />
            <div
              className="usertext-body may-blank-within md-container"
              dangerouslySetInnerHTML={{ __html: bodyHTML }}
            />
          </form>
          <ul className="flat-list buttons">
            <li className="first">
              <a>permalink</a>
            </li>
            <li>
              <a>embed</a>
            </li>
            <li className="comment-save-button save-button login-required">
              <a>save</a>
            </li>
            <li className="report-button login-required">
              <a className="reportbtn access-required">report</a>
            </li>
            <li className="give-gold-button">
              <a className="give-gold login-required access-required gold-give-gold">
                give award
              </a>
            </li>
            <li className="reply-button login-required">
              <a className="access-required">reply</a>
            </li>
          </ul>
        </div>
        <div className="child">
          {childComments.length > 1 ? (
            <Comment comments={childComments.slice(1)} />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
