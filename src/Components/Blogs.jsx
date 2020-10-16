/* eslint-disable react/prop-types */
import React from "react";

function dateSetter(params) {
  const date = new Date(params);
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date);
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date);
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date);
  return `${mm}-${dd}-${yy}`;
}

export default class Blogs extends React.Component {
  render() {
    console.log(this.props.blogs);
    return this.props.blogs ? (
      <section id="blogs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2>Blogs</h2>
              <hr className="star-primary" />
            </div>
          </div>
          <div className="row">
            {this.props.hasOwnProperty("blogs")
              ? this.props.blogs.map(function (blog, key) {
                  return (
                    <div key={key} className="card">
                      <img
                            className="card-img-top"
                            key={key}
                            src={blog.hero_banner.banner_image.url}
                            alt={blog.hero_banner.banner_image.filename}
                          />
                      {blog.blog_body.map((list, idx) => {
                        return (
                          <div className="card-body" key={idx}>
                            <div className="authorSection">
                              <span className="timeStamp">
                                {dateSetter(blog._owner.created_at)}
                              </span>
                              ,
                              <span className="post-author">
                                {`${blog._owner.first_name} ${blog._owner.last_name}`}
                              </span>
                            </div>
                            <p className="blogPost">
                              {`${list.blog_post_page.blog_post[0].rich_text_editor.rich_text.slice(
                                3,
                                100
                              )}...`}
                            </p>
                          </div>
                        );
                      })}
                      <a
                        href={"/blogs" + blog.url}
                        className="btn btn-primary linkToPost"
                      >
                        Read More ...
                      </a>
                    </div>
                  );
                })
              : ""}
          </div>
        </div>
      </section>
    ) : (
      ""
    );
  }
}
