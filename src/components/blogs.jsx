/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-prototype-builtins */
/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from "react"

function dateSetter(params) {
  const date = new Date(params)
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date)
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date)
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date)
  return `${mm}-${dd}-${yy}`
}

export default class Blogs extends React.Component {
  render() {
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
                      <div className="card-body">
                        <h4 className="blogTitle">{blog.title}</h4>
                        <div className="authorSection">
                          <span className="timeStamp">
                            {dateSetter(blog._owner.created_at)}
                          </span>
                          ,
                          <span className="post-author">
                            {blog.author[0].title}
                          </span>
                        </div>
                        <p className="blogPost">
                          {`${blog.blog_body[0].rich_text_editor.rich_text.slice(
                            3,
                            100
                          )}...`}
                        </p>
                      </div>
                      <a href={blog.url} className="btn btn-primary linkToPost">
                        Read More ...
                      </a>
                    </div>
                  )
                })
              : ""}
          </div>
        </div>
      </section>
    ) : (
      ""
    )
  }
}
