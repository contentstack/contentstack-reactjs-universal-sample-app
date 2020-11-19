/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-danger */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable no-prototype-builtins */
import React from "react"
import $ from "jquery"
import Stack from "../sdk/entry"
import Layout from "../components/layout.jsx"
import "slick-carousel"

function dateSetter(params) {
  const date = new Date(params)
  const yy = new Intl.DateTimeFormat("en", { year: "numeric" }).format(date)
  const mm = new Intl.DateTimeFormat("en", { month: "short" }).format(date)
  const dd = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(date)
  return `${mm}-${dd}-${yy}`
}

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      entry: undefined,
      header: undefined,
      footer: undefined,
    }
  }

  async componentDidMount() {
    const header = await Stack.getEntry("header", "en-us")
    const footer = await Stack.getEntry("footer", "en-us")
    const result = await Stack.getSpecificEntryWihtRef(
      "blog_posts",
      this.props.location.pathname,
      "author",
      "en-us"
    )
    this.setState({
      header: header[0][0],
      footer: footer[0][0],
      entry: result[0],
    })
  }

  componentDidUpdate() {
    $(".imageSlider").slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      adaptiveHeight: true,
    })
  }

  render() {
    return (
      <Layout
        header={this.state.header}
        footer={this.state.footer}
        property={this.props}
      >
        {this.state.entry ? (
          <section className="singleBlogPost">
            <div
              className="container"
              style={{ padding: "0", margin: "0", width: "100%" }}
            >
              <div className="heroBanner">
                <ul style={{ padding: "0" }}>
                  <li>
                    <img
                      className="bannerImage"
                      src={this.state.entry.hero_banner.banner_image.url}
                      alt={this.state.entry.hero_banner.banner_image.filename}
                    />
                    <div className="bannerContent">
                      <h1>{this.state.entry.hero_banner.banner_title}</h1>
                      {this.state.entry ? (
                        <div>
                          <span className="blogPostTimeStamp">
                            {dateSetter(this.state.entry._owner.created_at)}
                          </span>
                          ,
                          <span className="blogpost-author">
                            {this.state.entry.author[0].title}
                          </span>
                        </div>
                      ) : (
                        "  "
                      )}
                    </div>
                  </li>
                </ul>
              </div>
              {this.state.entry.hasOwnProperty("blog_body") ? (
                <div className="blogBody">
                  {this.state.entry.blog_body.map((list, idx) => {
                    if (list.hasOwnProperty("rich_text_editor")) {
                      return (
                        <div
                          className="blogContent"
                          key={idx}
                          dangerouslySetInnerHTML={{
                            __html: list.rich_text_editor.rich_text,
                          }}
                        />
                      )
                    }
                    if (list.hasOwnProperty("image_carousel")) {
                      return (
                        <div className="imageSlider" key={idx}>
                          {list.image_carousel.carousel.map((img, id) => {
                            return (
                              <div key={id} className="img-wrapper">
                                <img
                                  src={img.image.url}
                                  alt={img.image.filename}
                                  className="carouselImages"
                                />
                                <div
                                  className="subcriptionLink legend"
                                  style={{
                                    background: "transparent",
                                    opacity: "1",
                                    position: "relative",
                                    top: "-100px",
                                    left: "40%",
                                  }}
                                >
                                  {img.link.map((li, key) => (
                                    <a
                                      href={li.href}
                                      className="button1 bouncy"
                                      key={key}
                                      style={{
                                        animationDelay: `${key * 0.07}s`,
                                      }}
                                    >
                                      {li.title}
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      )
                    }
                    if (list.hasOwnProperty("quotes")) {
                      return (
                        <div className="blogQuotes" key={idx}>
                          <h3 className="quotesTitle">Quotes</h3>
                          <blockquote
                            className="otroBlockquote"
                            dangerouslySetInnerHTML={{
                              __html: list.quotes.quote,
                            }}
                          />
                        </div>
                      )
                    }
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
            {this.state.entry.embedded_code
              ? this.state.entry.embedded_code.map((blog, idx) => {
                  return (
                    <div className="blogSocialNtw" key={idx}>
                      <h3 className="socialNtwTitle">Social Network</h3>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: blog,
                        }}
                      />
                    </div>
                  )
                })
              : ""}
          </section>
        ) : (
          ""
        )}
      </Layout>
    )
  }
}
